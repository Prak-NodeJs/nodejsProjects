import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    gender: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    dateOfBirth: {
        type: Date
    },
    userOTP: {
        type: Object
    },

}, { timestamps: true })


const User = mongoose.model('User', userSchema)

export default User;