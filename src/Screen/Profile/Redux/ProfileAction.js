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

export const patchProfile = (payload) => {
    return {
        type: 'PATCH_PROFILE',
        payload
    }
}

export const patchPassword = (payload) => {
    return {
        type: 'PATCH_PASSWORD',
        payload
    }
}