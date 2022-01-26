import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Race from './Race'
import '../../styles/main.css'

const Races = () => {

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
        <div className='main-container'>
            {racesMapped}
        </div>
    )
}

export default Races

