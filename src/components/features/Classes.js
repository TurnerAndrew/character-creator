import { React, useState, useEffect} from 'react'
import axios from 'axios';
import Class from './Class'

const Classes = () => {
  
  let [classes, setClasses] = useState([])
  
  useEffect(() => {
    axios.get('/api/classes').then(res => setClasses(res.data.classes))
  }, [])

  const classesMapped = classes.map(job => {       
    return <div key={job.index}>
              <Class details={job}/>
           </div>
    })

  return <div className='main-container'>
            {classesMapped}
         </div>;
};

export default Classes;
