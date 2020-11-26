const { Router } = require('express')
const router = Router()
const request = require('request-promise')
const getBase64 = require('../../utils/getBase64')

/*
@route   GET api/card/
@desc    Get cards
@access  Public
*/
router.get('/', async (req, res) => {
    let limit = req.query.limit
    try {
        const cards = await request('https://hr.peterpartner.net/test/android/v1/users.json')
        const users = JSON.parse(cards).users
        let arr = []

        if (limit) {
            users.slice(0, Number(limit)).map((el) => {
                el.transaction_history.map(async (his) => {
                    his.icon_url = await getBase64(his.icon_url)
                })
                arr.push(el)
            })
        } else {
            users.map((el) => {
                el.transaction_history.map(async (his) => {
                    his.icon_url = await getBase64(his.icon_url)
                })
                arr.push(el)
            })
        }

        return res.status(200).send(arr)
    } catch (err) {
        return res.status(500).send({ message: 'Server error' })
    }
})

module.exports = router
