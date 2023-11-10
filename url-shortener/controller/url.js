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

async function redirect(req, res) {
    const shortID = req.params.shortId;

    try {
        const doc = await URL.findOneAndUpdate(
            { shortId: shortID },
            { $set: { 'visitHistory.$[element].timestamps': Date.now() } },
            {
                new: true,
                arrayFilters: [{ 'element._id': { $exists: true } }],
            }
        );

        if (doc) {
            console.log(doc.redirectURL);
            res.send.redirect(doc.redirectURL);
        } else {
            // Handle case where the document is not found
            res.status(404).send('URL not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
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
    getAnalytics,
    redirect
}