import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide a FirstName"],
    },
    lastName: {
        type: String,
        required: [true, "Please provide a LastName"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true, // Only email should be unique
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    otp: {
        type: Number,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgetPasswordToken: {
        type: String,
    },
    forgetPasswordTokenExpiry: {
        type: Date,
    },
    verifyTokenExpiry: {
        type: Date,
    },
    otpExpires: { type: Date },
});

// Use existing model if already defined
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
