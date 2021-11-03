const initialState = {
    allBookings: {},
    ticketData: {},
    onGoing: {}
}

export default function BookingReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ALL_BOOKINGS':
            return {
                ...state,
                allBookings: action.payload
            }
        case 'SET_TICKET_DATA':
            return {
                ...state,
                ticketData: action.payload
            }
        case 'SET_ON_GOING':
            return {
                ...state,
                onGoing: action.payload
            }
        default:
            return state
    }
}