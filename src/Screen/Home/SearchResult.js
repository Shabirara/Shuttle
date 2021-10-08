import React from 'react'
import { View, Text, Button } from 'react-native'

export default function SearchResult(props) {
    const onLogin = () => {
        props.navigation.navigate('Login')
    }
    return (
        <Button title="Login" onPress={onLogin} />
    )
}
