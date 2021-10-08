const InitialState = {
    email: "",
    password: "",
    access_token: "",
    isloading: false,
    isLogged: false,
};

export const LoginReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "SET_EMAIL_TO_LOGIN_REDUCER":
            return {
                ...state,
                email: action.payload,
            };
        case "SET_PASSWORD_TO_LOGIN_REDUCER":
            return {
                ...state,
                password: action.payload,
            };
        case "SET_TOKEN_TO_LOGIN_REDUCER":
            return {
                ...state,
                access_token: action.payload,
            };
        default:
            return state;
    }
};
