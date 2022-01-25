import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { selectRace } from '../redux/reducers/characterReducer'
import Traits from './Traits'

const RaceDetails = (props) => {
    let {name} = useParams()
    let [details, setDetails] = useState({})
    let [img, setImg] = useState({})
    
    const selectRace = () => {
        props.selectRace(name)
    }

    useEffect(() => {
        axios.get(`https://www.dnd5eapi.co/api/races/${name.toLowerCase()}`)
            .then(res => setDetails(res.data))
        axios.get(`/api/races`)
            .then(res => setImg(res.data.races.filter(race => race.name.toLowerCase() === name.toLowerCase())[0].img))
    }, [])

    
    const { ability_bonuses : bonuses,
        starting_proficiencies : proficiencies,
        traits } = details
        
    
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
        <div>
            <h1>{details.name}</h1>
            <br></br>
            <br></br>
            <p>Movement Speed: {details.speed}</p>
            <br></br>
            <br></br>
            {bonusesMapped}
            <br></br>
            <br></br>
            <p>{details.age}</p>
            <br></br>
            <br></br>
            <p>{details.alignment}</p>
            <br></br>
            <br></br>
            <p>{details.size_description}</p>
            <br></br>
            <br></br>
            {proficienciesMapped}
            <br></br>
            <br></br>
            {/* {languagesMapped} */}
            <p>{details.language_desc}</p>
            <br></br>
            <br></br>
            {traitsMapped}
            <br></br>
            <br></br>
            <img src={img}/>
            <br></br>
            <br></br>
            <Link to='/classes'>
            <button onClick={selectRace}>Select {name}</button>
            </Link>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        race: state.race,
        details: ownProps.details
    }
}

export default connect(mapStateToProps, { selectRace })(RaceDetails)
