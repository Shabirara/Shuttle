import React from 'react'
import { View, Text, Button } from 'react-native'



export default function MyBooking(props) {
    const onSearch = () => {
        props.navigation.navigate('Detail Stack', { screen: 'Search' })
    }
    return (
        <Button title="Search" onPress={onSearch} />
    )
}
