const initialState = {
    allNotifications: {}
}

export default function NotificationReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ALL_NOTIFICATIONS':
            return {
                ...state,
                allNotifications: action.payload
            }

        default:
            return state
    }
}