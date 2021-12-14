import React from 'react'
import axios from 'axios'

const Main = () => {
    let [races, setRaces] = useState([])
    axios.get('https://api.open5e.com/races/').then(res => res.data.results)
    console.log(races)
    return (
        <div>
            
        </div>
    )
}

export default Main
