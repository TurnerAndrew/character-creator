import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const RaceDetails = () => {
    let {name} = useParams()
    let [details, setDetails] = useState({})
    
    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/races/${name.toLowerCase()}`).then(res => setDetails(res.data))
    }, [])

    console.log(details)

    return (
        <div>
            <h1>{details.name}</h1>
        </div>
    )
}

export default RaceDetails
