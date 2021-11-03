import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Card, Input } from 'react-native-elements';
import styles from './changePassword-Style';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import { patchPassword } from './Redux/ProfileAction';

export default function EditProfile() {
  const data = useSelector(state => { return state.ProfileReducer.profileData })
  const token = useSelector(state => { return state.LoginReducer.access_token.token })

  const [oldPass, setOldPass] = useState('')
  const [newPass, setNewPass] = useState('')

  const dispatch = useDispatch()

  const onLogin = () => {
    dispatch(patchPassword({
      old_password: oldPass,
      new_password: newPass,
      token: token
    }))
  };

  return (
    <View style={styles.mainContainer}>
      <Card containerStyle={styles.inputContainer}>
        <View>
          <Input placeholder="Old Password"
            containerStyle={styles.input}
            style={styles.inputEmail}
            inputContainerStyle={styles.borderLess}
            onChangeText={text => setOldPass(text)}
            secureTextEntry
          />
        </View>

        <View>
          <Input placeholder="New Password"
            containerStyle={styles.input}
            style={styles.inputEmail}
            inputContainerStyle={styles.borderLess}
            onChangeText={text => setNewPass(text)}
            secureTextEntry
          />
        </View>

        <View>
          <Input placeholder="Confirm Password"
            containerStyle={styles.input}
            style={styles.inputEmail}
            inputContainerStyle={styles.borderLess}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.buttonUp} onPress={onLogin}>
          <Text style={styles.signUpText}>Save</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}
