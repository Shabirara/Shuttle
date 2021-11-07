import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { ms } from 'react-native-size-matters';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import noTicket from '../../Assets/Images/NoTicket.png';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import bookingButton from '../../Assets/Images/BookingButton.png';
import bookingTicket from '../../Assets/Images/BookingTicket.png';
import { Icon } from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBookings, getOnGoing, getReviewId, getSelectedTicketData } from './Redux/BookingAction';
import { getPaymentDetail, setIsReturn } from '../Home/Redux/HomeAction';
import { setIsOneWay } from '../Home/Redux/HomeAction';

export default function MyBooking(props) {
  const token = useSelector(state => state.LoginReducer.access_token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const ticket = props.navigation.addListener('focus', () => {
      dispatch(getAllBookings({ token: token }))
    });
    const going = props.navigation.addListener('focus', () => {
      dispatch(getOnGoing({ token: token }))
    })
    return ticket, going
  }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     dispatch(getAllBookings({ token: token }));
  //     dispatch(getOnGoing({ token: token }));
  //   }, 60000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])

  const [active, setActive] = useState(0);

  const dataTab = [
    {
      title: 'On Going Booking',
    },
    {
      title: 'E-Ticket',
    },
  ];

  return (
    <>
      <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#0F5996',
            }}>
            {dataTab.map((e, i) => (
              <TouchableOpacity
                onPress={() => setActive(i)}
                style={{
                  backgroundColor: active === i ? '#fff' : '#EDEDED',
                  padding: ms(14),
                  height: hp(6),
                  flex: ms(1),
                  alignItems: 'center',
                }}
                key={`key-mybooking-${i}`}>
                <Text
                  style={{ color: '#0F5996', fontFamily: 'Montserrat-Medium' }}>
                  {e.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              padding: ms(20),
              height: hp(100),
              fontFamily: 'Montserrat-Medium',
            }}>
            {active === 0 ? <OnGoingBooking /> : <ETicket />}
          </View>
        </View>
      </View>
    </>
  );
}

