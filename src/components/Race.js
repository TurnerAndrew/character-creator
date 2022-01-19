import axios from "axios"
import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { selectRace } from '../redux/reducers/characterReducer'

import '../styles/race.css'

const Race = (props) => {

    const selectRace = () => {
        props.selectRace(props.details.name)
    }
    
    const {img, name, description, url} = props.details
    
    return (
        <div id='race-overview'>
            <h3 id='race-name'>{name}</h3>
            <img src={img} alt='' id='race-img'/>
            <p id='race-description'>{description}</p>
            <div id='btn-container'>
                <Link to={`/races/${name}`}>
                    <button className='race-button'>More</button>
                </Link>                             
                <button className ='race-button' onClick={selectRace}>Select</button>
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

export default connect(mapStateToProps, { selectRace })(Race)