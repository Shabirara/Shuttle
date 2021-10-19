import React, { useState } from 'react'
import { View, Text, Button, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { Card, Divider, Input } from 'react-native-elements'
import { ms } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function PassengerDetail(props) {
    const [oneWay, setOneWay] = useState(false)
    const [expand, setExpand] = useState(false)

    const onPayment = () => {
        props.navigation.navigate('Payment Method')
    }


    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {oneWay ?
                    <View style={styles.topWrapper}>
                        <Image source={require('../../Assets/Images/bx_bx-bus.png')} height={ms(30)} width={ms(30)} style={{ margin: ms(20) }} />
                        <View style={{ justifyContent: 'flex-start' }}>
                            <Text style={styles.fontKecil}>Sat, 21 Aug 2021</Text>
                            <Text style={styles.fontBesar}>Jakarta  ➜  Surabaya</Text>
                            <Text style={styles.fontKecil}>07:00 - 15:00</Text>
                            <Text style={styles.fontMedium}>PT Sinar Jaya Group (Executive)</Text>
                            <Text style={styles.fontKecil}>Seat number : 12</Text>
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
                                    <Text style={styles.fontKecil}>Sat, 21 Aug 2021</Text>
                                    <Text style={styles.fontBesar}>Jakarta  ➜  Surabaya</Text>
                                    <Text style={styles.fontKecil}>07:00 - 15:00</Text>
                                    <Text style={styles.fontMedium}>PT Sinar Jaya Group (Executive)</Text>
                                    <Text style={styles.fontKecil}>Seat number : 12</Text>
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
                                    <Text style={styles.fontKecil}>Sat, 28 Aug 2021</Text>
                                    <Text style={styles.fontBesar}>Surabaya  ➜  Jakarta</Text>
                                    <Text style={styles.fontKecil}>07:00 - 15:00</Text>
                                    <Text style={styles.fontMedium}>KYM Trans (Executive)</Text>
                                    <Text style={styles.fontKecil}>Seat number : 16</Text>
                                </View>
                            </View>
                        </View>
                    </>
                }
                <Card containerStyle={{ margin: 0, padding: 0 }}>
                    <View style={styles.cardContainer}>
                        <Text style={styles.fontHeader}>Passenger Detail</Text>
                    </View>
                    <Card.Divider width={ms(2)} />
                    <View style={styles.cardContainer}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../../Assets/Images/bx_bx-user.png')}
                                style={{ height: ms(20), width: ms(20), marginRight: ms(15) }} />
                            <Text style={styles.fontMedium}>Passenger 1</Text>
                        </View>
                        <AntDesign name={expand ? 'downcircleo' : 'rightcircleo'}
                            color='#092C4C' size={ms(17)}
                            onPress={() => setExpand(!expand)} />

                    </View>
                    {expand ?
                        <View style={styles.formContainer}>
                            <Input placeholder='Enter full name' style={styles.input} inputContainerStyle={{ borderBottomWidth: 0 }} />
                            <Input placeholder='Age' style={styles.input} inputContainerStyle={{ borderBottomWidth: 0 }} />
                            <Input placeholder='Email' style={styles.input} inputContainerStyle={{ borderBottomWidth: 0 }} />
                            <Input placeholder='Phone Number' style={styles.input} inputContainerStyle={{ borderBottomWidth: 0 }} />
                        </View> : null}
                </Card>
            </ScrollView>
            <Card containerStyle={styles.card}>
                <TouchableOpacity onPress={onPayment} style={styles.next}>
                    <Text style={styles.fontButton}>Continue to Payment</Text>
                </TouchableOpacity>
            </Card>
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
        marginBottom: ms(80),
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
        bottom: 0,
        position: 'absolute'
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