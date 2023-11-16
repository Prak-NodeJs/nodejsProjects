import User from "../model/user.model.js"
import { errorHandler } from "../utils/error.js"

export const updateUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.user.id })
        if (!user) return next(errorHandler(404, 'No User Found'))
        const updatedUser = await User.findOneAndUpdate(
            { _id: req.user.id }, { $set: req.body },
            { new: true }
        ).select('-createdAt -updatedAt -__v')
        res.status(200).json({ success: true, data: updatedUser })
    } catch (err) {
        next(err)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.user.id }).select('-createdAt -updatedAt -__v')
        if (!user) return next(errorHandler(404, 'No User Found'))
        res.status(200).json({ success: true, data: user })
    } catch (err) {
        next(err)
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ _id: req.user.id })
        if (!user) return next(errorHandler(404, 'No User Found'))
        await user.deleteOne()
        res.status(200).json({ success: true, message: "use deleted" })
    } catch (err) {
        next(err)
    }
}