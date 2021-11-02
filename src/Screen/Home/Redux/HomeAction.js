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

export const setIsArrival = (payload) => {
    return {
        type: 'SET_IS_ARRIVAL',
        payload
    }
}

export const setFromBusDetails = (payload) => {
    return {
        type: 'SET_FROM_BUS_DETAILS',
        payload
    }
}