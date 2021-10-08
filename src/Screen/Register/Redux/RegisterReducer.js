const InitialState = {
    fullName: "",
    email: "",
    password: "",
};

export const RegisterReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "SET_FULLNAME_TO_REGISTER_REDUCER":
            return {
                ...state,
                fullName: action.payload,
            };

        case "SET_BIRTHDAY_TO_REGISTER_REDUCER":
            return {
                ...state,
                birthday: action.payload,
            };

        case "SET_EMAIL_TO_REGISTER_REDUCER":
            return {
                ...state,
                email: action.payload,
            };
        case "SET_PASSWORD_TO_REGISTER_REDUCER":
            return {
                ...state,
                password: action.payload,
            };
        default:
            return state;
    }
};