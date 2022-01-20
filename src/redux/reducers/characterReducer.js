const initialState = {
    race: null,
    class: null,
    background: null,
    abilityScores: null,
    stats: null,
    proficiencies: [],
    spells: null,
    equipment: null
}

const SELECT_RACE = 'SELECT_RACE'
const SELECT_CLASS = 'SELECT_CLASS'
const SELECT_BACKGROUND = 'SELECT_BACKGROUND'
const SELECT_ABILITY_SCORES = 'SELECT_ABILITY_SCORES'
const SELECT_STATS = 'SELECT_STATS'
const SELECT_PROFICIENCES = 'SELECT_PROFICIENCIES'
const SELECT_SPELLS = 'SELECT_SPELLS'
const SELECT_EQUIPMENT = 'SELECT_EQUIPMENT'

export const selectRace = (race) => {
    return {
        type: SELECT_RACE,
        payload: race
    }
}

const characterReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_RACE:
            const race = action.payload
            console.log({...state, race: race})
            return {...state, race: race}
        default:
            return state
    }
}

export default characterReducer
