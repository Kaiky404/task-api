import mongoose from "mongoose";
import validator from "validator";

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: (value) => {
            if (!validator.isEmail(value)) {
                throw new Error("Email is invalid");
            }
        },
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate: (value) => {
            if (value.length < 6) {
                throw new Error("Password must be at least 6 characters");
            }
        },
        validate: (value) => {
            if (value.toLowerCase().includes("password")) {
                throw new Error("Password cannot be 'password'");
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate: (value) => {
            if (value < 0) {
                throw new Error("Age must be a positive number");
            }
        }
    }
});

export default User;