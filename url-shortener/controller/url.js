const shortid = require('shortid')
const URL = require('../model/url')
async function generateNewShortURL(req, res) {

    const shortID = shortid()
    await URL.create({
        shortId: shortID,
        redirectURL: req.body.url,
        visitHistory: []
    })

    return res.json({ id: shortID })
}


async function getAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId })
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {
    generateNewShortURL,
    getAnalytics
}