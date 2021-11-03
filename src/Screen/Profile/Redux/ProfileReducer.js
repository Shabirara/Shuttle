const initialState = {
    profileData: {}
}

export default function ProfileReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PROFILE_DATA':
            return {
                ...state,
                profileData: action.payload
            }
        default:
            return state
    }
}