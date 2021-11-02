import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';

import {Image, CheckBox, Input, Button} from 'react-native-elements';
import styles from './login-Sytyle';
import logoShuttle from '../../Assets/Images/shuttle-logo.png';
import inToShuttle from '../../Assets/Images/Group-179.png';
import orOptional from '../../Assets/Images/orOptional.png';
import facebook from '../../Assets/Images/facebook.png';
import google from '../../Assets/Images/google.png';
import Feather from 'react-native-vector-icons/Feather';
import {setLoading} from '../Store/globalAction';
import {useDispatch, useSelector} from 'react-redux';
import {PostLogin} from './Redux/LoginAction';
import {setTokenToRegisterReducer} from '../Register/Redux/RegisterAction';
import {setTokenToLoginReducer} from './Redux/LoginAction';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default function Login(props) {
  const onLogin = () => {
    props.navigation.navigate('Bottom Tab');
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const showPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onSignUp = () => {
    props.navigation.navigate('Register');
  };

  const onSkip = () => {
    props.navigation.navigate('Bottom Tab');
  };

  const dispatch = useDispatch();

  const actionLogin = () => {
    console.log(userEmail, userPassword);
    dispatch(PostLogin({email: userEmail, password: userPassword}));
  };

  async function onGoogleButtonPress() {
    try {
      GoogleSignin.configure({
        offlineAccess: true,
        webClientId:
          '1070118107911-m8bdq6m70vsm60bdsql1alp1ukoelfpm.apps.googleusercontent.com',
        androidClientId:
          '573103940805-nutqthgajbhumvu392a2t3kth6r9ia9o.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });
      await GoogleSignin.hasPlayServices();
      console.log('reached google sign in');
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  }

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
                source={inToShuttle}
              />
            </View>
          </View>
          <View>
            <TextInput
              placeholder="Enter your email"
              style={styles.inputEmail}
              onChangeText={text => {
                setUserEmail(text);
              }}
            />
            <View style={styles.eyeOff}>
              <Input
                placeholder="Enter your password"
                secureTextEntry={!isShowPassword}
                onChangeText={text => {
                  setUserPassword(text);
                }}
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
          </View>
          <View style={styles.checkBox}>
            <View style={styles.rememberMeBox}>
              <View>
                <CheckBox containerStyle={styles.checkStyle} />
              </View>
              <Text style={styles.rememberText}>Remember me</Text>
            </View>
            <View>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </View>
          </View>

          <View style={styles.loginContainer}>
            <TouchableOpacity style={styles.button} onPress={actionLogin}>
              <Text style={styles.buttonText}>Sign In</Text>
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
            <TouchableOpacity
              style={styles.googleContainer}
              onPress={onGoogleButtonPress}>
              <Image
                resizeMode="contain"
                style={styles.medIcon}
                source={google}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookContainer}>
              <Image
                resizeMode="contain"
                style={styles.medIcon}
                source={facebook}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.haveNoSignUpContainer}>
          <View>
            <Text style={styles.haveNoAccountText}>Don't have an account?</Text>
          </View>

          <View>
            <TouchableOpacity onPress={onSignUp}>
              <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text onPress={onSkip} style={styles.skipText}>
            Skip for now
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
