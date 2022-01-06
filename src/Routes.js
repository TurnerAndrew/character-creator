import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Races from './components/Races'
import Race from './components/Race'

export default (
    <Routes>
        <Route path='/' element={<Races/>}/>
        <Route path='/race' element={<Race/>}/>
    </Routes>
)