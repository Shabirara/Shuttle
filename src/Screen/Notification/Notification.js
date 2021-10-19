import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Info from '../../Assets/Images/Info.png';
import {ms} from 'react-native-size-matters';

export default function Notification() {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#CBFFCA',
          flexDirection: 'row',
          paddingLeft: ms(20),
          paddingRight: '14%',
          paddingTop: ms(20),
        }}>
        <View style={styles.infoIcon}>
          <Image source={Info} />
        </View>
        <View>
          <Text style={styles.NotificationText}>Booking Success!</Text>
          <Text style={styles.NotificationText}>
            New booking success and now waiting for your payment
          </Text>
          <Text style={styles.dateTimeText}>3 hours ago</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flexDirection: 'row',
          paddingLeft: ms(20),
          paddingRight: '14%',
          paddingTop: ms(20),
        }}>
        <View style={styles.infoIcon}>
          <Image source={Info} />
        </View>
        <View>
          <Text style={styles.NotificationText}>Payment Success!</Text>
          <Text style={styles.NotificationText}>
            Your payment success and know you're ready to experience journey
            with us!
          </Text>
          <Text style={styles.dateTimeText}>3 hours ago</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoIcon: {
    marginRight: ms(10),
  },
  NotificationText: {
    fontFamily: 'Montserrat-Medium',
    color: '#092C4C',
    paddingBottom: ms(4),
  },
  dateTimeText: {
    fontFamily: 'Montserrat-Medium',
    color: '#ABB3BB',
    marginBottom: ms(10),
  },
});
