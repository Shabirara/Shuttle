import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Card, Input } from 'react-native-elements';
import styles from './editProfile-Style';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import { ms } from 'react-native-size-matters';

export default function EditProfile() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

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

  const onLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View>
      <Card style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <View>
            <Input placeholder="Your full name" style={styles.inputEmail}
              inputContainerStyle={styles.borderLess} />
          </View>

          <View>
            <Input placeholder="Your email" style={styles.inputEmail}
              inputContainerStyle={styles.borderLess} />
          </View>

          <View>
            <Input
              placeholder="Your phone number"
              style={styles.inputEmail}
              inputContainerStyle={styles.borderLess}
            />
          </View>

          <View>
            <Input
              placeholder="Search your birthday"
              containerStyle={[styles.inputEmail, { width: ms(300) }]}
              style={{ fontSize: ms(14) }}
              onPressIn={showDatePicker}
              value={selectedDate}
              inputContainerStyle={styles.borderLess}
              leftIcon={<AntDesign name="calendar" style={{ color: '#0F5996', fontSize: ms(20) }} />}
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
