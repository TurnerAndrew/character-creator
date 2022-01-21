import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'
import Class from './Class'

const Classes = () => {
  
  let [classes, setClasses] = useState()

  useEffect(() => {
    axios.get('/api/classes').then(res => setClasses(res.data.classes))
  })

  const classesMapped = classes.map(job => {        
    return <div key={job.index}>
            <class details={job}/>
           </div>
    })

  return <div>
            {classesMapped}
         </div>;
};

export default Classes;
