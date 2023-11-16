import { Vonage } from '@vonage/server-sdk'
import User from '../model/user.model.js'
import jwt from 'jsonwebtoken'
import { errorHandler } from '../utils/error.js'

const vonage = new Vonage({
    apiKey: "ff343768",
    apiSecret: "2fgkD1X1Pd0Jrhsv"
})

export const getUserOtp = async (req, res, next) => {
    if (!req.body) {
        return next(errorHandler(404, 'Please provide body'))
    }
    const { number } = req.body

    if (!number) {
        return next(errorHandler(404, 'Please provide user number'))
    }
    try {
        const user = await User.findOne({ mobileNumber: number })
        const loginOtp = generateOTPWithExpiration()

        if (user) {
            await User.findOneAndUpdate(
                { _id: user._id },
                { $set: { userOTP: loginOtp } }
            )
            const result = await sendSMS(number, loginOtp.otp)
            res.status(200).json(result)
            return
        }
        const newUser = {
            mobileNumber: number,
            userOTP: loginOtp
        }
        await User.create(newUser)
        const result = await sendSMS(number, loginOtp.otp)
        res.status(200).json(result)

    } catch (err) {
        next(err)
    }
}


const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString();
}

const generateOTPWithExpiration = () => {
    const otp = generateOTP();
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 5);
    return {
        otp,
        expiresAt: expirationTime,
    };
}


const sendSMS = async (number, otp) => {
    try {
        const from = 'Croma CLone'
        const to = `91${number}`
        const text = `Hi! Please use ${otp} as the OTP for singing up. We are excited to see you here. Regards, Croma Clone`
        await vonage.sms.send({ to, from, text })

        const msg = {
            success: true,
            message: `message sent to ${number}, valid till 5 minutes`
        }
        return msg
    } catch (error) {
        next(error)
    }

}

export const verifyUserOtp = async (req, res, next) => {
    try {
        console.log(req.body)
        const { number, otp } = req.body
        const user = await User.findOne({ mobileNumber: number })
        if (!user || !user.userOTP) {
            return next(errorHandler(400, 'No otp found for this number'))
        }
        if (user.userOTP.otp != otp) {
            return next(errorHandler(400, 'Invalid otp'))
        }
        if (new Date() >= user.userOTP.expiresAt) {
            return next(errorHandler(400, 'Otp expired'))
        }
        user.userOTP = undefined;
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.status(200).json({ success: true, access_token: token })
    } catch (error) {
        next(error)
    }
}