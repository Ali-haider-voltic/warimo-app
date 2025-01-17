import jwt from 'jsonwebtoken';
import { connect } from "@/dbConfig/dbConfig";
import User from "../../../../../modals/userModals";
import { NextResponse } from 'next/server';
import axios from 'axios';

const JWT_SECRET = process.env.JWT_SECRET || 'defaultSecret';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REDIRECT_URI = 'http://localhost:3000/api/auth/google/callback';

export async function GET(req) {
    try {
        const url = new URL(req.url);
        const code = url.searchParams.get('code');

        if (!code) {
            return NextResponse.json({ error: 'Authorization code missing' }, { status: 400 });
        }

        // Exchange the authorization code for an access token
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
            code,
            client_id: GOOGLE_CLIENT_ID,
            client_secret: GOOGLE_CLIENT_SECRET,
            redirect_uri: GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code',
        });

        const { access_token } = tokenResponse.data;

        // Use the access token to fetch user info from Google
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });

        const googleUser = userInfoResponse.data;

        if (!googleUser || !googleUser.email) {
            return NextResponse.json({ error: 'Unable to fetch user info from Google' }, { status: 400 });
        }

        await connect();

        // Check if the user exists in the database
        let user = await User.findOne({ email: googleUser.email });
        if (user) {
            if (!user.googleId) {
                // Email exists without a Google ID (registered with password)
                return NextResponse.redirect(
                    `${process.env.NEXTAUTH_URL}/login?error=email_registered_with_password`,
                    302 // Use 302 or 307 for temporary redirects
                );
            }
        } else {
            // Create a new user if not exists
            user = new User({
                firstName: googleUser.given_name || '',
                lastName: googleUser.family_name || '',
                email: googleUser.email,
                googleId: googleUser.id,
                isVerified: true,
                password: Math.random().toString(36).slice(-8), // No password for Google OAuth users
            });

            await user.save();
        }

        // Generate a JWT for the user
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

        // Redirect to a frontend page where localStorage is handled
        const redirectUrl = `http://localhost:3000/user/${user._id}?token=${token}`;
        return NextResponse.redirect(redirectUrl);
    } catch (error) {
        console.error('Error during Google OAuth callback:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}