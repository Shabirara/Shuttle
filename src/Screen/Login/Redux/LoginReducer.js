const InitialState = {
  email: '',
  password: '',
  access_token: '',
  isError: false,
  isloading: false,
  isLogged: false,
};

export const LoginReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL_TO_LOGIN_REDUCER':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_PASSWORD_TO_LOGIN_REDUCER':
      return {
        ...state,
        password: action.payload,
      };
    case 'SET_TOKEN_TO_LOGIN_REDUCER':
      return {
        ...state,
        access_token: action.payload,
        isError: false,
      };
    case 'POST_LOGIN':
      return {
        ...state,
        isError: false,
        access_token: action.payload,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isError: true,
      };
    case 'LOGIN_EXTRA_ERROR':
      console.log('dihentikan');
      return {
        ...state,
        isError: false,
      };
    default:
      return state;
  }
};
