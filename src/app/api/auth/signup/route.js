import { connect } from "@/dbConfig/dbConfig";
import nodemailer from "nodemailer";
import User from "../../../../modals/userModals";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { randomInt } from "crypto";

// Function to generate a random 6-digit OTP
const generateOtp = () => randomInt(100000, 999999);

// Function to send an OTP email
const sendOtpEmail = async (email, otp) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email environment variables are not set properly");
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending OTP email:", error.message);
    throw new Error("Failed to send OTP email");
  }
};

// The main handler for the POST request
export async function POST(request) {
  try {
    await connect();

    const reqBody = await request.json();
    const { firstName, lastName, email, password } = reqBody;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !password?.trim()) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );
    }

    const otp = generateOtp();
    try {
      await sendOtpEmail(email, otp);
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to send OTP. Please try again." },
        { status: 500 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const otpExpires = new Date(Date.now() + 15 * 60 * 1000);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      otp,
      otpExpires,
    });

    return NextResponse.json(
      {
        message: "User created successfully. OTP sent to email.",
        success: true,
        user: {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
