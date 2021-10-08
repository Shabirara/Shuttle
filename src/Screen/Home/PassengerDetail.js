import React from 'react'
import { View, Text, Button } from 'react-native'



export default function PassengerDetail(props) {
    const onLogin = () => {
        props.navigation.navigate('Login')
    }
    return (
        <View>
            <Button onPress={onLogin} title='Sign In' />
        </View>
    )
}
