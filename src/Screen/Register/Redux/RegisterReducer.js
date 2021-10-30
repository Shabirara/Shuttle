const InitialState = {
  fullName: '',
  birthDay: '',
  email: '',
  password: '',
  confirmPassword: '',
  access_token: '',
  isloading: false,
  isLogged: false,
};

export const RegisterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'SET_FULLNAME_TO_REGISTER_REDUCER':
      return {
        ...state,
        fullName: action.payload,
      };
    case 'SET_BIRTHDAY_TO_REGISTER_REDUCER':
      return {
        ...state,
        birthDay: action.payload,
      };
    case 'SET_EMAIL_TO_REGISTER_REDUCER':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_PASSWORD_TO_REGISTER_REDUCER':
      return {
        ...state,
        password: action.payload,
      };
    case 'SET_CONFIRMPASSWORD_TO_REGISTER_REDUCER':
      return {
        ...state,
        confirmPassword: action.payload,
      };
    case 'SET_TOKEN_TO_REGISTER_REDUCER':
      return {
        ...state,
        access_token: action.payload,
      };
    default:
      return state;
  }
};
