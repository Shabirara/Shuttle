import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { Card, Input } from 'react-native-elements';
import styles from './editProfile-Style';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import { ms } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import { patchProfile } from './Redux/ProfileAction';
import { useDispatch } from 'react-redux';

export default function EditProfile() {
  const data = useSelector(state => { return state.ProfileReducer.profileData })
  const token = useSelector(state => { return state.LoginReducer.access_token.token })

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const birthdayRaw = moment(data?.birthday).format('DD MMMM YYYY')
  const [selectedDate, setSelectedDate] = useState(birthdayRaw)
  const [name, setName] = useState(data?.fullname)
  const [email, setEmail] = useState(data?.email)
  const [phone, setPhone] = useState(data?.phone)

  const dispatch = useDispatch()

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('A date has been picked: ', date);
    hideDatePicker();
    setSelectedDate(moment(date).format('DD MMMM YYYY'));
  };

  const onLogin = async () => {
    try {
      await dispatch(patchProfile({
        phone: phone,
        token: token
      }))
      ToastAndroid.showWithGravityAndOffset(
        'Profile Saved!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        200,
      );
    } catch (error) {
      ToastAndroid.showWithGravityAndOffset(
        'Error',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        200,
      );
    }

  };

  return (
    <View style={{ flex: 1 }}>
      <Card containerStyle={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <View>
            <Input placeholder="Your full name" style={styles.inputEmail}
              inputContainerStyle={styles.borderLess} value={name}
              onChangeText={(text => setName(text))}
              disabled />
          </View>

          <View>
            <Input placeholder="Your email"
              style={styles.inputEmail}
              inputContainerStyle={styles.borderLess}
              value={email}
              onChangeText={(text => setEmail(text))}
              disabled />
          </View>

          <View>
            <Input
              placeholder="Your phone number"
              style={styles.inputEmail}
              inputContainerStyle={styles.borderLess}
              value={phone}
              onChangeText={(text => setPhone(text))}
            />
          </View>

          <View>
            <Input
              placeholder="Search your birthday"
              containerStyle={[styles.inputEmail, { width: ms(300) }]}
              style={{ fontSize: ms(14), fontFamily: 'Montserrat-Regular' }}
              onPressIn={showDatePicker}
              value={selectedDate}
              inputContainerStyle={styles.borderLess}
              leftIcon={<AntDesign name="calendar" style={{ color: '#0F5996', fontSize: ms(20) }}
                disabled />
              }
            />
          </View>

          <View>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          <View>
            <TouchableOpacity style={styles.buttonUp} onPress={onLogin}>
              <Text style={styles.signUpText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </View>
  );
}
