import moment from 'moment'
import React, { useState } from 'react'
import { View, Text, Button, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { Card, Divider, Input } from 'react-native-elements'
import { ms } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { postOrder } from './Redux/HomeAction'

export default function PassengerDetail(props) {
    const oneWay = useSelector(state => { return state.HomeReducer.isOneWay })
    const departureDate = useSelector(state => { return state.HomeReducer.departureDateString })
    const returnDateRaw = useSelector(state => { return state.HomeReducer.returnDate })
    const returnDate = moment(returnDateRaw).format('ddd, DD MMM YYYY')
    const returnDateNum = moment(returnDateRaw).format('YYYY-MM-DD')
    const departureCity = useSelector(state => { return state.HomeReducer.departureCity })
    const arrivalCity = useSelector(state => { return state.HomeReducer.arrivalCity })
    const departureTime = useSelector(state => { return state.HomeReducer.departureTime })
    const arrivalTime = useSelector(state => { return state.HomeReducer.arrivalTime })
    const departureTimeReturn = useSelector(state => { return state.HomeReducer.departureTimeReturn })
    const arrivalTimeReturn = useSelector(state => { return state.HomeReducer.arrivalTimeReturn })
    const departureSeat = useSelector(state => { return state.HomeReducer.selectedSeat })
    const returnSeat = useSelector(state => { return state.HomeReducer.selectedSeatReturn })
    const passengerNum = useSelector(state => { return state.HomeReducer.passengerNum })
    const data = useSelector(state => state.HomeReducer)
    const user = useSelector(state => state.ProfileReducer.profileData)
    const token = useSelector(state => state.LoginReducer.access_token.token)

    const [userName, setUserName] = useState([''])
    const [userEmail, setUserEmail] = useState([''])
    const [userPhone, setUserPhone] = useState([''])
    const [userAge, setUserAge] = useState([''])

    const dispatch = useDispatch()

    const onPayment = () => {
        dispatch(postOrder({
            "departure_date": departureDate,
            "return_date": oneWay ? [] : returnDateNum,
            "fullname": userName,
            "email": userEmail,
            "age": userAge,
            "phone": userPhone,
            "departure_seat": departureSeat,
            "return_seat": oneWay ? [] : returnSeat,
            "passenger": passengerNum,
            "order_type": oneWay ? "OneWay" : 'RoundTrip',
            "departure_bus_id": data?.busDepartureId,
            "return_bus_id": oneWay ? [] : data?.busArrivalId,
            token: token
        }))
    }


    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {oneWay ?
                    <View style={styles.topWrapper}>
                        <Image source={require('../../Assets/Images/bx_bx-bus.png')} height={ms(30)} width={ms(30)} style={{ margin: ms(20) }} />
                        <View style={{ justifyContent: 'flex-start' }}>
                            <Text style={styles.fontKecil}>{departureDate}</Text>
                            <Text style={styles.fontBesar}>{departureCity}  ➜  {arrivalCity}</Text>
                            <Text style={styles.fontKecil}>{departureTime} - {arrivalTime}</Text>
                            <Text style={styles.fontMedium}>{data?.busProviderName} (Executive)</Text>
                            <Text style={styles.fontKecil}>Seat number : {departureSeat.join(', ')}</Text>
                        </View>
                    </View> :
                    <>
                        <View style={styles.headerWrapper}>
                            <View style={styles.header}>
                                <Text style={styles.fontHeader}>Departure</Text>
                            </View>
                            <Divider width={ms(2)} />
                            <View style={styles.topWrapper}>
                                <Image source={require('../../Assets/Images/bx_bx-bus.png')} height={ms(30)} width={ms(30)} style={{ margin: ms(20) }} />
                                <View style={{ justifyContent: 'flex-start' }}>
                                    <Text style={styles.fontKecil}>{departureDate}</Text>
                                    <Text style={styles.fontBesar}>{departureCity}  ➜  {arrivalCity}</Text>
                                    <Text style={styles.fontKecil}>{departureTime} - {arrivalTime}</Text>
                                    <Text style={styles.fontMedium}>{data?.busProviderName} (Executive)</Text>
                                    <Text style={styles.fontKecil}>Seat number : {departureSeat.join(', ')}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.headerWrapper}>
                            <View style={styles.header}>
                                <Text style={styles.fontHeader}>Return</Text>
                            </View>
                            <Divider width={ms(2)} />
                            <View style={styles.topWrapper}>
                                <Image source={require('../../Assets/Images/bx_bx-bus.png')} height={ms(30)} width={ms(30)} style={{ margin: ms(20) }} />
                                <View style={{ justifyContent: 'flex-start' }}>
                                    <Text style={styles.fontKecil}>{returnDate}</Text>
                                    <Text style={styles.fontBesar}>{arrivalCity}  ➜  {departureCity}</Text>
                                    <Text style={styles.fontKecil}>{departureTimeReturn} - {arrivalTimeReturn}</Text>
                                    <Text style={styles.fontMedium}>{data?.busProviderNameReturn}(Executive)</Text>
                                    <Text style={styles.fontKecil}>Seat number : {returnSeat.join(', ')}</Text>
                                </View>
                            </View>
                        </View>
                    </>
                }
                <Card containerStyle={{ margin: 0, padding: 0, paddingBottom: ms(30) }}>
                    <View style={styles.cardContainer}>
                        <Text style={styles.fontHeader}>Passenger Detail</Text>
                    </View>
                    <Card.Divider width={ms(2)} />
                    {Array.from(Array(passengerNum)).map((e, i) => {
                        const [expand, setExpand] = useState(true)
                        return (
                            <View>
                                <View style={styles.cardContainer}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../../Assets/Images/bx_bx-user.png')}
                                            style={{ height: ms(20), width: ms(20), marginRight: ms(15) }} />
                                        <Text style={styles.fontMedium}>Passenger {i + 1}</Text>
                                    </View>
                                    <AntDesign name={expand ? 'downcircleo' : 'rightcircleo'}
                                        color='#092C4C' size={ms(17)}
                                        onPress={() => setExpand(!expand)} />
                                </View>
                                {
                                    expand ?
                                        <View style={styles.formContainer}>
                                            <Input placeholder='Enter full name'
                                                style={styles.input}
                                                onChangeText={text => {
                                                    setUserName((prevState) => {
                                                        prevState[i] = text;
                                                        return [...prevState]
                                                    });
                                                }}
                                                inputContainerStyle={{ borderBottomWidth: 0 }} />
                                            <Input placeholder='Age'
                                                style={styles.input}
                                                onChangeText={text => {
                                                    setUserAge((prevState) => {
                                                        prevState[i] = text;
                                                        return [...prevState]
                                                    });
                                                }}
                                                inputContainerStyle={{ borderBottomWidth: 0 }} />
                                            <Input placeholder='Email'
                                                style={styles.input}
                                                onChangeText={text => {
                                                    setUserEmail((prevState) => {
                                                        prevState[i] = text;
                                                        return [...prevState]
                                                    });
                                                }}
                                                inputContainerStyle={{ borderBottomWidth: 0 }} />
                                            <Input placeholder='Phone Number'
                                                style={styles.input}
                                                onChangeText={text => {
                                                    setUserPhone((prevState) => {
                                                        prevState[i] = text;
                                                        return [...prevState]
                                                    });
                                                }}
                                                inputContainerStyle={{ borderBottomWidth: 0 }} />
                                        </View> : null
                                }
                            </View>
                        )
                    })
                    }
                </Card>
                <Card containerStyle={styles.card}>
                    <TouchableOpacity onPress={onPayment} style={styles.next}>
                        <Text style={styles.fontButton}>Continue to Payment</Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: '#CBFFCA',
        marginBottom: ms(15),
    },
    header: {
        padding: ms(15),
    },
    topWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: ms(10),
        backgroundColor: '#CBFFCA',
    },
    fontKecil: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(12),
        color: '#092C4C',
        paddingVertical: ms(5),
    },
    fontMedium: {
        fontFamily: 'Montserrat-Medium',
        fontSize: ms(12),
        color: '#092C4C',
    },
    fontBesar: {
        fontFamily: 'Montserrat-Medium',
        fontSize: ms(16),
        color: '#092C4C',
    },
    fontHeader: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: ms(14),
        color: '#092C4C',
    },
    cardContainer: {
        flexDirection: 'row',
        paddingHorizontal: ms(20),
        paddingVertical: ms(15),
        justifyContent: 'space-between'
    },
    formContainer: {
        backgroundColor: '#F7F9FA',
        marginHorizontal: ms(20),
        borderRadius: ms(10),
        paddingTop: ms(30),
        paddingHorizontal: ms(10)
    },
    input: {
        borderWidth: ms(1),
        borderColor: '#D0D0D0',
        borderRadius: ms(10),
        padding: ms(18),
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(14),
        marginVertical: ms(-5)
    },
    card: {
        backgroundColor: 'white',
        width: '100%',
        marginHorizontal: 0,
        alignItems: 'center',
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