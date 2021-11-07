import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from 'react-native';
import { ms } from 'react-native-size-matters';
import { Card, Divider, Image } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../Store/globalAction'
import { setFromBusDetails, getSeatData, setDepartureCity, setArrivalCity, setDepartureCityReturn, setArrivalCityReturn, setDepartureTimeReturn, setArrivalTimeReturn, setDepartureTime, setArrivalTime } from './Redux/HomeAction';
import { navigate } from '../../Utils/Navigate';

export default function BusDetails(props) {
  const detailData = useSelector(state => {
    return state.HomeReducer.busDetailsData;
  })
  const reviewData = useSelector(state => {
    return state.HomeReducer.busReviewData;
  })
  const departureDateData = useSelector(state => {
    return state.HomeReducer.departureDate
  })
  const arrivalDateData = useSelector(state => {
    return state.HomeReducer.arrivalDate
  })
  const busDepartureId = useSelector(state => {
    return state.HomeReducer.busDepartureId
  })
  const isLogged = useSelector(state => {
    return state.Global.isLogged
  })
  const departureDateNum = useSelector(state => {
    return state.HomeReducer.departureDateNum
  })
  const token = useSelector(state => {
    return state.LoginReducer.access_token.token
  })
  const isReturn = useSelector(state => {
    return state.HomeReducer.isReturn
  })


  const dispatch = useDispatch()

  const [isSeeAll, setIsSeeAll] = useState(false)

  const onAllPhotos = () => {
    props.navigation.navigate('All Photos');
  };

  const onSelectSeat = () => {
    dispatch(setFromBusDetails(false))
    if (isReturn) {
      dispatch(setDepartureCityReturn(detailData.departure_city))
      dispatch(setArrivalCityReturn(detailData.destination_city))
      dispatch(setDepartureTimeReturn(detailData.departure_time))
      dispatch(setArrivalTimeReturn(detailData.arrival_time))
    } else {
      dispatch(setDepartureCity(detailData.departure_city))
      dispatch(setArrivalCity(detailData.destination_city))
      dispatch(setDepartureTime(detailData.departure_time))
      dispatch(setArrivalTime(detailData.arrival_time))
    }
    dispatch(getSeatData({
      date: departureDateNum,
      bus_schedule_id: busDepartureId,
      token: token
    }))
  };

  const onLogin = () => {
    dispatch(setFromBusDetails(true))
    navigate('Login')
  }

  const Item = ({ reviewer, review, comment }) => (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <Text style={styles.fontReviewer}>{reviewer}</Text>
        <Text style={styles.biruMedium}>{review}/5 {
          review === 5 ? '(Very Good)' :
            review === 4 ? '(Good)' :
              review === 3 ? '(Okay)' :
                review === 2 ? '(Bad)' :
                  'Very Bad'
        }
        </Text>
      </View>

      <Text style={styles.comment}>{comment}</Text>
    </View>
  );

  const renderReview = ({ item }) => (
    <Item
      reviewer={item.fullname}
      review={item.rating}
      comment={item.review}
    />
  );


  return (
    <ScrollView>
      <View style={styles.ijo}>
        <View style={styles.columnEven}>
          <Text style={styles.fontBiru}>{detailData.Bus.bus_name}</Text>
          <Text style={styles.fontKecil}>Executive</Text>
        </View>
        <View style={[styles.columnEven, { alignItems: 'flex-end' }]}>
          <View style={styles.rowBawah}>
            <Text style={styles.fontBiru}>IDR {detailData.price}</Text>
            <Text style={styles.fontKecil}>/seat</Text>
          </View>
          <Text style={styles.fontKecil}>Available seat: {detailData.Bus.seat}</Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../../Assets/Images/fotoBus.png')}
          PlaceholderContent={<ActivityIndicator />}
          style={styles.thumbnail} />
        <TouchableOpacity style={styles.allPhotos} onPress={onAllPhotos}>
          <Text style={styles.biruKecil}>See All Photos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.fontBesar}>Schedule</Text>
      </View>

      <View style={styles.contentContainer}>
        <View
          style={{
            alignItems: 'center',
            marginRight: ms(10),
            justifyContent: 'space-between',
            height: ms(130),
          }}>
          <View style={styles.columnCenter}>
            <Text style={styles.fontKecil}>{detailData.departure_time}</Text>
            <Text style={styles.fontMini}>{departureDateData}</Text>
          </View>

          <Text style={styles.fontMini}>8hr 00mnt</Text>
          <View style={styles.columnCenter}>
            <Text style={styles.fontKecil}>{detailData.arrival_time}</Text>
            <Text style={styles.fontMini}>{departureDateData}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="circle-outline"
                color="#0F5996"
                size={ms(20)}
                style={{ marginVertical: ms(-5) }}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{ marginBottom: ms(-3), width: ms(1) }}
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
                justifyContent: 'space-between',
                height: ms(130),
              }}>
              <View style={styles.contentBetween}>
                <Text style={styles.fontKecil}>{detailData.departure_shuttle}</Text>
                <Text style={styles.abuKecil}>
                  {detailData.departure_city}
                </Text>
              </View>
              <View style={styles.contentBetween}>
                <Text style={styles.fontKecil}>
                  {detailData.arrival_shuttle}
                </Text>
                <Text style={styles.abuKecil}>
                  {detailData.destination_city}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.fontBesar}>Facilities</Text>
      </View>

      <View style={[styles.contentContainer, { justifyContent: 'space-evenly' }]}>
        {detailData.Bus.air_conditioner ?
          <View style={[styles.columnCenter, { width: '20%' }]}>
            <Image
              source={require('../../Assets/Images/iconoir_air-conditioner.png')}
              PlaceholderContent={<ActivityIndicator />}
              style={styles.icon}></Image>
            <Text style={[styles.fontKecil, { textAlign: 'center' }]}>
              Air Conditioner
            </Text>
          </View> : null
        }
        {detailData.Bus.toilet ?
          <View style={[styles.columnCenter, { width: '20%' }]}>
            <Image
              source={require('../../Assets/Images/map_toilet.png')}
              PlaceholderContent={<ActivityIndicator />}
              style={styles.icon}></Image>
            <Text style={[styles.fontKecil, { textAlign: 'center' }]}>Toilet</Text>
          </View> : null
        }
        {detailData.Bus.free_meal ?
          <View style={[styles.columnCenter, { width: '20%' }]}>
            <Image
              source={require('../../Assets/Images/fluent_food-24-filled.png')}
              PlaceholderContent={<ActivityIndicator />}
              style={styles.icon}></Image>
            <Text style={[styles.fontKecil, { textAlign: 'center' }]}>
              Free Meal
            </Text>
          </View> : null
        }
        {detailData.Bus.charger ?
          <View style={[styles.columnCenter, { width: '20%' }]}>
            <Image
              source={require('../../Assets/Images/iconoir_ev-charge.png')}
              PlaceholderContent={<ActivityIndicator />}
              style={styles.icon}></Image>
            <Text style={[styles.fontKecil, { textAlign: 'center' }]}>Charger</Text>
          </View> : null
        }
        {detailData.Bus.comfortable_seat ?
          <View style={[styles.columnCenter, { width: '20%' }]}>
            <Image
              source={require('../../Assets/Images/icon-park-outline_baby-car-seat.png')}
              PlaceholderContent={<ActivityIndicator />}
              style={styles.icon}></Image>
            <Text style={[styles.fontKecil, { textAlign: 'center' }]}>
              Comfortable Seat
            </Text>
          </View> : null
        }
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.fontBesar}>Passenger Rating & Review</Text>
        <View
          style={[
            styles.rowBawah, { justifyContent: 'flex-end' }
          ]}>
          <FontAwesome name="star" color="#0F5996" size={ms(17)} />
          <View style={[styles.rowBawah, { marginLeft: ms(5) }]}>
            <Text style={styles.fontBiru}>{reviewData.rating}</Text>
            <Text style={styles.biruKecil}>/5</Text>
          </View>
        </View>
      </View>

      {reviewData && reviewData.allReview !== undefined ?
        <View>
          <View style={styles.passengerReview}>
            <FlatList
              data={reviewData.allReview.length > 2 ? reviewData.allReview.splice(0, 2) : reviewData.allReview}
              renderItem={renderReview}
              keyExtractor={item => `key-busdetail-${item.id}`}
              ItemSeparatorComponent={Divider}
            />
          </View>
          {reviewData.allReview > 1 ?
            <TouchableOpacity style={styles.allReviews} onPress={() => setIsSeeAll(!isSeeAll)}>
              <Text style={styles.fontBiru}>{isSeeAll ? 'SEE LESS' : 'SEE ALL REVIEW'}</Text>
            </TouchableOpacity> : null
          }
        </View>
        :
        <View style={styles.passengerReview}>
          <View style={styles.reviewContainer}>
            <View style={[styles.reviewHeader, { justifyContent: 'center' }]}>
              <Text style={styles.fontReviewer}>{reviewData.message}</Text>
            </View>
          </View>
        </View>
      }

      {isLogged ? null :
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.fontReviewer}>You’re not logged in, please login to continue</Text>
          </View>
          <Card containerStyle={[styles.card, { marginTop: 0 }]}>
            <TouchableOpacity style={styles.selectSeat} onPress={onLogin}>
              <Text style={styles.fontSeat}>Sign In</Text>
            </TouchableOpacity>
          </Card>
        </View>
      }

      <Card containerStyle={styles.card}>
        <TouchableOpacity style={isLogged ? styles.selectSeat : styles.selectSeatDisabled} onPress={onSelectSeat} disabled={isLogged ? false : true}>
          <Text style={styles.fontSeat}>Select Seat</Text>
        </TouchableOpacity>
      </Card>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  ijo: {
    backgroundColor: '#CBFFCA',
    width: '100%',
    paddingVertical: ms(10),
    paddingHorizontal: ms(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: ms(80),
  },
  fontBiru: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(14),
    color: '#0F5996',
  },
  rowBawah: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  fontKecil: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(10),
    color: '#092C4C',
  },
  columnEven: {
    justifyContent: 'space-evenly',
  },
  allPhotos: {
    backgroundColor: 'white',
    borderRadius: ms(20),
    paddingVertical: ms(5),
    paddingHorizontal: ms(15),
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: ms(20),
    right: ms(20),
    zIndex: 1,
  },
  biruKecil: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(10),
    color: '#0F5996',
  },
  thumbnail: {
    width: '100%',
    height: undefined,
    aspectRatio: 375 / 211,
  },
  headerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: ms(20),
    paddingVertical: ms(16),
    marginTop: ms(20),
    marginBottom: ms(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontBesar: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(14),
    color: '#092C4C',
  },
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: ms(10),
    paddingVertical: ms(20),
    flexDirection: 'row',
  },
  fontMini: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(8),
    color: '#536C82',
    paddingTop: ms(5),
  },
  columnCenter: {
    alignItems: 'center',
  },
  abuKecil: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(10),
    color: '#ABB3BB',
    paddingTop: ms(5),
  },
  contentBetween: {
    alignItems: 'flex-start',
    width: ms(250),
    height: ms(30),
    justifyContent: 'space-between',
  },
  icon: {
    width: ms(24),
    height: ms(24),
    margin: ms(10),
  },
  fontReviewer: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(12),
    color: '#092C4C',
    marginRight: ms(15),
  },
  biruMedium: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(12),
    color: '#0F5996',
  },
  comment: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(12),
    color: '#092C4C',
    paddingBottom: ms(20),
  },
  reviewHeader: {
    flexDirection: 'row',
    paddingVertical: ms(15),
  },
  reviewContainer: {
    paddingHorizontal: ms(10),
  },
  passengerReview: {
    backgroundColor: 'white',
    paddingHorizontal: ms(10),
  },
  allReviews: {
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: ms(10),
    paddingVertical: ms(20),
    flexDirection: 'row',
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    marginHorizontal: 0,
    marginTop: ms(20),
    alignItems: 'center',
  },
  selectSeat: {
    backgroundColor: '#0F5996',
    borderRadius: ms(10),
    paddingVertical: ms(15),
    width: ms(310),
    alignItems: 'center',
  },
  selectSeatDisabled: {
    backgroundColor: '#0F599610',
    borderRadius: ms(10),
    paddingVertical: ms(15),
    width: ms(310),
    alignItems: 'center',
  },
  fontSeat: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(14),
    color: 'white',
  },
});
