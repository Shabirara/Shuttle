const initialState = {
    loading: false,
    isSuccess: false,
    language: 'en',
    theme: 'dark',
    allData: []
}

export default function GlobalReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'GET_ALL_DATA':
            return {
                ...state,
                allData: action.payload
            }
        default:
            return state;
    }
}