import axios from "axios"
import { useEffect, useState } from "react"

const Race = (props) => {
    const {race} = props
    const [details, setDetails] = useState()
    
    useEffect(() => {
        axios.get(`http://www.dnd5eapi.co/api/races/${race.name.toLowerCase()}`).then(res => setDetails(res.data))
    }, [])

    console.log(details)

    return (
        <div>
            <div>
            <h4>Racial Bonuses: </h4>{details.ability_bonuses.map(ability => 
            <p>{ability.ability_score.name} + {ability.bonus}</p>
            )}
            <h3>{race.name}</h3> 
            
            </div>      
        </div>
    )
}

export default Race
