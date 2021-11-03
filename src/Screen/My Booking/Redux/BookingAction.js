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

export const getOnGoing = (payload) => {
    return {
        type: 'GET_ON_GOING',
        payload
    }
}

export const setOnGoing = (payload) => {
    return {
        type: 'SET_ON_GOING',
        payload
    }
}

export const getSelectedTicketData = (payload) => {
    return {
        type: 'GET_SELECTED_TICKET_DATA',
        payload
    }
}

export const setSelectedTicketData = (payload) => {
    return {
        type: 'SET_SELECTED_TICKET_DATA',
        payload
    }
}