const initialState = {
    race: null,
    class: null,
    background: null,
    abilityScores: {
        str: 0,
        dex: 0,
        con: 0,
        wis: 0,
        int: 0,
        cha: 0
    },
    hitDie: 0,
    stats: null,
    proficiencies: [],
    spells: null,
    equipment: null
}

const SELECT_RACE = 'SELECT_RACE'
const SELECT_CLASS = 'SELECT_CLASS'
const SELECT_BACKGROUND = 'SELECT_BACKGROUND'
const ADD_ABILITY_SCORES = 'SELECT_ABILITY_SCORES'
const ADD_HIT_DIE = 'ADD_HIT_DIE'
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

export const selectClass = (job) => {
    return {
        type: SELECT_CLASS,
        payload: job,
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
            return {...state, race: race}
        case ADD_ABILITY_SCORES:
            const modifiers = action.payload
            return {...state, abilityScores: {...state.abilityScores, ...modifiers}}
        case SELECT_CLASS:
            const job = action.payload
            console.log({...state, class: job})
            return {...state, class: job}
        default:
            return state
    }
}

export default characterReducer
