import {React, useState, useEffect} from 'react'
import '../styles/main.css'
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
                <Race details={race}/>
               </div>
        })

    return (
        <div id='main-container'>
            {racesMapped}
        </div>
    )
}

export default Main

