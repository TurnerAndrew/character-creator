import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import RaceDetails from './RaceDetails'
import '../styles/race.css'

const Race = (props) => {
    
    const {img, name, description, url} = props.race
    
    useEffect(() => {
        
    },[])    
    

    return (
        <div id='race-overview'>
            <h3 id='race-name'>{name}</h3>
            <img src={img} alt='' id='race-img'/>
            <p id='race-description'>{description}</p>
            <div id='btn-container'>
            <Link to={`/races/${name}`}>
                <button className='race-button'>More Info</button>
            </Link>                             
            <button className ='race-button'>Select {name}</button>
            </div>
        </div>       
    )
}

export default Race
