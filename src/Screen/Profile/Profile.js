import React, { Component, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ToastAndroid,
} from 'react-native';
import { Input, Image, Avatar, Accessory, Button, Divider, Card } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from './profile-Style';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePicker, { launchImageLibrary } from 'react-native-image-picker';

import { setGoogleLogged, setIsLogged, setLoading } from '../../Store/globalAction';
import { setTokenToLoginReducer } from '../Login/Redux/LoginAction';
import { getProfileData, postProfilePicture } from './Redux/ProfileAction';
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
  const isLogged = useSelector(state => { return state.Global.isLogged })
  const googleLogged = useSelector(state => { return state.Global.googleLogged })
  console.log(data)

  const [imageSource, setImageSource] = useState(data.profile_picture);

  const onLogin = async () => {
    try {
      dispatch(setLoading(true))
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.configure({
        offlineAccess: true,
        webClientId:
          '573103940805-nutqthgajbhumvu392a2t3kth6r9ia9o.apps.googleusercontent.com',
        scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
      });
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

  function selectImage() {
    const options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true
      },
      includeBase64: true
    }

    launchImageLibrary(options, response => {
      console.log(response)
      if (response.didCancel) {
        ToastAndroid.showWithGravityAndOffset(
          'You did not select any image',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          200,
        );
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        ToastAndroid.showWithGravityAndOffset(
          'Sorry, there is a technical error.',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          200,
        );
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        dispatch(postProfilePicture({ 'image': response.assets[0].base64, token: token }))
        dispatch(getProfileData({ token: token }))
        setImageSource(data.profile_picture)
      }
    })
  }

  const editProf = () => {
    props.navigation.navigate('Detail Stack', { screen: 'Edit Profile' });
  };

  const editPassword = () => {
    props.navigation.navigate('Detail Stack', { screen: 'Change Password' });
  };

  return (
    <ScrollView>
      {isLogged ?
        <View style={styles.mainContainer}>
          <TouchableOpacity style={styles.avatarContainer} onPress={selectImage}>
            <Avatar
              containerStyle={{ marginBottom: 20, marginTop: 20 }}
              size="xlarge"
              rounded
              source={{
                uri: `${imageSource}`
              }}
            />
          </TouchableOpacity>

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
        </View> :
        <Card containerStyle={[styles.inputContainer, { marginTop: '50%' }]}>
          <View style={styles.editProfile}>
            <Text style={styles.textEdit}>You are not logged in!</Text>
          </View>
          <View style={styles.signOutContainer}>
            <TouchableOpacity style={styles.buttonUp} onPress={onLogin}>
              <Text style={styles.signUpText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </Card>
      }
    </ScrollView >
  );
}
