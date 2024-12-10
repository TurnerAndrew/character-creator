const races = require('../races.json')
const classes = require('../classes.json')
const abilities = require('../abilities.json')

module.exports = {

    getRaces: (req, res) => {
        res.status(200).send(races)
    },

    getClasses: (req, res) => {
        res.status(200).send(classes)
    },
    
    getAbilities: (req, res) => {
        res.status(200).send(abilities)
    }
}