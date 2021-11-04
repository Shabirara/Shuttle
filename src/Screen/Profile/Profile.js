import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Input, Image, Avatar, Accessory, Button, Divider, Card } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from './profile-Style';
import { ScrollView } from 'react-native-gesture-handler';
import { setGoogleLogged, setIsLogged, setLoading } from '../../Store/globalAction';
import { setTokenToLoginReducer } from '../Login/Redux/LoginAction';
import { getProfileData } from './Redux/ProfileAction';
import { ms } from 'react-native-size-matters';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function Profile(props) {
  const token = useSelector(state => state.LoginReducer.access_token.token)
  const dispatch = useDispatch()
  useEffect(() => {
    const edit = props.navigation.addListener('focus', () => {
      dispatch(getProfileData({ token: token }))
    });
    return edit
  }, [])

  const data = useSelector(state => { return state.ProfileReducer.profileData })

  const googleLogged = useSelector(state => { return state.Global.googleLogged })
  const onLogin = async () => {
    try {
      dispatch(setLoading(true))
      if (googleLogged) {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        dispatch(setGoogleLogged(false))
      }
      dispatch(setIsLogged(false))
      dispatch(setTokenToLoginReducer(''))
      props.navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false))
    }
  };

  const editProf = () => {
    props.navigation.navigate('Detail Stack', { screen: 'Edit Profile' });
  };

  const editPassword = () => {
    props.navigation.navigate('Detail Stack', { screen: 'Change Password' });
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.avatarContainer}>
          <Avatar
            containerStyle={{ marginBottom: 20, marginTop: 20 }}
            size="xlarge"
            rounded
            source={{
              uri: `${data.profile_picture}`
            }}
          />
        </View>

        <View style={styles.namaUser}>
          <Text style={styles.textNama}>{data.fullname}</Text>
        </View>

        <View style={styles.telpDanUserContainer}>
          {data.phone ?
            <>
              <View>
                <Text style={styles.textNormal}>{data.phone}</Text>
              </View>

              <View style={styles.titikAsingContainer}>
                <Text style={[styles.textNormal, { fontSize: ms(20) }]}>•</Text>
              </View>
            </> : null
          }

          {data.email ?
            <View>
              <Text style={styles.textNormal}>{data.email}</Text>
            </View> : null
          }
        </View>
        <Card containerStyle={styles.inputContainer}>
          <TouchableOpacity style={styles.editProfile} onPress={editProf}>
            <Text style={styles.textEdit}>Edit Profile</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.editProfile} onPress={editPassword}>
            <Text style={styles.textEdit}>Change Password</Text>
          </TouchableOpacity>
        </Card>

        <View style={styles.signOutContainer}>
          <TouchableOpacity style={styles.buttonUp} onPress={onLogin}>
            <Text style={styles.signUpText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView >
  );
}
