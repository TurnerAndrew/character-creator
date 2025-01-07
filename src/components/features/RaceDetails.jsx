import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { selectRace, addModifiers } from '../../redux/reducers/characterReducer'
import Traits from './Traits'
import '../../styles/RaceDetails.css'

const RaceDetails = (props) => {
    let { name } = useParams()
    let [details, setDetails] = useState({})
    let [img, setImg] = useState({})
    const [abilities, setAbilities] = useState([])
    let abilityScores = {}

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/races/${name.toLowerCase()}`)
        .then(res => setDetails(res.data))
        axios.get(`https://www.dnd5eapi.co/api/races/${name.toLowerCase()}`)
        .then(res => setAbilities(res.data.ability_bonuses))
        axios.get(`/api/races`)
        .then(res => setImg(res.data.races.filter(race => race.name.toLowerCase() === name.toLowerCase())[0].img))
    }, [])
    
    
    abilities.forEach(ability => {
        let score = ability.ability_score.index
        let value = ability.bonus
        abilityScores[score] = value
    })
  

    const selectRace = () => {
        props.selectRace(name.toLowerCase())
     }
 
     const addModifiers = () => {
         props.addModifiers(abilityScores)
     }
 
     const submitRace = () => {
         selectRace()
         addModifiers()
     }
    
    const {
        ability_bonuses : bonuses,
        starting_proficiencies : proficiencies,
        traits 
        } = details
        
    
    let bonusesMapped
    let proficienciesMapped
    let traitsMapped
    
    if (bonuses) bonusesMapped = bonuses.map(ability => {
        return <div key={ability.ability_score.index}>
                 <p>{ability.ability_score.name}: +{ability.bonus}</p>
               </div>
    })

    if (proficiencies && proficiencies.length > 0) proficienciesMapped = proficiencies.map(skill => {
        return <div key={skill.index}>
            <p>{skill.name}</p>
        </div>
    })


    if (traits) traitsMapped = traits.map(trait => {
        return <div key={trait.index}>
            <Traits name={trait.index}/>
        </div>
    })


    return (
        <div id='race-details'>
        <div id="img-container">
            <img src={img}/>
        </div>
        <div id="detail-content">
            <h1>{details.name}</h1>            
            <br></br>
            <p>Movement Speed: {details.speed}</p>
            <br></br>
            <br></br>
            {bonusesMapped}
            <br></br>
            <br></br>
            <p className={'details'}>{details.age}</p>
            <br></br>
            <br></br>
            <p className={'details'}>{details.alignment}</p>
            <br></br>
            <br></br>
            <p className={'details'}>{details.size_description}</p>
            <br></br>
            <br></br>
            {proficienciesMapped}
            <br></br>
            <br></br>
            {/* {languagesMapped} */}
            <p className={'details'}>{details.language_desc}</p>
            <br></br>
            <br></br>
            {traitsMapped}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to='/classes'>
            <button onClick={submitRace}>Select {name}</button>
            </Link>
        </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        race: state.race,
        details: ownProps.details
    }
}

export default connect(mapStateToProps, { selectRace, addModifiers })(RaceDetails)
