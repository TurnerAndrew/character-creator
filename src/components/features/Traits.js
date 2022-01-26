import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'

const Traits = (props) => {

    // console.log(props)
    
    let [traits, setTraits] = useState()

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/traits/${props.name}`).then(res => setTraits(res.data.desc))
    }, [])

  return <div>
      <h1>{props.name}</h1>
      <br></br>
      <br></br>
      <p>{traits}</p>
  </div>;
};

export default Traits;
