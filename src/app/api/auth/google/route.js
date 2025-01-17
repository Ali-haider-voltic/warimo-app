import passport from "passport";
import { NextResponse } from "next/server";
import "@/lib/passport"

import { connect } from "@/dbConfig/dbConfig";

passport.initialize();




export async function GET(req) {
    await connect();
    return new Promise((resolve, reject) => {
        passport.authenticate("google", {
            scope: ["profile", "email"],
            session: false,
        })(req, {
            end: () => { },
            setHeader: (name, value) => {
                if (name.toLowerCase() === 'location') {
                    resolve(NextResponse.redirect(value));
                }
                console.log("this is value", value)
            },

        }, (error) => {
            if (error) {
                console.error("Error during Google authentication:", error);
                resolve(NextResponse.json({ error: "Authentication failed" }, { status: 500 }));
            }
        });
    });
}