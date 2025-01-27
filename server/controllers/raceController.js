import races from '../races.json' with { type: 'json'}
import classes from '../classes.json' with { type: 'json'}
import abilities from '../abilities.json' with { type: 'json'}

export function getRaces(req, res) {
        res.status(200).send(races)
    }

export function getClasses(req, res) {
        res.status(200).send(classes)
    }
    
export function getAbilities(req, res) {
        res.status(200).send(abilities)
    }