import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import styles from './editProfile-Style';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

export default function EditProfile() {
  const onLogin = () => {
    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <View>
          <TextInput placeholder="Old Password" style={styles.inputEmail} />
        </View>

        <View>
          <TextInput placeholder="New Password" style={styles.inputEmail} />
        </View>

        <View>
          <TextInput placeholder="Confirm Password" style={styles.inputEmail} />
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
