const initialState = {
    isLoading: false,
    data: []
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getAllDataSearch': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'getAllDataSearchSuccess': {
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        }
        case 'getAllDataSearchFailed': {
            return {
                ...state,
                isLoading: false,
            }
        }
        default:
            return state;
    }
}

export default searchReducer