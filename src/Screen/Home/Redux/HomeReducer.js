const initialState = {
  departureData: {},
  terminalData: [],
  searchResultBus: [],
  busDetailsData: [],
  busReviewData: [],
  departureDate: '',
  arrivalDate: '',
  isOneWay: true,
  isArrival: false,
  fromBusDetails: false,
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TERMINAL_DATA':
      return {
        ...state,
        terminalData: action.payload,
      };

    case 'SET_SEARCH_RESULT_BUS':
      return {
        ...state,
        searchResultBus: action.payload,
      };

    case 'SET_BUS_DETAILS_DATA':
      return {
        ...state,
        busDetailsData: action.payload
      };

    case 'SET_BUS_REVIEW_DATA':
      return {
        ...state,
        busReviewData: action.payload
      };

    case 'SET_DEPARTURE_DATE':
      return {
        ...state,
        departureDate: action.payload
      };

    case 'SET_ARRIVAL_DATE':
      return {
        ...state,
        arrivalDate: action.payload
      };

    case 'SET_IS_ONE_WAY':
      return {
        ...state,
        isOneWay: action.payload
      }

    case 'SET_IS_ARRIVAL': {
      return {
        ...state,
        isArrival: action.payload
      }
    }

    case 'SET_FROM_BUS_DETAILS': {
      return {
        ...state,
        fromBusDetails: action.payload
      }
    }

    default:
      return state;
  }
}
