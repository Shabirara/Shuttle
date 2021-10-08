export const setEmailToLoginReducer = (payload) => {
    return {
        type: "SET_EMAIL_TO_LOGIN_REDUCER",
        payload,
    };
};

export const setPasswordToLoginReducer = (payload) => {
    return {
        type: "SET_PASSWORD_TO_LOGIN_REDUCER",
        payload,
    };
};

export const setTokenToLoginReducer = (payload) => {
    return {
        type: "SET_TOKEN_TO_LOGIN_REDUCER",
        payload,
    };
};
