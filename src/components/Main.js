import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Race from './Race'
import {Link} from 'react-router-dom'

const Main = () => {

    let [races, setRaces] = useState([])
    useEffect(() => {
        axios.get(`/races`).then(res => setRaces(res.data.results))
    }, [])

    console.log(races)

    // const racesMapped = races.map(race => {
    //     return <div>
    //         <Link to={Race}>
    //              <h3>{race.name}</h3>
    //         </Link>
    //            </div>
    //     })


    return (
        <div>
            <h1>Hello</h1>
            {/* {racesMapped} */}
        </div>
    )
}

export default Main
