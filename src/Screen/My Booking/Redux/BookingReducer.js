const initialState = {
    allBookings: {},
    ticketData: {},
    onGoing: {},
    selectedTicketData: {},
    reviewId: {}
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

        case 'SET_SELECTED_TICKET_DATA':
            return {
                ...state,
                selectedTicketData: action.payload
            }

        case 'SET_REVIEW_ID':
            return {
                ...state,
                reviewId: action.payload
            }

        default:
            return state
    }
}