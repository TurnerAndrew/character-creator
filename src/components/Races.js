import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Race from './Race'

const Main = () => {

    const baseURL = 'http://www.dnd5eapi.co/api'

    let [races, setRaces] = useState([])
    useEffect(() => {
        axios.get(`${baseURL}/races`).then(res => setRaces(res.data.results))
    }, [])

    const raceDisplay = races.map(race => <Race race={race}/>)
    console.log(races)

    return (
        <div>
            {raceDisplay}
        </div>
    )
}

export default Main
