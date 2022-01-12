import { createStore } from 'redux'
import characterReducer from './characterReducer'

export default createStore(characterReducer)