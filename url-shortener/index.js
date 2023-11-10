const express = require('express')
const { connectToMongoDB } = require('./connect')
const urlRoute = require('./routes/url')
const URL = require('./model/url')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const app = express()

connectToMongoDB(process.env.MONGO_URL).then(() => {
    console.log('mongodb connected')
})

const PORT = 8000
app.use(express.json())


app.use('/url', urlRoute)


app.listen(PORT, () => {
    console.log(`server is listening on port number ${PORT}`)
})