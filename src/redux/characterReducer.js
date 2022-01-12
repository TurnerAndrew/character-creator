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

const characterReducer = (state = initialState, action) => {

}

const raceAction = {
    type: 'ADD_CHARACTER_RACE',
    payload: race,
}