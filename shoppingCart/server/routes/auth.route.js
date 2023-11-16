import express from "express"
import { getUserOtp, verifyUserOtp } from "../controller/auth.controller.js"

const router = express.Router()

router.post('/getotp', getUserOtp)
router.post('/verifyotp', verifyUserOtp)


export default router