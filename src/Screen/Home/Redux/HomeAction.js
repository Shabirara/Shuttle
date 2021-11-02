export const getTerminalData = (payload) => {
    return {
        type: 'GET_TERMINAL_DATA',
        payload
    }
}

export const setTerminalData = (payload) => {
    return {
        type: 'SET_TERMINAL_DATA',
        payload
    }
}

export const getSearchLocationData = (payload) => {
    return {
        type: 'GET_SEARCH_LOCATION_DATA',
        payload
    }
}

export const setSearchResultBus = (payload) => {
    return {
        type: 'SET_SEARCH_RESULT_BUS',
        payload
    }
}

export const getBusDetailsData = (payload) => {
    return {
        type: 'GET_BUS_DETAILS_DATA',
        payload
    }
}

export const setBusDetailsData = (payload) => {
    return {
        type: 'SET_BUS_DETAILS_DATA',
        payload
    }
}

export const setDepartureDateReducer = (payload) => {
    return {
        type: 'SET_DEPARTURE_DATE',
        payload
    }
}

export const setArrivalDateReducer = (payload) => {
    return {
        type: 'SET_ARRIVAL_DATE',
        payload
    }
}

export const getBusReviewData = (payload) => {
    return {
        type: 'GET_BUS_REVIEW_DATA',
        payload
    }
}

export const setBusReviewData = (payload) => {
    return {
        type: 'SET_BUS_REVIEW_DATA',
        payload
    }
}

export const setIsOneWay = (payload) => {
    return {
        type: 'SET_IS_ONE_WAY',
        payload
    }
}

export const setIsReturn = (payload) => {
    return {
        type: 'SET_IS_RETURN',
        payload
    }
}

export const setFromBusDetails = (payload) => {
    return {
        type: 'SET_FROM_BUS_DETAILS',
        payload
    }
}

export const setBusDepartureId = (payload) => {
    return {
        type: 'SET_BUS_DEPARTURE_ID',
        payload
    }
}

export const setBusReturnId = (payload) => {
    return {
        type: 'SET_BUS_RETURN_ID',
        payload
    }
}

export const getSeatData = (payload) => {
    return {
        type: 'GET_SEAT_DATA',
        payload
    }
}

export const setSeatData = (payload) => {
    return {
        type: 'SET_SEAT_DATA',
        payload
    }
}

export const setDepartureDateNum = (payload) => {
    return {
        type: 'SET_DEPARTURE_DATE_NUM',
        payload
    }
}

export const setSelectedSeat = (payload) => {
    return {
        type: 'SET_SELECTED_SEAT',
        payload
    }
}

export const setSelectedSeatReturn = (payload) => {
    return {
        type: 'SET_SELECTED_SEAT_RETURN',
        payload
    }
}