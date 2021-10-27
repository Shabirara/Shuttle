const initialState = {
  loading: false,
  isSuccess: false,
  language: 'en',
  theme: 'dark',
};

export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
}
