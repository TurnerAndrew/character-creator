const races = require('../races.json')

module.exports = {

    getRaces: (req, res) => {
        console.log('test')
        res.status(200).send(races)
    }

}