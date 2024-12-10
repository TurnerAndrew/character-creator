import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import Class from './Class'

const Abilities = () => {

    const [ abilities, setAbilities ] = useState([])

    useEffect(() => {
        axios.get('/api/abilities')
        .then(res => setAbilities(res.data))
            console.log(abilities)
        }, [])    
        
        return (
            <div>Abilities</div>
        )
    }

export default Abilities