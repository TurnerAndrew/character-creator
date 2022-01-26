const initialState = {
    race: null,
    class: null,
    background: null,
    abilityScores: {},
    stats: null,
    proficiencies: [],
    spells: null,
    equipment: null
}

const SELECT_RACE = 'SELECT_RACE'
const SELECT_CLASS = 'SELECT_CLASS'
const SELECT_BACKGROUND = 'SELECT_BACKGROUND'
const ADD_ABILITY_SCORES = 'SELECT_ABILITY_SCORES'
const SELECT_STATS = 'SELECT_STATS'
const SELECT_PROFICIENCES = 'SELECT_PROFICIENCIES'
const SELECT_SPELLS = 'SELECT_SPELLS'
const SELECT_EQUIPMENT = 'SELECT_EQUIPMENT'

export const selectRace = (race, abilityScores) => {
    return {
        type: SELECT_RACE,
        payload: race, abilityScores
    }
}

export const selectClass = (race) => {
    return {
        type: SELECT_CLASS,
        payload: race
    }
}

export const addAbilityScores = (abilityScores) => {
    return {
        type: ADD_ABILITY_SCORES,
        payload: abilityScores
    }
}

const characterReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_RACE:
            const race = action.payload
            console.log({...state, race: race})
            return {...state, race: race}
        case ADD_ABILITY_SCORES:
            const abilityScores = action.payload
            console.log({...state, abilityScores: abilityScores})
            return {...state, abilityScores: abilityScores}
        case SELECT_CLASS:
            const job = action.payload
            console.log({...state, class: job})
            return {...state, class: job}
        default:
            return state
    }
}

export default characterReducer
