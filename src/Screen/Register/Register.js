import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

import {Input, Image, Button} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './register-Style.js';
// import profile from './../../Assets/Images/profile.png';
import {
  setNameToRegisterReducer,
  setEmailToRegisterReducer,
  setPasswordToRegisterReducer,
} from './Redux/Action';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

export default function Register(props) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const registerSignup = async () => {
    try {
      const result = await axios.post(
        'https://api-panas-test.herokuapp.com/v1/users/register',
        {fullname, email, password, role: 'user'},
      );
      console.log(result, 'result regis');
      if (result.status === 200) {
        props.navigation.navigate('Masuk');
      } else {
        Alert.alert('registrasi gagal');
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const login = () => {
    props.navigation.navigate('Masuk');
  };

  return (
    <View style={styles.mainContainer}>
      {/* <View style={styles.imgContainer}>
        <Image resizeMode="contain" style={styles.image} source={profile} />
        <MaterialCommunityIcons
          name="pencil-circle-outline"
          style={styles.pencil}
          resizeMode="contain"
        />
      </View> */}

      <View>
        <Input
          placeholder="fullname"
          style={styles.input}
          onChangeText={text => {
            setFullname(text);
          }}
        />

        <Input
          placeholder="Email"
          style={styles.input}
          onChangeText={text => {
            setEmail(text);
          }}
        />

        <Input
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>

      <View style={styles.signUpContainer}>
        <TouchableOpacity style={styles.buttonUp} onPress={registerSignup}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={login}>
          <Text style={styles.already}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
