import React, { useEffect, useState } from 'react';

//component
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Card, Input } from 'react-native-elements';

// icons
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

// redux
import { getSearchLocationData, getTerminalData, setArrivalCity, setDepartureCity, setDepartureDateNum, setDepartureDateReducer, setDepartureDateString, setIsOneWay, setIsReturn, setPassengerNum, setTerminalArrivalId, setTerminalDepartureId, setTerminalEndName, setTerminalStartName } from '../Home/Redux/HomeAction'
import { useDispatch, useSelector } from 'react-redux'

// others
import { ms } from 'react-native-size-matters';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const OneWay = props => {
  useEffect(() => {
    dispatch(getTerminalData());
  }, []);

  const dispatch = useDispatch();
  const terminalData = useSelector(state => {
    return state.HomeReducer.terminalData;
  });
  const data = useSelector(state => { return state.HomeReducer })

  const [pressed, setPressed] = useState(false);
  const [pressedA, setPressedA] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [searchResultA, setSearchResultA] = useState([]);
  const [valueSearch, setValueSearch] = useState(data?.terminalStartName);
  const [valueSearchA, setValueSearchA] = useState(data?.terminalEndName);
  const [terminalStartId, setTerminalStartId] = useState(data?.terminalDepartureId);
  const [terminalEndId, setTerminalEndId] = useState(data?.terminalArrivalId);
  const [cityStart, setCityStart] = useState(data?.departureCity)
  const [cityEnd, setCityEnd] = useState(data?.arrivalCity)

  const [showPassenger, setShowPassenger] = useState(false);
  const [passengerValue, setPassengerValue] = useState(data?.passengerNum);

  const [dateVisible, setDateVisible] = useState(false);
  const [datePicked, setDatePicked] = useState(data?.departureDateString)
  const [departureDate, setDepartureDate] = useState(data?.departureDateNum)
  const [dateShorted, setDateShorted] = useState(data?.departureDateReducer)
  const [dateShortYear, setDateShortYear] = useState(data?.departureDateString)


  const toggleDate = () => {
    setDateVisible(!dateVisible);
  };

  const handleDate = (date) => {
    const datestring = moment(date).format("dddd, DD MMM YYYY")
    const dateshort = moment(date).format('ddd, DD MMM')
    const dateshortyear = moment(date).format('ddd, DD MMM YYYY')
    const datenum = moment(date).format('YYYY-MM-DD')
    setDatePicked(datestring);
    setDateShorted(dateshort);
    setDateShortYear(dateshortyear);
    setDepartureDate(datenum);
    setDateVisible(false);
  }

  const onSearch = () => {
    dispatch(getSearchLocationData({
      departure_shuttle_id: terminalStartId,
      arrival_shuttle_id: terminalEndId,
      departure_date: departureDate,
      return_date: "",
      passenger: passengerValue,
      order_type: "OneWay",
      time: "",
      r_time: ""
    }));
    dispatch(setDepartureDateReducer(dateShorted))
    dispatch(setDepartureDateNum(departureDate))
    dispatch(setDepartureDateString(dateShortYear))
    dispatch(setIsOneWay(true))
    dispatch(setPassengerNum(passengerValue))
    dispatch(setIsReturn(false))
    dispatch(setTerminalStartName(valueSearch))
    dispatch(setTerminalEndName(valueSearchA))
    dispatch(setTerminalDepartureId(terminalStartId))
    dispatch(setTerminalArrivalId(terminalEndId))
    dispatch(setDepartureCity(cityStart))
    dispatch(setArrivalCity(cityEnd))
  };

  const passenger = [1, 2, 3, 4];

  const findData = searchString => {
    setValueSearch(searchString);
    const filteredCharacters = terminalData.filter(e => {
      if (searchString.length > 0) {
        return e.shuttle_name.toUpperCase().includes(searchString.toUpperCase());
      } else {
        setSearchResult([]);
      }
    });
    setSearchResult(filteredCharacters);
  };

  const findDataA = searchString => {
    setValueSearchA(searchString);
    const filteredCharactersA = terminalData.filter(e => {
      if (searchString.length > 0) {
        return e.shuttle_name.toUpperCase().includes(searchString.toUpperCase());
      } else {
        setSearchResult([]);
      }
    });
    setSearchResultA(filteredCharactersA);
  };

  return (
    <Card containerStyle={styles.oneContainer}>
      <Text style={styles.from}>From</Text>
      <View style={pressed ? styles.fromContainer : null}>
        <Input
          placeholder="Search place"
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          leftIcon={
            pressed ? (
              <EvilIcons
                name="search"
                style={{ color: 'grey', fontSize: ms(25) }}
              />
            ) : (
              <Image source={require('../../Assets/Images/Berangkat.png')} />
            )
          }
          rightIcon={
            pressed ? (
              <Feather
                name="x-circle"
                style={{
                  fontSize: ms(20),
                  color: '#092C4C',
                }}
                onPress={() => {
                  setValueSearch('');
                  setSearchResult([]);
                  setPressed(false);
                }}
              />
            ) : null
          }
          onFocus={() => setPressed(true)}
          value={valueSearch}
          onChangeText={text => {
            findData(text);
            setPressed(true);
          }}
        />
        {pressed ? (
          <View style={styles.searchResultContainer}>
            <Text style={styles.fontMedium}>
              {searchResult.length > 0 ? 'Search Result' : 'Popular City'}
            </Text>
            {searchResult.length > 0
              ? searchResult.map(e => (
                <TouchableOpacity
                  onPress={() => {
                    setValueSearch(e.shuttle_name);
                    setPressed(false);
                    setTerminalStartId(e.id);
                    setCityStart(e.city)
                  }}
                  style={styles.searchResult}>
                  <Text style={styles.fontKecil}>{e.shuttle_name}</Text>
                </TouchableOpacity>
              ))
              : terminalData.map(e => (
                <TouchableOpacity
                  onPress={() => {
                    setValueSearch(e.shuttle_name);
                    setPressed(false);
                    setTerminalStartId(e.id);
                    setCityStart(e.city)
                  }}
                  style={styles.searchResult}>
                  <Text style={styles.fontKecil}>{e.shuttle_name}</Text>
                </TouchableOpacity>
              ))}
          </View>
        ) : null}
      </View>

      <View style={styles.switch}>
        <Text style={styles.from}>To</Text>
        <TouchableOpacity
          onPress={() => {
            setValueSearch(valueSearchA);
            setValueSearchA(valueSearch);
            setTerminalStartId(terminalEndId);
            setTerminalEndId(terminalStartId);
            setCityStart(cityEnd)
            setCityEnd(cityStart)
          }}>
          <Image source={require('../../Assets/Images/switchValue.png')} />
        </TouchableOpacity>
      </View>
      <View style={pressedA ? styles.fromContainer : null}>
        <Input
          placeholder="Search place"
          style={styles.input}
          inputContainerStyle={styles.inputContainer}
          leftIcon={
            pressedA ? (
              <EvilIcons
                name="search"
                style={{ color: 'grey', fontSize: ms(25) }}
              />
            ) : (
              <Image source={require('../../Assets/Images/Pulang.png')} />
            )
          }
          rightIcon={
            pressedA ? (
              <Feather
                name="x-circle"
                style={{
                  fontSize: ms(20),
                  color: '#092C4C',
                }}
                onPress={() => {
                  setValueSearchA('');
                  setSearchResultA([]);
                  setPressedA(false);
                }}
              />
            ) : null
          }
          onFocus={() => setPressedA(true)}
          value={valueSearchA}
          onChangeText={text => {
            findDataA(text), setPressedA(true);
          }}
        />
        {pressedA ? (
          <View style={styles.searchResultContainer}>
            <Text style={styles.fontMedium}>
              {searchResultA.length > 0 ? 'Search Result' : 'Popular City'}
            </Text>
            {searchResultA.length > 0
              ? searchResultA.map(e => (
                <TouchableOpacity
                  onPress={() => {
                    setValueSearchA(e.shuttle_name);
                    setPressedA(false);
                    setTerminalEndId(e.id);
                    setCityEnd(e.city)
                  }}
                  style={styles.searchResult}>
                  <Text style={styles.fontKecil}>{e.shuttle_name}</Text>
                </TouchableOpacity>
              ))
              : terminalData.map(e => (
                <TouchableOpacity
                  onPress={() => {
                    setValueSearchA(e.shuttle_name);
                    setPressedA(false);
                    setTerminalEndId(e.id);
                    setCityEnd(e.city)
                  }}
                  style={styles.searchResult}>
                  <Text style={styles.fontKecil}>{e.shuttle_name}</Text>
                </TouchableOpacity>
              ))}
          </View>
        ) : null}
      </View>

      <Text style={styles.from}>Departure Date</Text>
      <Input
        placeholder="Select date"
        leftIcon={
          <Image source={require('../../Assets/Images/Kalender.png')} />
        }
        style={styles.input}
        inputContainerStyle={styles.inputContainer}
        onFocus={toggleDate}
        value={datePicked}
        showSoftInputOnFocus={false}
      />
      <DateTimePickerModal
        mode="date"
        isVisible={dateVisible}
        onConfirm={handleDate}
        onCancel={() => setDateVisible(false)}
      />

      <Text style={styles.from}>Passenger</Text>
      <Input
        placeholder="Select passenger"
        leftIcon={
          <Image source={require('../../Assets/Images/Penumpang.png')} />
        }
        style={styles.input}
        inputContainerStyle={styles.inputContainer}
        onFocus={() => setShowPassenger(true)}
        value={`${passengerValue} Passenger`}
        showSoftInputOnFocus={false}
      />

      <View style={showPassenger ? styles.dropdown : null}>
        {showPassenger
          ? passenger.map(e => (
            <TouchableOpacity
              style={
                passengerValue === e
                  ? styles.searchResultSelected
                  : styles.searchResult
              }
              onPress={() => {
                setPassengerValue(e);
                setShowPassenger(false);
              }}>
              <Text style={styles.fontKecil}>{e} Passenger</Text>
            </TouchableOpacity>
          ))
          : null}
      </View>

      <TouchableOpacity onPress={onSearch} style={styles.next}>
        <Text style={styles.fontButton}>Search</Text>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  oneContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: ms(5),
    paddingHorizontal: ms(10),
    paddingVertical: ms(20),
    margin: ms(20),
  },
  from: {
    color: '#092C4C',
    marginBottom: ms(12),
    fontFamily: 'Montserrat-Medium',
    marginHorizontal: ms(10),
  },
  fontMedium: {
    color: '#092C4C',
    marginBottom: ms(10),
    fontFamily: 'Montserrat-Medium',
  },
  fontKecil: {
    fontFamily: 'Montserrat-Regular',
    color: '#092C4C',
    fontSize: ms(12),
  },
  fromContainer: {
    borderWidth: ms(1),
    borderColor: '#D0D0D0',
    borderRadius: ms(5),
    paddingVertical: ms(10),
    marginHorizontal: ms(10),
    marginBottom: ms(10),
  },
  inputContainer: {
    borderWidth: ms(1),
    borderColor: '#D0D0D0',
    borderRadius: ms(5),
    paddingHorizontal: ms(10),
  },
  input: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(14),
  },
  dropdown: {
    borderWidth: ms(1),
    borderColor: '#D0D0D0',
    borderRadius: ms(5),
    marginTop: ms(-26),
    marginHorizontal: ms(9),
  },
  searchResultContainer: {
    paddingHorizontal: ms(15),
    marginBottom: ms(10),
    marginTop: ms(-10),
  },
  searchResult: {
    padding: ms(15),
  },
  searchResultSelected: {
    padding: ms(15),
    backgroundColor: '#CBFFCA',
  },
  switch: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: ms(-25),
  },
  next: {
    backgroundColor: '#0F5996',
    borderRadius: ms(10),
    paddingVertical: ms(15),
    marginHorizontal: ms(10),
    alignItems: 'center',
  },
  fontButton: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(14),
    color: 'white',
  },
});

export default OneWay;
