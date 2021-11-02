export const setFullNameToRegisterReducer = payload => {
  return {
    type: 'SET_FULLNAME_TO_REGISTER_REDUCER',
    payload,
  };
};

export const setBirthdayToRegisterReducer = payload => {
  return {
    type: 'SET_BIRTHDAY_TO_REGISTER_REDUCER',
    payload,
  };
};

export const setEmailToRegisterReducer = payload => {
  return {
    type: 'SET_EMAIL_TO_REGISTER_REDUCER',
    payload,
  };
};

export const setPasswordToRegisterReducer = payload => {
  return {
    type: 'SET_PASSWORD_TO_REGISTER_REDUCER',
    payload,
  };
};

export const setConfirmPasswordToRegisterReducer = payload => {
  return {
    type: 'SET_CONFIRMPASSWORD_TO_REGISTER_REDUCER',
    payload,
  };
};

export const setTokenToRegisterReducer = payload => {
  return {
    type: 'SET_TOKEN_TO_REGISTER_REDUCER',
    payload,
  };
};

export const PostRegister = payload => {
  return {
    type: 'POST_REGISTER',
    payload,
  };
};
