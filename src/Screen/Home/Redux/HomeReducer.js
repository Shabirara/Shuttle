const initialState = {
    departureData: {},
    terminalData: [],
    from: '',
    to: '',
    departure: '',
    return: '',
    orderType: '',
    passenger: 1
}

export default function HomeReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TERMINAL_DATA':
            return {
                ...state,
                terminalData: action.payload
            }

        case 'SET_SEARCH_RESULT_BUS':
            return {
                ...state,
                searchResultBus: action.payload
            }

        default:
            return state
    }
}