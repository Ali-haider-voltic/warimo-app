import { connect } from "@/dbConfig/dbConfig";
import bcrypt from 'bcryptjs';
import User from "../../../../modals/userModals";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function POST(request) {
        const reqBody = await request.json();
        const {email, password } = reqBody.data;

        if ( !email || !password) {
            return NextResponse.json(
                { message: "All fields required" },
                { status: 400 }
            );
        }
    try {
        await connect();
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json(
                { message: "User Not found" },
                { status: 400 }
            ); 
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return NextResponse.json(
                { message: "Invalid password" },
                { status: 400 }
            ); 
        }
        const token =jwt.sign(
            {id:user._id},
             process.env.JWT_SECRET || 'defaultSecret', // Add a fallback for development
            { expiresIn: '1h' }
        )

        // Return success response
        return NextResponse.json(
            {
                message: "Login successfully",
                token,
                success: true,
                userId: user._id.toString(),
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error logging user:", error.message);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
