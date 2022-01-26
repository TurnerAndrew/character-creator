import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectRace, addAbilityScores } from '../../redux/reducers/characterReducer'

import '../../styles/race.css'
import axios from 'axios'

const Race = (props) => {

    const {img, name, description} = props.details
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

    const addAbilityScores = () => {
        props.addAbilityScores(abilityScores)
    }

    const submitRace = () => {
        selectRace()
        addAbilityScores()
    }
    
    
    return (
        <div id='race-overview'>
            <h3 id='race-name'>{name}</h3>
            <img src={img} alt='' id='race-img'/>
            <p id='race-description'>{description}</p>
            <div id='btn-container'>
                <Link to={`/races/${name}`}>
                    <button className='race-button'>More</button>
                </Link>
                <Link to={'/classes'}>
                    <button className ='race-button' onClick={submitRace}>Select</button>
                </Link>
            </div>
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

export default connect(mapStateToProps, { selectRace, addAbilityScores })(Race)