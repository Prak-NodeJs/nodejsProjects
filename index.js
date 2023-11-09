const express = require('express')
const { connectToMongoDB } = require('./connect')
const urlRoute = require('./routes/url')
const URL = require('./model/url')
const app = express()

connectToMongoDB('url').then(() => {
    console.log('mongodb connected')
})
const PORT = 8000
app.use(express.json())


app.use('/url', urlRoute)

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({ shortId }, {
        $push: {
            visitHistory: {
                timestamps: Date.now()
            }
        }
    })

    res.redirect(entry.redirectURL)
})

app.listen(PORT, () => {
    console.log(`server is listening on port number ${PORT}`)
})