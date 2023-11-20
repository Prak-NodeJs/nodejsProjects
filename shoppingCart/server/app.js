import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import authRoute from './routes/auth.route.js'
import userRoute from './routes/user.route.js'
import productRoute from './routes/product.js'

import cors from 'cors'

import mongoose from 'mongoose'
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("conected to mongodb")
}).catch((err) => {
    console.log(err)
})


const app = express()

app.use(express.json())
app.use(express.static('D:/NodejsProjects/nodejsProject/shoppingCart/server/public'))


app.use(cors())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/product', productRoute)



const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('server is running on port', PORT)
})



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })

})