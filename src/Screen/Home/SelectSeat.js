import moment from 'moment';
import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import { Card, Divider } from 'react-native-elements';
import { ms } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { setIsReturn, setSelectedSeat, setSelectedSeatReturn } from './Redux/HomeAction';

const SelectSeat = (props) => {
    const seatData = useSelector(state => {
        return state.HomeReducer.seatData;
    });
    const isReturn = useSelector(state => {
        return state.HomeReducer.isReturn
    })
    const oneWay = useSelector(state => { return state.HomeReducer.isOneWay })
    const homeReducer = useSelector(state => { return state.HomeReducer })

    const [seatDataRow, setSeatDataRow] = useState(seatData)
    const [count, setCount] = useState(homeReducer?.passengerNum)
    const selected = [];
    const filtered = seatDataRow.filter((e, i) => {
        if (e === 1) {
            selected.push(i + 1);
        }
    });
    const dispatch = useDispatch()

    const onPassengerDetail = () => {
        isReturn ? dispatch(setSelectedSeatReturn(selected)) &&
            dispatch(setIsReturn(false)) &&
            props.navigation.navigate('Passenger Detail') :
            dispatch(setSelectedSeat(selected)) && oneWay ? props.navigation.navigate('Passenger Detail') :
                dispatch(setIsReturn(true)) && props.navigation.navigate('Search Result')
        console.log(`${isReturn} = isReturn`)
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
                    {seatDataRow.map((e, i) => {
                        return (
                            <>
                                <TouchableOpacity onPress={() => {
                                    setSeatDataRow((prevState) => {
                                        prevState[i] === 0 ? prevState[i] = 1 :
                                            prevState[i] === 1 ? prevState[i] = 0 :
                                                prevState[i];
                                        return [...prevState]
                                    });
                                }}
                                    disabled={count === 0 ? true : false}
                                    style={[e !== 0 && e !== 1 ? styles.boxBooked :
                                        e === 1 ? styles.boxSelected : styles.boxAvailable, { marginHorizontal: ms(10), marginBottom: ms(10) }]}
                                />
                                {i === 1 || (i - 1) % 4 === 0 ? <Divider orientation='vertical' style={{ marginHorizontal: ms(20) }} width={ms(2)} /> : null}
                            </>
                        )
                    })}
                </View>
            </View>
            <Card containerStyle={styles.card}>
                <TouchableOpacity onPress={onPassengerDetail} style={styles.next}>
                    <Text style={styles.fontButton}>{oneWay || isReturn ? 'Fill Passenger Detail' : 'Search Return Bus'}</Text>
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