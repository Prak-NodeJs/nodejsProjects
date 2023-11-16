import express from "express"
import { updateUser, getUser, deleteUser } from "../controller/user.controller.js"
import { authenticate } from "../utils/verifyUser.js"

const router = express.Router()

router.get('/', authenticate, getUser)
router.put('/update', authenticate, updateUser)
router.delete('/', authenticate, deleteUser)


export default router