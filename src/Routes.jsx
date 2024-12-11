import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import Races from './components/features/Races'
import RaceDetails from './components/features/RaceDetails'
import Classes from './components/features/Classes'
import ClassDetails from './components/features/ClassDetails'
import Abilities from './components/features/Abilities'

export default (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/classes' element={<Classes/>}/>
        <Route path='/classes/:name' element={<ClassDetails/>}/>
        <Route path='/races' element={<Races/>}/>
        <Route path='/races/:name' element={<RaceDetails/>}/>
        <Route path='/abilities' element={<Abilities/>}/>
    </Routes>
)