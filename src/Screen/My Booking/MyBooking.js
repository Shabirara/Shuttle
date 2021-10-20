import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import noTicket from '../../Assets/Images/NoTicket.png';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import bookingButton from '../../Assets/Images/BookingButton.png';
import {Icon} from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function MyBooking(props) {
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
                }}>
                <Text
                  style={{color: '#0F5996', fontFamily: 'Montserrat-Medium'}}>
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
  const [paid, setPaid] = useState(false);
  const [expired, setExpired] = useState(false);
  const navigation = useNavigation();

  const onSearch = () => {
    navigation.navigate('Detail Stack', {screen: 'Search'});
  };
  return (
    <View style={styles.ticketContaint}>
      <View style={styles.orderID}>
        <Text
          style={{
            color: '#092C4C',
            fontFamily: 'Montserrat-SemiBold',
          }}>
          Order ID
        </Text>
        <Text style={{color: '#092C4C', fontFamily: 'Montserrat-SemiBold'}}>
          BDTR2108187
        </Text>
      </View>
      <Divider />
      <View style={styles.paymentContainer}>
        <View
          style={
            expired
              ? styles.expiredWrapper
              : paid
              ? styles.successWrapper
              : styles.pendingWrapper
          }>
          <Text style={styles.fontButton}>
            Status Payment: {expired ? 'Expired' : paid ? 'Success' : 'Pending'}
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
            IDR 450.000
          </Text>
        </View>
        <View style={{marginRight: ms(80)}}>
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
            Jakarta - Surabaya (Roundtrip)
          </Text>
        </View>
      </View>
      <Divider />
      <TouchableOpacity style={styles.buttonBookingDetail} onPress={onSearch}>
        <Image source={bookingButton} />
      </TouchableOpacity>
    </View>
  );
};

const ETicket = () => {
  return (
    <View style={styles.noTicketContaint}>
      <Image source={noTicket} />
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
  },

  orderID: {
    flexDirection: 'row',
    paddingHorizontal: ms(20),
    paddingVertical: ms(15),
    justifyContent: 'space-between',
  },
  paymentContainer: {
    paddingHorizontal: ms(20),
    paddingVertical: ms(15),
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
