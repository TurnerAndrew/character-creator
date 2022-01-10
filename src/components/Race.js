import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import RaceDetails from './RaceDetails'

const Race = (props) => {
    
    const {img, name, description, url} = props.race
    console.log(img, name)
    
    useEffect(() => {
        
    },[])

    
    

    return (
        <div>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <img src={img} alt=''/>
                <Link to={RaceDetails}>
                    <button>More Info</button>
                </Link>                             
                <button>Select {name}</button>
            </div>      
        </div>
    )
}

export default Race
