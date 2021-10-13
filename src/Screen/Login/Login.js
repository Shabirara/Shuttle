import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {Image, CheckBox, Button} from 'react-native-elements';
import styles from './login-Sytyle';
import logoShuttle from './../Assets/Image/shuttle-logo.png';
import inToShuttle from './../Assets/Image/Group-179.png';
import orOptional from './../Assets/Image/orOptional.png';
import facebook from './../Assets/Image/facebook.png';
import google from './../Assets/Image/google.png';

export default function Login(props) {
  const onLogin = () => {
    props.navigation.navigate('Register');
    this.state = {
      check: false,
    };
  };

  // // checkBoxTest();
  // {
  //   this.setState({
  //     check: !this.state.check,
  //   });
  // }

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
            />
            <TextInput
              secureTextEntry
              placeholder="Enter your password"
              style={styles.inputEmail}
            />
          </View>
          <View style={styles.checkBox}>
            <View style={styles.rememberMeBox}>
              <View>
                <CheckBox
                  containerStyle={styles.checkStyle}
                  // value={this.state.check}
                  // onChange={() => this.checkBoxTest()}
                />
              </View>
              <Text style={styles.rememberText}>Remember me</Text>
            </View>
            <View>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </View>
          </View>

          {/* <View style={styles.passwordContainer}>
            <Text style={styles.password}>Forgot your password?</Text>
          </View> */}

          <View style={styles.loginContainer}>
            <TouchableOpacity style={styles.button} onPress={onLogin}>
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
            <Text style={styles.haveNoAccountText}>Don't have an account?</Text>
          </View>

          <View>
            <Text style={styles.signUp}>Sign Up</Text>
          </View>
        </View>

        <View>
          <Text style={styles.skipText}>Skip for now</Text>
        </View>
      </View>
    </ScrollView>
  );
}
