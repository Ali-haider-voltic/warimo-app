import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../modals/userModals";


passport.use(
    "google",
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `${process.env.NEXTAUTH_URL}/api/auth/google/callback`,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const email = profile.emails[0].value;
                let user = await User.findOne({ email });

                if (!user) {
                    user = new User({
                        googleId: profile.id,
                        firstname: profile.name.givenName,
                        lastname: profile.name.familyName,
                        email: email,
                        password: Math.random().toString(36).slice(-8), // Generate a random password
                        isVerified: true,
                    });
                    await user.save();
                }

                return done(null, profile);
            } catch (error) {
                console.error("Error in Google strategy:", error);
                return done(error, null);
            }
        }
    )
);

passport.serializeUser((user, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

export default passport;