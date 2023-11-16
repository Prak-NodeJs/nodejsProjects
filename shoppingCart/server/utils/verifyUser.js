import { errorHandler } from "./error.js";
import jwt from 'jsonwebtoken'
export const authenticate = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        return next(errorHandler(404, 'Please provide token'))
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) return next(errorHandler(401, 'unauthorized'))
        req.user = decode
        next()
    });
}