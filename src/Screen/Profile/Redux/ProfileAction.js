export const getProfileData = (payload) => {
    return {
        type: 'GET_PROFILE_DATA',
        payload
    }
}

export const setProfileData = (payload) => {
    return {
        type: 'SET_PROFILE_DATA',
        payload
    }
}