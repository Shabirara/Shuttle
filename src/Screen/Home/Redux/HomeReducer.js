const initialState = {
  departureData: {},
  terminalData: [],
  searchResultBus: [],
  busDetailsData: [],
  busReviewData: [],
  seatData: [],
  busDepartureId: '',
  busReturnId: '',
  departureDate: '',
  departureDateNum: '',
  arrivalDate: '',
  isOneWay: true,
  isReturn: false,
  fromBusDetails: false,
  selectedSeat: [],
  selectedSeatReturn: []
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

    case 'SET_IS_RETURN': {
      return {
        ...state,
        isReturn: action.payload
      }
    }

    case 'SET_FROM_BUS_DETAILS': {
      return {
        ...state,
        fromBusDetails: action.payload
      }
    }

    case 'SET_BUS_DEPARTURE_ID': {
      return {
        ...state,
        busDepartureId: action.payload
      }
    }

    case 'SET_BUS_RETURN_ID': {
      return {
        ...state,
        busArrivalId: action.payload
      }
    }

    case 'SET_DEPARTURE_DATE_NUM': {
      return {
        ...state,
        departureDateNum: action.payload
      }
    }

    case 'SET_SEAT_DATA': {
      return {
        ...state,
        seatData: action.payload
      }
    }

    case 'SET_SELECTED_SEAT': {
      return {
        ...state,
        selectedSeat: action.payload
      }
    }

    case 'SET_SELECTED_SEAT_RETURN': {
      return {
        ...state,
        selectedSeatReturn: action.payload
      }
    }

    default:
      return state;
  }
}
