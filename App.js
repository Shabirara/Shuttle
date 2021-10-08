import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { ms } from 'react-native-size-matters'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// redux
import { Provider } from "react-redux";
import { Store } from "./src/Screen/Store/Store";
import { PersistGate } from "redux-persist/lib/integration/react";
import { storePersist } from "./src/Screen/Store/Store";

// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// root stack
import Login from './src/Screen/Login/Login'
import Register from './src/Screen/Register/Register'

// bottom tab navigator
import Home from './src/Screen/Home/Home'
import MyBooking from './src/Screen/My Booking/MyBooking'
import Notification from './src/Screen/Notification/Notification'
import Profile from './src/Screen/Profile/Profile'

// home stack
import SearchResult from './src/Screen/Home/SearchResult'
import BusDetails from './src/Screen/Home/BusDetails'
import AllPhotos from './src/Screen/Home/AllPhotos'
import SelectSeat from './src/Screen/Home/SelectSeat'
import PassengerDetail from './src/Screen/Home/PassengerDetail'
import PaymentMethod from './src/Screen/Home/PaymentMethod'
import PaymentDetails from './src/Screen/Home/PaymentDetails'
import BookingDetails from './src/Screen/Home/BookingDetails'

// profile stack
import EditProfile from './src/Screen/Profile/EditProfile';
import ChangePassword from './src/Screen/Profile/ChangePassword'



const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={storePersist}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Bottom Tab' screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Login} name='Login' />
            <Stack.Screen component={Register} name='Register' />
            <Stack.Screen component={BottomTab} name='Bottom Tab' />
            <Stack.Screen component={HomeStack} name='Home Stack' />
            <Stack.Screen component={ProfileStack} name='Profile Stack' />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#0F5996",
        tabBarInactiveTintColor: "#ABB3BB",
        bottomTab: { fontFamily: 'Montserrat-Regular' }
      }}>
      <Tab.Screen component={Home} name='Home'
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name='home' size={size} color={color} />
          }
        }} />
      <Tab.Screen component={MyBooking} name='My Booking'
        options={{
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name='ticket-outline' size={size} color={color} style={{ transform: [{ rotate: '135deg' }] }} />
          }
        }
        } />
      <Tab.Screen component={Notification} name='Notification' options={{
        tabBarIcon: ({ color, size }) => {
          return <MaterialIcons name='notifications-none' size={size} color={color} />
        }
      }
      } />
      <Tab.Screen component={Profile} name='Profile'
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name='user' size={size} color={color} />
          }
        }} />
    </Tab.Navigator >
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={SearchResult} name='Search Result' />
      <Stack.Screen component={BusDetails} name='Bus Details' />
      <Stack.Screen component={AllPhotos} name='All Photos' />
      <Stack.Screen component={SelectSeat} name='Select Seat' />
      <Stack.Screen component={PassengerDetail} name='Passenger Detail' />
      <Stack.Screen component={PaymentMethod} name='Payment Method' />
      <Stack.Screen component={PaymentDetails} name='Payment Details' />
      <Stack.Screen component={BookingDetails} name='Booking Details' />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={EditProfile} name='Edit Profile' />
      <Stack.Screen component={ChangePassword} name='ChangePassword' />
    </Stack.Navigator>
  )
}

export default App;