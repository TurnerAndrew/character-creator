import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

const Race = (props) => {
    const {race} = props
    const [details, setDetails] = useState()
    
    useEffect(() => {
        axios.get(`http://www.dnd5eapi.co/api/races/${race.toLowerCase()}`).then(res => setDetails(res.data))
    },[race])

    
    console.log(details)

    return (
        <div>
            <div>
                <h3>{race.name}</h3> 
                             
            
            </div>      
        </div>
    )
}

export default Race
