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
const ADD_MODIFIERS = 'ADD_MODIFIERS'
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

export const selectClass = (job, hitDie) => {
    return {
        type: SELECT_CLASS,
        payload: {job: job, hitDie: hitDie}
    }
}

export const addAbilityScores = (abilityScores) => {
    return {
        type: ADD_ABILITY_SCORES,
        payload: abilityScores
    }
}

export const addModifiers = (modifiers) => {
    return {
        type: ADD_MODIFIERS,
        payload: modifiers
    }
}

const characterReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_RACE:
            const race = action.payload
            return {...state, race: race}
        case ADD_MODIFIERS:
            const modifiers = action.payload
            console.log({...state, abilityScores: {...modifiers}})
            return {...state, abilityScores: {...modifiers}}
        case ADD_ABILITY_SCORES:
            const abilities = action.payload
            return {...state, abilityScores: {...abilities}}
        case SELECT_CLASS:
            const job = action.payload.job
            const hitDie = action.payload.hitDie 
            console.log({...state, class: job, hitDie: hitDie})
            return {...state, class: job, hitDie: hitDie}
        default:
            return state
    }
}

export default characterReducer
