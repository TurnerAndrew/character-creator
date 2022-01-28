import { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectClass } from '../../redux/reducers/characterReducer'
import axios from 'axios'

const Class = (props) => {

    const { img, name, description } = props.details
    const [hitDie, setHitDie] = useState('')

    const selectClass = () => {
        props.selectClass(name, hitDie)
    }


    return (
        <div id='overview'>
            <h3 id='class-name'>{name}</h3>
            <img src={img} alt='' className='main-img'/>
            <p id='race-description'>{description}</p>
            <div id='btn-container'>
                <Link to={`/classes/${name}`}>
                    <button className='main-button'>More</button>
                </Link>
                <button className='main-button' onClick={selectClass}>Select</button>
            </div>
        </div>
    ) 
}

const mapStateToProps = (state, ownProps) => {
    return {
        class: state.class,
        details: ownProps.details
    }
}

export default connect(mapStateToProps, { selectClass})(Class)