import React, { useState, Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { Button, CheckBox, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ms } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import OneWay from './OneWay';
import RoundTrip from './RoundTrip';
import { useSelector, useDispatch } from 'react-redux';
import {
  getBusDetailsData,
  getBusReviewData,
  setBusDepartureId,
  setBusProviderName,
  setBusProviderNameReturn,
  setBusReturnId,
} from './Redux/HomeAction';
import moment from 'moment';

export default function SearchResult(props) {
  const searchResultList = useSelector(state => {
    return state.HomeReducer.searchResultBus;
  });
  console.log(searchResultList, 'searchResultList');
  const dataReturn = useSelector(state => {
    return state.HomeReducer.searchResultReturn;
  });
  const isReturn = useSelector(state => {
    return state.HomeReducer.isReturn;
  });
  const departureCity = useSelector(state => {
    return state.HomeReducer.departureCity;
  });
  const arrivalCity = useSelector(state => {
    return state.HomeReducer.arrivalCity;
  });
  const departureDate = useSelector(state => {
    return state.HomeReducer.departureDateString;
  });
  const returnDateRaw = useSelector(state => {
    return state.HomeReducer.returnDate;
  });
  const returnDate = moment(returnDateRaw).format('ddd, DD MMM YYYY');
  const isOneWay = useSelector(state => {
    return state.HomeReducer.isOneWay;
  });

  const [isChangeVisible, setChangeVisible] = useState(false);
  const [isSortVisible, setSortVisible] = useState(false);
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [activeCheck, setActiveCheck] = useState(0);
  const [busDetailsId, setBusDetailsId] = useState('');
  const [provider, setProvider] = useState('');

  const [active, setActive] = useState(isOneWay ? 0 : 1);

  const dispatch = useDispatch();

  const onBusDetails = () => {
    console.log(busDetailsId);
    console.log(provider, 'PROVIDER');
    if (isReturn) {
      dispatch(setBusReturnId(busDetailsId));
      dispatch(setBusProviderNameReturn(provider));
    } else {
      dispatch(setBusDepartureId(busDetailsId));
      dispatch(setBusProviderName(provider));
    }
    dispatch(getBusDetailsData({ id: busDetailsId }));
    dispatch(getBusReviewData(busDetailsId));
  };
  const toggleChangeModal = () => {
    setChangeVisible(!isChangeVisible);
  };
  const toggleSortModal = () => {
    setSortVisible(!isSortVisible);
  };
  const toggleFilterModal = () => {
    setFilterVisible(!isFilterVisible);
  };
  const dataTab = [
    {
      title: 'One Way',
    },
    {
      title: 'Round Trip',
    },
  ];

  const checklist = [
    'Lowest price',
    'Earliest departure time',
    'Earliest arrival time',
    'Shortest duration',
  ];

  const [filterDeparture, setFilterDeparture] = useState([
    { title: '00:00 - 16:00', active: false },
    { title: '06:00 - 12:00', active: false },
    { title: '12:00 - 18:00', active: false },
    { title: '18:00 - 00:00', active: false },
  ]);
  const [filterArrival, setFilterArrival] = useState([
    { title: '00:00 - 16:00', active: false },
    { title: '06:00 - 12:00', active: false },
    { title: '12:00 - 18:00', active: false },
    { title: '18:00 - 00:00', active: false },
  ]);
  const [busVendor, setBusVendor] = useState([
    { title: 'KYM Trans', active: false },
    { title: 'PT Sumber Bahagia', active: false },
    { title: 'DAMRI', active: false },
    { title: 'Harapan Jaya', active: false },
    { title: 'KYM Trans', active: false },
    { title: 'PT Sumber Bahagia', active: false },
    { title: 'Harapan Jaya', active: false },
  ]);

  const Item = ({
    bus,
    type,
    price,
    available,
    hourStart,
    duration,
    hourEnd,
    terminalStart,
    terminalEnd,
    id
  }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setBusDetailsId(id);
        setProvider(bus);
        onBusDetails();
      }}>
      <View
        style={{
          alignItems: 'center',
          marginRight: ms(10),
          justifyContent: 'space-evenly',
          height: ms(125),
        }}>
        <Image
          source={require('../../Assets/Images/bx_bx-bus.png')}
          style={{ height: ms(40), width: ms(40) }}
        />
        <Text style={styles.hour}>{hourStart}</Text>
        <Text style={styles.duration}>{duration}hr 00mnt</Text>
        <Text style={styles.hour}>{hourEnd}</Text>
      </View>
      <View style={{ flexDirection: 'column', marginTop: ms(10) }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: ms(245),
            height: ms(40),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{ flexShrink: 1, width: ms(120) }}>
              <Text style={styles.tanggal} numberOfLines={1}>
                {bus}
              </Text>
              <Text style={styles.type}>{type}</Text>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text style={styles.change}>IDR {price}/</Text>
              <Text style={styles.type}>seat</Text>
            </View>
            <Text style={styles.type}>Available Seat : {available}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'center', marginTop: ms(5) }}>
            <MaterialCommunityIcons
              name="circle-outline"
              color="#0F5996"
              size={ms(20)}
            />
            <FontAwesome
              name="ellipsis-v"
              color="#0F5996"
              style={{ marginVertical: ms(-3), width: ms(1) }}
            />
            <FontAwesome
              name="ellipsis-v"
              color="#0F5996"
              style={{ width: ms(1) }}
            />
            <FontAwesome
              name="ellipsis-v"
              color="#0F5996"
              style={{ marginVertical: ms(-4), width: ms(1) }}
            />
            <MaterialCommunityIcons
              name="record-circle-outline"
              color="#0F5996"
              size={ms(20)}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: ms(10),
              marginTop: ms(7),
              justifyContent: 'space-between',
              height: ms(60),
            }}>
            <Text style={styles.type}>{terminalStart}</Text>
            <Text style={styles.type}>{terminalEnd}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item
      id={item.busId}
      bus={item.BusProvider}
      type={'Executive'}
      price={item.price}
      available={item.seats}
      hourStart={item.departureTime}
      duration={item.roadtime}
      hourEnd={item.arrivalTime}
      terminalStart={item.departure_shuttle}
      terminalEnd={item.arrivalShuttle}
    />
  );

  return (
    <>
      <Modal
        isVisible={isChangeVisible}
        swipeDirection="down"
        onSwipeComplete={() => setChangeVisible(false)}
        style={{ margin: 0 }}>
        <View style={styles.changeModal}>
          <Divider
            orientation="horizontal"
            width={ms(8)}
            style={styles.holder}
          />
          <Text style={styles.jalur}>Change Shuttle</Text>
          <View style={styles.extension}>
            <View style={styles.top}>
              {dataTab.map((e, i) => (
                <TouchableOpacity
                  onPress={() => setActive(i)}
                  style={[
                    {
                      backgroundColor: active === i ? '#fff' : '#EDEDED',
                      width: '50%',
                    },
                    styles.topTab,
                  ]}>
                  <Text
                    style={
                      active === i ? styles.fontButton : styles.fontMedium
                    }>
                    {e.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <ScrollView style={{ width: '95%' }}>
            {active === 0 ? <OneWay /> : <RoundTrip />}
          </ScrollView>
        </View>
      </Modal>

      <Modal
        isVisible={isSortVisible}
        swipeDirection="down"
        onSwipeComplete={() => setSortVisible(false)}
        onBackdropPress={() => setSortVisible(false)}
        style={{ marginHorizontal: 0, marginTop: '100%', marginBottom: 0 }}>
        <View style={styles.sortModal}>
          <Divider
            orientation="horizontal"
            width={ms(8)}
            style={styles.holder}
          />
          <Text style={styles.jalur}>Sort By</Text>
          <View style={{ width: '100%' }}>
            {checklist.map((e, i) => {
              return (
                <CheckBox
                  title={e}
                  checkedIcon="dot-circle-o"
                  uncheckedIcon="circle-o"
                  checkedColor="#0F5996"
                  uncheckedColor="#0F5996"
                  onPress={() => {
                    setActiveCheck(i);
                  }}
                  checked={activeCheck === i ? true : false}
                  containerStyle={{
                    backgroundColor: 'white',
                    borderColor: 'white',
                  }}
                  textStyle={styles.sortFont}
                  key={i}
                />
              );
            })}
          </View>
          <Button
            title="Sort"
            onPress={() => setSortVisible(false)}
            buttonStyle={styles.sortButton}
            titleStyle={styles.sort}
          />
        </View>
      </Modal>

      <Modal
        isVisible={isFilterVisible}
        swipeDirection="down"
        onSwipeComplete={() => setFilterVisible(false)}
        style={{ marginHorizontal: 0, marginBottom: 0 }}>
        <ScrollView>
          <View style={styles.changeModal}>
            <Divider
              orientation="horizontal"
              width={ms(8)}
              style={styles.holder}
            />
            <Text style={styles.jalur}>Filter By</Text>
            <View style={styles.filterHeader}>
              <Text style={styles.sort}>Departure Time</Text>
              <TouchableOpacity
                onPress={() => {
                  filterDeparture.map((e, i) => {
                    setFilterDeparture(prevState => {
                      prevState[i].active = false;
                      return [...prevState];
                    });
                  });
                }}>
                <Text style={styles.sort}>RESET</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%' }}>
              {filterDeparture.map((e, i) => {
                return (
                  <CheckBox
                    title={e.title}
                    iconType="MaterialIcons"
                    checkedIcon="check-box"
                    uncheckedIcon="check-box-outline-blank"
                    checkedColor="#0F5996"
                    uncheckedColor="#0F5996"
                    onPress={() => {
                      setFilterDeparture(prevState => {
                        prevState[i].active = !prevState[i].active;
                        return [...prevState];
                      });
                    }}
                    checked={e.active}
                    containerStyle={{
                      backgroundColor: 'white',
                      borderColor: 'white',
                    }}
                    textStyle={styles.sortFont}
                    key={i}
                  />
                );
              })}
            </View>
            <View style={styles.filterHeader}>
              <Text style={styles.sort}>Arrival Time</Text>
              <TouchableOpacity
                onPress={() => {
                  filterArrival.map((e, i) => {
                    setFilterArrival(prevState => {
                      prevState[i].active = false;
                      return [...prevState];
                    });
                  });
                }}>
                <Text style={styles.sort}>RESET</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%' }}>
              {filterArrival.map((e, i) => {
                return (
                  <CheckBox
                    title={e.title}
                    iconType="MaterialIcons"
                    checkedIcon="check-box"
                    uncheckedIcon="check-box-outline-blank"
                    checkedColor="#0F5996"
                    uncheckedColor="#0F5996"
                    onPress={() => {
                      setFilterArrival(prevState => {
                        prevState[i].active = !prevState[i].active;
                        return [...prevState];
                      });
                    }}
                    checked={e.active}
                    containerStyle={{
                      backgroundColor: 'white',
                      borderColor: 'white',
                    }}
                    textStyle={styles.sortFont}
                    key={i}
                  />
                );
              })}
            </View>
            <View style={styles.filterHeader}>
              <Text style={styles.sort}>Bus Vendor</Text>
              <TouchableOpacity
                onPress={() => {
                  busVendor.map((e, i) => {
                    setBusVendor(prevState => {
                      prevState[i].active = false;
                      return [...prevState];
                    });
                  });
                }}>
                <Text style={styles.sort}>RESET</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%' }}>
              {busVendor.map((e, i) => {
                return (
                  <CheckBox
                    title={e.title}
                    iconType="MaterialIcons"
                    checkedIcon="check-box"
                    uncheckedIcon="check-box-outline-blank"
                    checkedColor="#0F5996"
                    uncheckedColor="#0F5996"
                    onPress={() => {
                      setBusVendor(prevState => {
                        prevState[i].active = !prevState[i].active;
                        return [...prevState];
                      });
                    }}
                    checked={e.active}
                    containerStyle={{
                      backgroundColor: 'white',
                      borderColor: 'white',
                    }}
                    textStyle={styles.sortFont}
                    key={i}
                  />
                );
              })}
            </View>
            <Button
              title="Sort"
              onPress={() => setFilterVisible(false)}
              buttonStyle={styles.sortButton}
              titleStyle={styles.sort}
            />
          </View>
        </ScrollView>
      </Modal>

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.jalurTanggal}>
          <Text style={styles.jalur}>
            {isReturn ? arrivalCity : departureCity} ➜{' '}
            {isReturn ? departureCity : arrivalCity}
          </Text>
          <Text style={styles.tanggal}>
            {isReturn ? returnDate : departureDate}
          </Text>
          {isReturn ? (
            <View style={styles.buttonChange}>
              <Text style={[styles.change, { alignSelf: 'center' }]}>
                Return Trip
              </Text>
            </View>
          ) : (
            <Button
              title="Change"
              onPress={toggleChangeModal}
              titleStyle={styles.change}
              buttonStyle={styles.buttonChange}
            />
          )}
        </View>

        <View style={styles.floatings}>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={toggleSortModal}>
              <Image source={require('../../Assets/Images/Vector.png')} />
              <Text style={styles.sort}>Sort</Text>
            </TouchableOpacity>
            <Divider
              orientation="vertical"
              height={ms(35)}
              color="white"
              width={ms(1)}
            />
            <TouchableOpacity
              style={styles.touchable}
              onPress={toggleFilterModal}>
              <Image
                source={require('../../Assets/Images/carbon_settings-adjust.png')}
              />
              <Text style={styles.sort}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={isReturn ? dataReturn : searchResultList}
          renderItem={renderItem}
          keyExtractor={item => item.busId}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  jalurTanggal: {
    height: ms(150),
    backgroundColor: '#CBFFCA',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: ms(10),
  },
  jalur: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#092C4C',
    fontSize: ms(16),
  },
  tanggal: {
    fontFamily: 'Montserrat-Medium',
    color: '#092C4C',
    fontSize: ms(14),
  },
  change: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#0F5996',
    fontSize: ms(14),
  },
  buttonChange: {
    width: ms(300),
    backgroundColor: 'white',
    borderRadius: ms(20),
    paddingVertical: ms(10),
    borderColor: 'gray',
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: ms(5),
    marginHorizontal: ms(20),
    borderRadius: ms(5),
    flexDirection: 'row',
  },
  type: {
    color: '#536C82',
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(10),
  },
  hour: {
    color: '#092C4C',
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(10),
  },
  duration: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(8),
    color: '#536C82',
  },
  floatings: {
    position: 'absolute',
    bottom: ms(50),
    zIndex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0F5996',
    flexDirection: 'row',
    borderRadius: ms(50),
    paddingVertical: ms(10),
    justifyContent: 'space-evenly',
    width: ms(300),
  },
  touchable: {
    margin: ms(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  sort: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(14),
    color: 'white',
    marginLeft: ms(5),
  },
  changeModal: {
    borderTopRightRadius: ms(20),
    borderTopLeftRadius: ms(20),
    paddingVertical: ms(10),
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  holder: {
    width: ms(70),
    alignSelf: 'center',
    borderRadius: ms(10),
    marginTop: ms(10),
    marginBottom: ms(10),
  },
  sortModal: {
    borderTopRightRadius: ms(20),
    borderTopLeftRadius: ms(20),
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  sortFont: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(14),
    color: '#092C4C',
  },
  sortButton: {
    backgroundColor: '#0F5996',
    width: ms(300),
    height: ms(50),
    borderRadius: ms(8),
  },
  filterHeader: {
    flexDirection: 'row',
    backgroundColor: '#0F5996',
    justifyContent: 'space-between',
    paddingVertical: ms(15),
    paddingHorizontal: ms(20),
    marginHorizontal: 0,
    marginVertical: ms(15),
    width: '100%',
  },
  fontMedium: {
    color: '#092C4C',
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(14),
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
    color: '#0F5996',
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topTab: {
    padding: ms(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(5),
    marginHorizontal: ms(-5),
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: ms(2) },
    shadowRadius: ms(2),
    elevation: ms(5),
  },
  extension: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: ms(20),
    justifyContent: 'center',
  },
});
