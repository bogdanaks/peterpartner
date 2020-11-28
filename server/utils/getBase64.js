const request = require('request-promise')

const getBase64 = async (url, res) => {
    try {
        const result = await request.get(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                data =
                    'data:' +
                    response.headers['content-type'] +
                    ';base64,' +
                    Buffer.from(body).toString('base64')
                return data
            }
        })
        return result
    } catch (error) {
        return res.status(500).send({ message: 'Server error' })
    }
}

module.exports = getBase64
