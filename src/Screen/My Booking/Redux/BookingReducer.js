const initialState = {
    allBookings: {},
    ticketData: {}
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
        default:
            return state
    }
}