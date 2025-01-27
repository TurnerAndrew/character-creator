import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectRace, addModifiers } from '../../redux/reducers/characterReducer'
import {Button, ButtonGroup} from "@heroui/button";

import '../../styles/race.css'
import axios from 'axios'

const Race = (props) => {

    const { img, name, description } = props.details
    const [abilities, setAbilities] = useState([])
    const abilityScores = {}

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/races/${name.toLowerCase()}`)
            .then(res => setAbilities(res.data.ability_bonuses)
        )}, [])


    abilities.forEach(ability => {
        let score = ability.ability_score.index
        let value = ability.bonus
        abilityScores[score] = value
    })
    
    const selectRace = () => {
       props.selectRace(props.details.name)
    }

    const addModifiers = () => {
        props.addModifiers(abilityScores)
    }

    const submitRace = () => {
        selectRace()
        addModifiers()
    }
    
    
    return (
        <div id='overview'>
            <h3 id='race-name'>{name}</h3>
            <img src={img} alt='' className='main-img'/>
            <p id='race-description'>{description}</p>
            <ButtonGroup id='btn-container'>
                <Link to={`/races/${name}`}>
                    <Button color="danger">MORE</Button>
                </Link>
                <Link to={'/classes'}>
                    <button className ='main-button' onClick={submitRace}>SELECT</button>
                </Link>
            </ButtonGroup>
        </div>       
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        race: state.race,
        abilityScores: state.abilityScores,
        details: ownProps.details
    }
}

export default connect(mapStateToProps, { selectRace, addModifiers })(Race)