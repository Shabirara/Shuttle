import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Input, Image, Button} from 'react-native-elements';
import Vector from './../Assets/Image/Vector.png';

export default function Login(props) {
  const onLogin = () => {
    props.navigation.navigate('Register');
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.logoContainer}>
        <Image resizeMode="contain" style={Styles.Image} source={Vector} />
        <Text style={Styles.shuttleText}>Shuttle</Text>
      </View>
      <View style={Styles.subContainer}>
        <View style={Styles.toShuttle}>
          <Text>Sign In to Shuttle</Text>
        </View>
        <View>
          <Text>Sign In to your</Text>
        </View>
        <View>
          <Text>account to continue</Text>
        </View>
        <View>
          <Input placeholder="Enter your email" style={Styles.input} />
          <Input placeholder="Password" style={Styles.input} />
        </View>

        <View style={Styles.passwordContainer}>
          <Text style={Styles.password}>Forgot your password?</Text>
        </View>

        <View style={Styles.loginContainer}>
          <TouchableOpacity style={Styles.button} onPress={onLogin}>
            <Text style={Styles.buttonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={Styles.signUp}>Don't have an account? Sign Up?</Text>
      </View>
      <View>
        <Text style={Styles.skipText}>Skip for now</Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'grey',
    paddingHorizontal: 24,
    // paddingVertical: 120,
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  toShuttle: {
    paddingTop: 20,
  },
  logoContainer: {
    paddingTop: 34,
  },
  Image: {
    width: 200,
    height: 50,
  },
  shuttleText: {
    color: 'white',
    // marginBottom: 65,
    fontFamily: 'robboto',
  },
  input: {
    paddingTop: 8,
  },
  passwordContainer: {
    paddingBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 12,
  },
  password: {
    color: 'white',
  },
  button: {
    backgroundColor: '#2154BC',
    paddingTop: 4,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    paddingBottom: 6,
    width: 300,
    height: 44,
    justifyContent: 'center',
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
  loginContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  signUp: {
    color: 'blue',
    alignSelf: 'center',
    paddingTop: 34,
    paddingBottom: 36,
  },
  skipText: {
    color: 'blue',
    alignSelf: 'center',
    paddingTop: 24,
    paddingBottom: 12,
  },
});
