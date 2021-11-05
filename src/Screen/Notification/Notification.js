import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Info from '../../Assets/Images/Info.png';
import { ms } from 'react-native-size-matters';
import { getAllNotifications } from './Redux/NotificationAction';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import moment from 'moment';

export default function Notification() {
  const token = useSelector(state => { return state.LoginReducer.access_token.token })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllNotifications({ token: token }))
  }, [])

  const data = useSelector(state => { return state.NotificationReducer.allNotifications.data })


  return (
    <ScrollView>
      {data?.data.reverse().map((e, i) => {
        const time = moment(data?.data[i].createdAt).fromNow();
        return (
          <View>
            {
              e.title === "Booking" ?
                <View
                  style={{
                    backgroundColor: i === 0 ? '#CBFFCA' : '#FFFFFF',
                    flexDirection: 'row',
                    paddingLeft: ms(20),
                    paddingRight: '14%',
                    paddingTop: ms(20),
                  }}>
                  <View style={styles.infoIcon}>
                    <Image source={Info} />
                  </View>
                  <View style={{ flexShrink: 1 }}>
                    <Text style={styles.NotificationText1}>Booking Success!</Text>
                    <Text style={styles.NotificationText2}>
                      New booking success and now is waiting for your payment.
                    </Text>
                    <Text style={styles.dateTimeText}>{time}</Text>
                  </View>
                </View> :
                <View
                  style={{
                    backgroundColor: i === 0 ? '#CBFFCA' : '#FFFFFF',
                    flexDirection: 'row',
                    paddingLeft: ms(20),
                    paddingRight: '14%',
                    paddingTop: ms(20),
                  }}>
                  <View style={styles.infoIcon}>
                    <Image source={Info} />
                  </View>
                  <View style={{ flexShrink: 1 }}>
                    <Text style={styles.NotificationText1}>Payment Success!</Text>
                    <Text style={styles.NotificationText2}>
                      Your payment is successful and now you're ready to experience the journey
                      with us!
                    </Text>
                    <Text style={styles.dateTimeText}>{time}</Text>
                  </View>
                </View>
            }
          </View>
        )
      }
      )
      }
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  infoIcon: {
    marginRight: ms(20),
    paddingTop: ms(2),
  },
  NotificationText1: {
    fontSize: ms(16),
    fontFamily: 'Montserrat-Medium',
    color: '#092C4C',
    paddingBottom: ms(10),
  },
  NotificationText2: {
    fontFamily: 'Montserrat-Medium',
    color: '#092C4C',
    paddingBottom: ms(16),
  },
  dateTimeText: {
    fontFamily: 'Montserrat-Medium',
    color: '#ABB3BB',
    marginBottom: ms(20),
    fontSize: ms(10),
  },
});
