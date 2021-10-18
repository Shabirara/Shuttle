import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import styles from './editProfile-Style';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

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
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <View>
          <TextInput placeholder="Your full name" style={styles.inputEmail} />
        </View>

        <View>
          <TextInput placeholder="Your email" style={styles.inputEmail} />
        </View>

        <View>
          <TextInput
            placeholder="Your phone number"
            style={styles.inputEmail}
          />
        </View>

        <View>
          <Input
            placeholder="Search your birthday"
            containerStyle={styles.inputEmail}
            onPressIn={showDatePicker}
            value={selectedDate}
            inputContainerStyle={styles.borderLess}
            rightIcon={<AntDesign name="calendar" />}
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
    </View>
  );
}
