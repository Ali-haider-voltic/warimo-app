import { connect } from "@/dbConfig/dbConfig"
import User from "../../../../modals/userModals"
import { NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
export async function POST(request) {
    try {
        await connect();
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Database connection error:", err.message);
        return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
    }
    
    try {
        
        const reqBody = await request.json()
        const { firstName,lastName, email, password } = reqBody
        console.log(reqBody)
        //hash Password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash
            (password, salt)
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save()
        console.log(savedUser)
        return NextResponse.json({
            message: "User Created successfuly",
            success: true,
            savedUser
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error.message },
            { status: 500 }
        )
    }

}