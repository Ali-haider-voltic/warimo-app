// pages/api/request-password-reset.js
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // You should check if the email exists in your database
    // For example, by querying your user database
    // const user = await findUserByEmail(email);

    // For the purpose of this example, let's assume the user exists
    const user = { email }; // Replace this with actual user retrieval logic

    if (!user) {
      return res.status(400).json({ error: 'No user found with this email address' });
    }

    // Create a password reset token (this is a one-time-use token)
    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET, // Set this in your .env.local file
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create the email content
    const resetLink = `${process.env.BASE_URL}/reset-password?token=${token}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset Request',
      text: `You requested a password reset. Click the following link to reset your password: ${resetLink}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send password reset email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
