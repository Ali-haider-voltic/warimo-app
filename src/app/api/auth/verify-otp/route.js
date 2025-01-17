    import { NextRequest, NextResponse } from 'next/server';
    import { connect } from "@/dbConfig/dbConfig";
    import User from "../../../../modals/userModals";

    export async function POST(req) {
    if (req.method !== 'POST') {
        return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
    }

    const body = await req.json();
    const { userId, otpEntered } = body;
    if (!userId || !otpEntered) {
        return NextResponse.json({ error: 'User ID and OTP are required' }, { status: 400 });
    }

    try {
        await connect();
        const user = await User.findById(userId);
        console.log(user.otp,"user")
        console.log(otpEntered,"user")
        if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        if (String(user.otp) !== String(otpEntered) ) {
        return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 });
        }

        // Update user status
        user.isVerified = true;
        user.otp = null;
        user.otpExpires = null;
        await user.save();

        return NextResponse.json({ message: 'Verification successful' }, { status: 200 });
    } catch (error) {
        console.error('Error verifying OTP:', error);
        return NextResponse.json({ error: 'Error verifying OTP' }, { status: 500 });
    }
    }