export const getAllNotifications = (payload) => {
    return {
        type: 'GET_ALL_NOTIFICATIONS',
        payload
    }
}

export const setAllNotifications = (payload) => {
    return {
        type: 'SET_ALL_NOTIFICATIONS',
        payload
    }
}