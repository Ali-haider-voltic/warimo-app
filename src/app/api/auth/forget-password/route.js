import nodemailer from 'nodemailer';
import { connect } from "@/dbConfig/dbConfig";
import User from "../../../../modals/userModals";

export async function POST(req) {
  try {
    await connect();// Connect to the database.
    const body = await req.json();
    const { email } = body?.email;
    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return new Response(
        JSON.stringify({ error: 'User not found' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const userId = existingUser._id.toString();
    // Send email
    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify your email',
        html: `<p>Click the link below to reset your password:</p>
               <a href="http://localhost:3000/${userId}/reset-password">Click Here</a>`,
      });

      return new Response(
        JSON.stringify({ message: 'Reset link sent!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ error: 'Error sending email.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
