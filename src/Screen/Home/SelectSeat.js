import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Card, Divider } from 'react-native-elements';
import { ms } from 'react-native-size-matters';

const SelectSeat = (props) => {
    const [row, setRow] = useState([
        { selected: false, booked: false, id: 1 },
        { selected: false, booked: false, id: 2 },
        { selected: false, booked: false, id: 3 },
        { selected: false, booked: false, id: 4 },
        { selected: false, booked: false, id: 5 },
        { selected: false, booked: false, id: 6 },
        { selected: false, booked: false, id: 7 },
        { selected: false, booked: true, id: 8 },
        { selected: false, booked: false, id: 9 },
        { selected: false, booked: false, id: 10 },
        { selected: false, booked: false, id: 11 },
        { selected: false, booked: false, id: 12 },
        { selected: false, booked: false, id: 13 },
        { selected: false, booked: false, id: 14 },
        { selected: false, booked: false, id: 15 },
        { selected: false, booked: false, id: 16 },
        { selected: false, booked: false, id: 17 },
        { selected: false, booked: false, id: 18 },
        { selected: false, booked: false, id: 19 },
        { selected: false, booked: false, id: 20 },
        { selected: false, booked: true, id: 21 },
        { selected: false, booked: true, id: 22 },
        { selected: false, booked: false, id: 23 },
        { selected: false, booked: false, id: 24 },
        { selected: false, booked: true, id: 25 },
        { selected: false, booked: false, id: 26 },
        { selected: false, booked: false, id: 27 },
        { selected: false, booked: true, id: 28 },
        { selected: false, booked: false, id: 29 },
        { selected: false, booked: false, id: 30 },
        { selected: false, booked: false, id: 31 },
        { selected: false, booked: false, id: 32 },
        { selected: false, booked: false, id: 33 },
        { selected: false, booked: false, id: 34 },
        { selected: false, booked: false, id: 35 },
        { selected: false, booked: false, id: 36 },
        { selected: false, booked: false, id: 37 },
        { selected: false, booked: true, id: 38 },
        { selected: false, booked: true, id: 39 },
        { selected: false, booked: true, id: 40 },
    ])
    const onPassengerDetail = () => {
        props.navigation.navigate('Passenger Detail')
    }

    return (
        <ScrollView>
            <Card containerStyle={styles.card}>
                <View style={styles.topContainer}>
                    <View style={styles.boxContainer}>
                        <View style={styles.boxBooked} />
                        <Text style={styles.boxText}>Booked</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <View style={styles.boxAvailable} />
                        <Text style={styles.boxText}>Available</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <View style={styles.boxSelected} />
                        <Text style={styles.boxText}>Selected</Text>
                    </View>
                </View>
            </Card>
            <View style={styles.container}>
                <View style={{ alignSelf: 'flex-end', padding: ms(20) }}>
                    <Image source={require('../../Assets/Images/healthicons_truck-driver-outline.png')} style={{ marginHorizontal: ms(5) }} />
                </View>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center', marginBottom: ms(10) }}>
                    {row.map((e, i) => {
                        return (
                            <>
                                <TouchableOpacity onPress={() => {
                                    setRow((prevState) => {
                                        prevState[i].selected = !prevState[i].selected;
                                        return [...prevState]
                                    })
                                }}
                                    style={[e.booked === true ? styles.boxBooked : e.selected === true ? styles.boxSelected : styles.boxAvailable, { marginHorizontal: ms(10), marginBottom: ms(10) }]}
                                />
                                {i === 1 || (i - 1) % 4 === 0 ? <Divider orientation='vertical' style={{ marginHorizontal: ms(20) }} width={ms(2)} /> : null}
                            </>
                        )
                    })}
                </View>
            </View>
            <Card containerStyle={styles.card}>
                <TouchableOpacity onPress={onPassengerDetail} style={styles.next}>
                    <Text style={styles.fontButton}>Fill Passenger Detail</Text>
                </TouchableOpacity>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: ms(20),
        marginHorizontal: ms(40),
        borderRadius: ms(20)
    },
    topContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: ms(20),
        width: '100%'
    },
    boxBooked: {
        width: ms(38),
        height: ms(38),
        backgroundColor: '#0F5996',
        borderRadius: ms(10)
    },
    boxAvailable: {
        width: ms(38),
        height: ms(38),
        backgroundColor: 'white',
        borderRadius: ms(10),
        borderColor: '#0F5996',
        borderWidth: ms(1)
    },
    boxSelected: {
        width: ms(38),
        height: ms(38),
        backgroundColor: '#3BB44A',
        borderRadius: ms(10)
    },
    boxText: {
        fontFamily: 'Montserrat-Medium',
        color: '#092C4C',
        fontSize: ms(14),
        textAlign: 'center',
        paddingTop: ms(20)
    },
    boxContainer: {
        alignItems: 'center'
    },
    card: {
        backgroundColor: 'white',
        width: '100%',
        marginHorizontal: 0,
        alignItems: 'center',
        marginTop: 0
    },
    next: {
        backgroundColor: '#0F5996',
        borderRadius: ms(10),
        paddingVertical: ms(15),
        width: ms(310),
        alignItems: 'center',
    },
    fontButton: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: ms(14),
        color: 'white',
    },
})

export default SelectSeat;