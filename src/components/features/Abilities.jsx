import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AbilityDetails from './AbilityDetails'

const Abilities = () => {

    const [ abilities, setAbilities ] = useState([])

    useEffect(() => {
        axios.get('/api/abilities').then(res => setAbilities(res.data.abilities))
        }, []);
                
    const abilitiesMapped = abilities.map(ability => {
        return (
            <AbilityDetails key={ability.index} url={ability.url} className='main-container'>
                {ability.name}
            </AbilityDetails>
        )
    })
            
        return (
            <div>
                {abilitiesMapped}
            </div>
        )
    }

export default Abilities