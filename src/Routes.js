import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import Race from './components/Race'
import RaceDetails from './components/RaceDetails'

export default (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/race' element={<Race/>}/>
        <Route path='/races/:name' element={<RaceDetails/>}/>

    </Routes>
)