const initState = [
    'Ukraine',
    'Russia',
    'English',
    'Poland',
    'Spain'
];

function countries(state = initState, action) {
    if (action.type === 'ADD_COUNTRY') {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === 'SEARCH_COUNTRY') {
        // return state.filter(item => item.includes(action.payload))
    }

    return state
}

export default countries;