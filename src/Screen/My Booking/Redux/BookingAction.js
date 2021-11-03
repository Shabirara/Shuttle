export const getAllBookings = (payload) => {
    return {
        type: 'GET_ALL_BOOKINGS',
        payload
    }
}

export const setAllBookings = (payload) => {
    return {
        type: 'SET_ALL_BOOKINGS',
        payload
    }
}

export const getTicketData = (payload) => {
    return {
        type: 'GET_TICKET_DATA',
        payload
    }
}

export const setTicketData = (payload) => {
    return {
        type: 'SET_TICKET_DATA',
        payload
    }
}