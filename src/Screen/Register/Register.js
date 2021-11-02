import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image, Button, Input } from 'react-native-elements';
import styles from './register-Style';
import logoShuttle from '../../Assets/Images/shuttle-logo.png';
import signup from '../../Assets/Images/signup.png';
import orOptional from '../../Assets/Images/orOptional.png';
import facebook from '../../Assets/Images/facebook.png';
import google from '../../Assets/Images/google.png';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { PostRegister } from './Redux/RegisterAction';

export default function Login(props) {
  const onLogin = () => {
    props.navigation.navigate('Login');
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userBirthDay, setUserBirthDay] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRoles, setUserRoles] = useState('');

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
    setUserBirthDay(moment(date).format('YYYY-MM-DD'));
  };

  const showPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onSkip = () => {
    props.navigation.navigate('Bottom Tab');
  };

  const dispatch = useDispatch();
  const actionRegister = () => {
    dispatch(
      PostRegister({
        "fullname": userName,
        "email": userEmail,
        "birthday": userBirthDay,
        "password": userPassword,
        "roles": "user"
      }),
    );
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={styles.Image}
            source={logoShuttle}
          />
        </View>
        <View style={styles.subContainer}>
          <View>
            <View style={styles.intoContainer}>
              <Image
                resizeMode="contain"
                style={styles.inToSHUTTLE}
                source={signup}
              />
            </View>
          </View>
          <View>
            <Input
              placeholder="Full name"
              containerStyle={styles.inputEmail}
              inputContainerStyle={styles.borderLess}
              onChangeText={text => {
                setUserName(text);
              }}
            />
            <Input
              onChangeText={text => {
                setUserBirthDay(text);
              }}
              placeholder="Search your birthday"
              containerStyle={styles.inputEmail}
              onPressIn={showDatePicker}
              value={selectedDate}
              inputContainerStyle={styles.borderLess}
              rightIcon={<AntDesign name="calendar" />}
            />
            <Input
              onChangeText={text => {
                setUserEmail(text);
              }}
              placeholder="Enter your email"
              containerStyle={styles.inputEmail}
              inputContainerStyle={styles.borderLess}
            />
            <View style={styles.eyeOff}>
              <Input
                onChangeText={text => {
                  setUserPassword(text);
                }}
                placeholder="Enter your password"
                secureTextEntry={!isShowPassword}
                containerStyle={styles.inputEmail}
                inputContainerStyle={styles.borderLess}
                rightIcon={
                  <TouchableOpacity onPress={showPassword}>
                    <Feather
                      name={isShowPassword === true ? 'eye' : 'eye-off'}
                    />
                  </TouchableOpacity>
                }
              />
            </View>
            <Input
              placeholder="Confirm your password"
              secureTextEntry
              containerStyle={styles.inputEmail}
              inputContainerStyle={styles.borderLess}
              rightIcon={
                <TouchableOpacity onPress={showPassword}>
                  <Feather name={isShowPassword === true ? 'eye' : 'eye-off'} />
                </TouchableOpacity>
              }
            />
          </View>

          <View style={styles.loginContainer}>
            <TouchableOpacity style={styles.button} onPress={actionRegister} >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={orOptional}
              resizeMode="contain"
              style={styles.orOptionalIcon}
            />
          </View>

          <View style={styles.sosmedContainer}>
            <View style={styles.googleContainer}>
              <Image
                resizeMode="contain"
                style={styles.medIcon}
                source={google}
              />
            </View>

            <View style={styles.facebookContainer}>
              <Image
                resizeMode="contain"
                style={styles.medIcon}
                source={facebook}
              />
            </View>
          </View>
        </View>

        <View style={styles.haveNoSignUpContainer}>
          <View>
            <Text style={styles.haveNoAccountText}>
              Already have an account?
            </Text>
          </View>

          <View>
            <TouchableOpacity onPress={onLogin}>
              <Text style={styles.signUp}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.skipText} onPress={onSkip}>
            Skip for now
          </Text>
        </View>

        <View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
    </ScrollView>
  );
}
