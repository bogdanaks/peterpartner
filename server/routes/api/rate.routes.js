const { Router } = require('express')
const router = Router()
const request = require('request-promise')

/*
@route   GET api/rate/
@desc    Get all rates
@access  Public
*/
router.get('/', async (req, res) => {
    try {
        const rates = await request('https://www.cbr-xml-daily.ru/daily_json.js')
        return res.status(200).send(rates)
    } catch (err) {
        return res.status(500).send({ message: 'Server error' })
    }
})

module.exports = router
