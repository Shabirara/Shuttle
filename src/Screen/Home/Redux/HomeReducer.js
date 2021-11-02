const initialState = {
  departureData: {},
  terminalData: [],
  searchResultBus: [],
  searchResultReturn: [],
  busDetailsData: [],
  busReviewData: [],
  seatData: [],

  terminalDepartureId: '',
  terminalArrivalId: '',
  departureDate: '',
  departureDateNum: '',
  departureDateString: '',
  arrivalDate: '',
  returnDate: '',
  passengerNum: 1,

  busDepartureId: '',
  busReturnId: '',
  busProviderName: '',
  busProviderNameReturn: '',
  isOneWay: true,
  isReturn: false,
  fromBusDetails: false,
  selectedSeat: [],
  selectedSeatReturn: [],
  orderId: '',
  departureCity: '',
  arrivalCity: '',
  departureCityReturn: '',
  arrivalCityReturn: '',
  departureTime: '',
  arrivalTime: '',
  departureTimeReturn: '',
  arrivalTimeReturn: '',
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

    case 'SET_SEARCH_RESULT_RETURN':
      return {
        ...state,
        searchResultReturn: action.payload,
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

    case 'SET_BUS_PROVIDER_NAME':
      return {
        ...state,
        busProviderName: action.payload
      }

    case 'SET_BUS_PROVIDER_NAME_RETURN':
      return {
        ...state,
        busProviderName: action.payload
      }

    // get search result
    case 'SET_TERMINAL_DEPARTURE_ID':
      return {
        ...state,
        terminalDepartureId: action.payload
      };

    case 'SET_TERMINAL_ARRIVAL_ID':
      return {
        ...state,
        terminalArrivalId: action.payload
      };

    case 'SET_DEPARTURE_DATE':
      return {
        ...state,
        departureDate: action.payload
      };

    case 'SET_DEPARTURE_DATE_NUM': {
      return {
        ...state,
        departureDateNum: action.payload
      }
    }

    case 'SET_DEPARTURE_DATE_STRING': {
      return {
        ...state,
        departureDateString: action.payload
      }
    }

    case 'SET_ARRIVAL_DATE':
      return {
        ...state,
        arrivalDate: action.payload
      };

    case 'SET_RETURN_DATE':
      return {
        ...state,
        returnDate: action.payload
      };

    case 'SET_PASSENGER_NUM': {
      return {
        ...state,
        passengerNum: action.payload
      }
    }

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

    case 'SET_ORDER_ID': {
      return {
        ...state,
        orderId: action.payload
      }
    }

    case 'SET_DEPARTURE_CITY': {
      return {
        ...state,
        departureCity: action.payload
      }
    }

    case 'SET_ARRIVAL_CITY': {
      return {
        ...state,
        arrivalCity: action.payload
      }
    }

    case 'SET_DEPARTURE_CITY_RETURN': {
      return {
        ...state,
        departureCityReturn: action.payload
      }
    }

    case 'SET_ARRIVAL_CITY_RETURN': {
      return {
        ...state,
        arrivalCityReturn: action.payload
      }
    }

    case 'SET_DEPARTURE_TIME': {
      return {
        ...state,
        departureTime: action.payload
      }
    }

    case 'SET_ARRIVAL_TIME': {
      return {
        ...state,
        arrivalTime: action.payload
      }
    }

    case 'SET_DEPARTURE_TIME_RETURN': {
      return {
        ...state,
        departureTimeReturn: action.payload
      }
    }

    case 'SET_ARRIVAL_TIME_RETURN': {
      return {
        ...state,
        arrivalTimeReturn: action.payload
      }
    }

    default:
      return state;
  }
}
