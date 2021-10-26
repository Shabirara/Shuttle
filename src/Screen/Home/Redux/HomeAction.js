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