import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import Races from './components/Races'
import RaceDetails from './components/RaceDetails'
import Classes from './components/Classes'

export default (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/classes' element={<Classes/>}/>
        <Route path='/races' element={<Races/>}/>
        <Route path='/races/:name' element={<RaceDetails/>}/>
    </Routes>
)