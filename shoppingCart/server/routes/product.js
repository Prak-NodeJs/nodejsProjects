import express from "express"
import { authenticate } from "../utils/verifyUser.js"
import { addProduct, getAllProducts } from "../controller/product.controller.js"

const router = express.Router()


router.post('/create', authenticate, addProduct)

router.get('/', authenticate, getAllProducts)


export default router