const OnGoingBooking = props => {
  const ongoing = useSelector(state => {
    return state.BookingReducer.onGoing.data
  })

  const token = useSelector(state => state.LoginReducer.access_token.token)

  const dispatch = useDispatch()

  const onBookingDetail = (data) => {
    console.log(data.oneWay)
    dispatch(setIsOneWay(data.oneWay === 'OneWay' ? true : false))
    dispatch(getPaymentDetail({
      orderId: data.orderId,
      token: token
    }))
  };
  return (
    <ScrollView style={{ marginBottom: ms(170) }}>
      {
        ongoing?.reverse().map((e, i) => (
          <View key={`key-ongoing-${i}`}>
            <View style={styles.ticketContaint}>
              <View style={styles.orderID}>
                <Text
                  style={{
                    color: '#092C4C',
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  Order ID
                </Text>
                <View style={{ width: ms(160) }}>
                  <Text style={{ color: '#092C4C', fontFamily: 'Montserrat-SemiBold', flexShrink: 1 }} numberOfLines={1}>
                    {e.order_id}
                  </Text>
                </View>

              </View>
              <Divider />
              <View style={styles.paymentContainer}>
                <View
                  style={
                    e?.payment_status === 'expired'
                      ? styles.expiredWrapper
                      : e?.payment_status === 'success'
                        ? styles.successWrapper
                        : styles.pendingWrapper
                  }>
                  <Text style={styles.fontButton}>
                    Status Payment: {e?.payment_status === 'expired' ? 'Expired' : e?.payment_status === 'success' ? 'Success' : 'Pending'}
                  </Text>
                </View>
              </View>
              <Divider />
              <View style={styles.payAndDestination}>
                <View
                  style={{
                    marginLeft: ms(90),
                    marginRight: ms(40),
                  }}>
                  <Text
                    style={{
                      color: '#092C4C',
                      fontSize: ms(10),
                      fontFamily: 'Montserrat-Regular',
                      paddingBottom: ms(5),
                    }}>
                    Amount to Pay
                  </Text>
                  <Text
                    style={{
                      color: '#092C4C',
                      fontFamily: 'Montserrat-SemiBold',
                      fontSize: ms(14),
                    }}>
                    IDR {e.amount_to_pay}
                  </Text>
                </View>
                <View style={{ marginRight: ms(80) }}>
                  <Text
                    style={{
                      color: '#092C4C',
                      fontSize: ms(10),
                      fontFamily: 'Montserrat-Regular',
                      paddingBottom: ms(5),
                    }}>
                    Destination
                  </Text>
                  <Text
                    style={{
                      color: '#092C4C',
                      fontFamily: 'Montserrat-SemiBold',
                      fontSize: ms(14),
                    }}>
                    {e.destination} ({e.order_type})
                  </Text>
                </View>
              </View>
              <Divider />
              <TouchableOpacity
                style={styles.buttonBookingDetail}
                onPress={() => onBookingDetail({ orderId: e.order_id, oneWay: e.order_type })}>
                <Image source={bookingButton} />
              </TouchableOpacity>
            </View>
          </View >
        ))
      }

    </ScrollView>
  );
};

const ETicket = props => {
  const tickets = useSelector(state => { return state.BookingReducer.allBookings?.data })
  const token = useSelector(state => state.LoginReducer.access_token.token)
  console.log(tickets)

  const navigation = useNavigation();
  const dispatch = useDispatch()

  const onBookingDetail = (data) => {
    dispatch(setIsReturn(data.isReturn))
    dispatch(getReviewId({ token: token }))
    dispatch(getSelectedTicketData({
      orderId: data.orderId,
      token: token
    }))
  };
  return (
    <View style={{ flex: 1 }}>
      {tickets?.length === 0 ?
        <View style={styles.noTicketContaint}>
          <Image source={noTicket} />
        </View> :


        <ScrollView style={{ marginBottom: ms(170) }}>
          {tickets?.reverse().map((e, i) => (
            <View key={`key-tickets-${i}`}>
              <View style={styles.ticketContaint}>
                <View style={styles.orderID}>
                  <Text
                    style={{
                      color: '#092C4C',
                      fontFamily: 'Montserrat-SemiBold',
                    }}>
                    Departure Ticket
                  </Text>
                  <Text style={{ color: '#092C4C', fontFamily: 'Montserrat-SemiBold', width: ms(160) }} numberOfLines={1}>
                    {e.ticket}
                  </Text>
                </View>
                <Divider />
                <View style={styles.paymentContainer}>
                  <View
                    style={
                      e.departure_status_ticket ? styles.successWrapper
                        : styles.pendingWrapper
                    }>
                    <Text style={styles.fontButton}>
                      Status Ticket:{' '}
                      {e.departure_status_ticket ? 'Success' : 'Waiting Check In'}
                    </Text>
                  </View>
                </View>
                <Divider />
                <View style={styles.payAndDestination}>
                  <View
                    style={{
                      marginLeft: ms(90),
                      marginRight: ms(40),
                    }}>
                    <Text
                      style={{
                        color: '#092C4C',
                        fontSize: ms(10),
                        fontFamily: 'Montserrat-Regular',
                        paddingBottom: ms(5),
                      }}>
                      Departure Date
                    </Text>
                    <Text
                      style={{
                        color: '#092C4C',
                        fontFamily: 'Montserrat-SemiBold',
                        fontSize: ms(14),
                      }}>
                      {e.departure_date}
                    </Text>
                  </View>
                  <View style={{ marginRight: ms(80) }}>
                    <Text
                      style={{
                        color: '#092C4C',
                        fontSize: ms(10),
                        fontFamily: 'Montserrat-Regular',
                        paddingBottom: ms(5),
                      }}>
                      Destination
                    </Text>
                    <Text
                      style={{
                        color: '#092C4C',
                        fontFamily: 'Montserrat-SemiBold',
                        fontSize: ms(14),
                      }}>
                      {e.departure_destination}
                    </Text>
                  </View>
                </View>
                <Divider />
                <TouchableOpacity
                  style={styles.buttonBookingDetail}
                  onPress={() => onBookingDetail({ orderId: e.order_id, isReturn: false })}>
                  <Image
                    style={{ resizeMode: 'contain', height: 60 }}
                    source={bookingTicket}
                  />
                </TouchableOpacity>
              </View>

              {
                e.order_type === 'OneWay' ? null :
                  <View style={styles.ticketContaint}>
                    <View style={styles.orderID}>
                      <Text
                        style={{
                          color: '#092C4C',
                          fontFamily: 'Montserrat-SemiBold',
                        }}>
                        Return Ticket
                      </Text>
                      <Text style={{ color: '#092C4C', fontFamily: 'Montserrat-SemiBold' }}>
                        {e.ticket}
                      </Text>
                    </View>
                    <Divider />
                    <View style={styles.paymentContainer}>
                      <View
                        style={
                          e.return_status_ticket
                            ? styles.successWrapper
                            : styles.pendingWrapper
                        }>
                        <Text style={styles.fontButton}>
                          Status Ticket:{' '}
                          {e.return_status_ticket ? 'Success' : 'Waiting Check In'}
                        </Text>
                      </View>
                    </View>
                    <Divider />
                    <View style={styles.payAndDestination}>
                      <View
                        style={{
                          marginLeft: ms(90),
                          marginRight: ms(40),
                        }}>
                        <Text
                          style={{
                            color: '#092C4C',
                            fontSize: ms(10),
                            fontFamily: 'Montserrat-Regular',
                            paddingBottom: ms(5),
                          }}>
                          Return Date
                        </Text>
                        <Text
                          style={{
                            color: '#092C4C',
                            fontFamily: 'Montserrat-SemiBold',
                            fontSize: ms(14),
                          }}>
                          {e.return_date}
                        </Text>
                      </View>
                      <View style={{ marginRight: ms(80) }}>
                        <Text
                          style={{
                            color: '#092C4C',
                            fontSize: ms(10),
                            fontFamily: 'Montserrat-Regular',
                            paddingBottom: ms(5),
                          }}>
                          Destination
                        </Text>
                        <Text
                          style={{
                            color: '#092C4C',
                            fontFamily: 'Montserrat-SemiBold',
                            fontSize: ms(14),
                          }}>
                          {e.return_destination}
                        </Text>
                      </View>
                    </View>
                    <Divider />
                    <TouchableOpacity
                      style={styles.buttonBookingDetail}
                      onPress={() => onBookingDetail({ orderId: e.order_id, isReturn: true })}>
                      <Image
                        style={{ resizeMode: 'contain', height: 60 }}
                        source={bookingTicket}
                      />
                    </TouchableOpacity>
                  </View>
              }

              <Divider style={{ marginBottom: ms(50) }} width={ms(5)} />
            </View>
          ))
          }
        </ScrollView >
      }
    </View>
  );
};

const styles = StyleSheet.create({
  noTicketContaint: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(60),
  },
  ticketContaint: {
    backgroundColor: '#FFFFFF',
    borderRadius: ms(5),
    marginBottom: ms(10),
  },

  orderID: {
    flexDirection: 'row',
    paddingHorizontal: ms(20),
    paddingVertical: ms(15),
    justifyContent: 'space-between',
    flexShrink: 1
  },
  paymentContainer: {
    paddingHorizontal: ms(5),
  },
  payAndDestination: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: ms(20),
    paddingVertical: ms(20),
  },
  buttonBookingDetail: {
    alignItems: 'center',
    paddingVertical: ms(15),
    paddingBottom: ms(10),
  },
  pendingWrapper: {
    padding: ms(10),
    margin: ms(20),
    alignItems: 'center',
    borderRadius: ms(30),
    backgroundColor: '#E2B928',
  },
  successWrapper: {
    padding: ms(10),
    margin: ms(20),
    alignItems: 'center',
    borderRadius: ms(30),
    backgroundColor: '#3BB44A',
  },
  expiredWrapper: {
    padding: ms(10),
    margin: ms(20),
    alignItems: 'center',
    borderRadius: ms(30),
    backgroundColor: '#EB584E',
  },
  fontButton: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(14),
    color: 'white',
  },
});
