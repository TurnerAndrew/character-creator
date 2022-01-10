import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Race from './Race'
import {Link} from 'react-router-dom'

const Main = () => {

    let [races, setRaces] = useState([])
    useEffect(() => {
        axios.get(`/api/races`).then(res => setRaces(res.data.races))
    }, [])

    const racesMapped = races.map(race => {
        
        return <div key={race.index}>
                <Race race={race}/>
               </div>
        })

    return (
        <div>
            {racesMapped}
        </div>
    )
}

export default Main
