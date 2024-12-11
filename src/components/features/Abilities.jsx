import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Abilities = () => {

    const [ abilities, setAbilities ] = useState([])

    useEffect(() => {
        axios.get('/api/abilities').then(res => setAbilities(res.data.abilities))
        }, [])
        
    console.log(abilities)
        
    const abilitiesMapped = abilities.map(ability => {
        return (
            <div key={ability.index} className='main-container'>
                {ability.name}
            </div>
        )
    })
            
        return (
            <div>
                {abilitiesMapped}
            </div>
        )
    }

export default Abilities