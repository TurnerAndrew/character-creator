import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AbilityDetails = (props) => {

    const [ details, setDetails ] = useState();

    useEffect(() => {
        axios.get(`http://dnd5eapi.co${props.url}`).then(res => setDetails(res.data))
    }, []);

    console.log(details)

  return (
    <div></div>
  )
}

export default AbilityDetails