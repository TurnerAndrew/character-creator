const races = require('../races.json')

module.exports = {

    getRaces: (req, res) => {
        res.status(200).send(races)
    }

}