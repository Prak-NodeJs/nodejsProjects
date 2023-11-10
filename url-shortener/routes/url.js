const express = require('express')
const { generateNewShortURL, getAnalytics, redirect } = require('../controller/url')

const router = express.Router()

router.post('/', generateNewShortURL)
router.get('/:shortId', redirect)


router.get('/analytics/:shortId', getAnalytics)

module.exports = router
