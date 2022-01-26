import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { selectClass } from '../../redux/reducers/characterReducer'

const Class = (props) => {

    const selectClass = () => { 
        props.selectClass(props.details.name)
    }

    const { img, name, description } = props.details

    return (
        <div id='overview'>
            <h3 id='class-name'>{name}</h3>
            <img src={img} alt='' id='main-img'/>
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