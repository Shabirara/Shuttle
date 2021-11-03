import React from 'react';
import {View, Text} from 'react-native';

// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {nav} from './src/Utils/Navigate';
import {BottomTab, DetailStack} from './App';
import {useSelector} from 'react-redux';

// root stack
import Login from './src/Screen/Login/Login';
import Register from './src/Screen/Register/Register';
import Spinner from 'react-native-loading-spinner-overlay';

const Stack = createStackNavigator();

export default function root() {
  const loading = useSelector(state => state.Global.loading);
  return (
    <>
      <Spinner
        visible={loading}

        // textStyle={styles.spinnerTextStyle}
      />
      <NavigationContainer ref={nav}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Register} name="Register" />
          <Stack.Screen component={BottomTab} name="Bottom Tab" />
          <Stack.Screen component={DetailStack} name="Detail Stack" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
