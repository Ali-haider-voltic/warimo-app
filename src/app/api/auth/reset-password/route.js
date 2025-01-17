import bcrypt from 'bcryptjs';
import { connect } from "@/dbConfig/dbConfig"; // Ensure the path to dbConfig is correct
import User from "../../../../modals/userModals"; // Ensure path to your user model is correct
import { NextResponse } from 'next/server';

// POST request handler
export async function POST(req) {
  await connect(); // Ensure you are connecting to the database
  const { userId, newPassword } = await req.json(); // Use req.json() to read the body

  // Check for missing fields
  if (!userId || !newPassword) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Find the user in the database
  const existingUser = await User.findOne({ _id: userId });
  if (!existingUser) {
    return NextResponse.json({ error: 'User not found' }, { status: 400 });
  }

  try {
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    existingUser.password = hashedPassword;
    await existingUser.save();

    // Respond with success message
    return NextResponse.json({ message: 'Password successfully reset' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to reset password' }, { status: 500 });
  }
}
