import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Card, Divider } from 'react-native-elements'
import { ms } from 'react-native-size-matters'

export default function BookingDetails(props) {
    const [paid, setPaid] = useState(false)
    const [expired, setExpired] = useState(false)

    const onPayment = () => {
        props.navigation.navigate('Payment Details')
    }

    return (
        <ScrollView>
            <View style={styles.ijo}>
                <View style={styles.topWrapper}>
                    <Image source={require('../../Assets/Images/bx_bx-bus.png')}
                        style={{ height: ms(30), width: ms(30), margin: ms(20) }} />
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.fontMedium}>Jakarta</Text>
                            <Image source={require('../../Assets/Images/carbon_repeat.png')}
                                style={{ margin: ms(10) }} />
                            <Text style={styles.fontMedium}>Surabaya</Text>
                        </View>
                        <View style={{ marginRight: ms(90) }}>
                            <Text style={styles.fontKecil}>
                                PT Sinar Jaya Group - Sat, 21 Aug 2021 - 07:00
                                KYM Trans - Sat, 28 Aug 2021 - 07:00
                            </Text>
                        </View>
                    </View>
                </View>
                <Divider orientation='horizontal' width={ms(2)} />
                <View style={expired ? styles.expiredWrapper : (paid ? styles.successWrapper : styles.pendingWrapper)}>
                    <Text style={styles.fontButton}>Status Payment: {expired ? 'Expired' : (paid ? 'Success' : 'Pending')}</Text>
                </View>
            </View>
            <Card containerStyle={styles.card}>
                <Text style={[styles.fontMedium, styles.cardContainer]}>Booking Details</Text>
                <Divider />
                <View style={[styles.cardContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={{ width: '50%' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>Order ID</Text>
                        <Text style={styles.fontMedium}>BDTR2108187</Text>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>Passenger</Text>
                        <Text style={styles.fontMedium}>1</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>Order Date</Text>
                        <Text style={styles.fontMedium}>Fri, 20 Aug 2021</Text>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>Due Date Payment</Text>
                        <Text style={styles.fontMedium}>
                            Sat, 21 Aug 2021
                            12:00
                        </Text>
                    </View>
                </View>
            </Card>
            <Card containerStyle={styles.card}>
                <Text style={[styles.fontMedium, styles.cardContainer]}>Passenger Detail</Text>
                <Divider />
                <View style={[styles.cardContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={{ width: '50%', justifyContent: 'space-between' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>Name</Text>
                        <Text style={styles.fontMedium}>Irham Raziqony</Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '50%' }}>
                        <View style={{ width: '50%', justifyContent: 'space-between' }}>
                            <Text style={[styles.contentContainer, styles.fontKecil]}>Departure Seat</Text>
                            <Text style={styles.fontMedium}>12</Text>
                        </View>
                        <View style={{ width: '50%', justifyContent: 'space-between' }}>
                            <Text style={[styles.contentContainer, styles.fontKecil]}>Return Seat</Text>
                            <Text style={styles.fontMedium}>16</Text>
                        </View>
                    </View>
                </View>
            </Card>
            <Card containerStyle={styles.card}>
                <View style={styles.cardContainer}>
                    <Text style={styles.fontMedium}>Total Price</Text>
                    <Text style={styles.fontMedium}>IDR 450.000</Text>
                </View>
                <Divider />
                <View style={[styles.cardContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={{ width: '50%', justifyContent: 'space-between' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>PT Sinar Jaya Group (1x)</Text>
                        <Text style={styles.fontMedium}>IDR 300.000</Text>
                    </View>
                    <View style={{ width: '50%', justifyContent: 'space-between' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>KYM Trans (1x)</Text>
                        <Text style={styles.fontMedium}>IDR 150.000</Text>
                    </View>
                </View>
            </Card>
            {expired ? null : (paid ? null :
                <Card containerStyle={styles.card}>
                    <TouchableOpacity onPress={onPayment} style={styles.next}>
                        <Text style={styles.fontButton}>See Payment Instruction</Text>
                    </TouchableOpacity>
                </Card>
            )}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ijo: {
        backgroundColor: '#CBFFCA',
    },
    topWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: ms(15),
    },
    fontMedium: {
        fontFamily: 'Montserrat-Medium',
        fontSize: ms(16),
        color: '#092C4C'
    },
    fontKecil: {
        fontFamily: 'Montserrat-Regular',
        color: '#092C4C',
        fontSize: ms(12),
    },
    pendingWrapper: {
        padding: ms(10),
        margin: ms(20),
        alignItems: 'center',
        borderRadius: ms(30),
        backgroundColor: '#E2B928'
    },
    successWrapper: {
        padding: ms(10),
        margin: ms(20),
        alignItems: 'center',
        borderRadius: ms(30),
        backgroundColor: '#3BB44A'
    },
    expiredWrapper: {
        padding: ms(10),
        margin: ms(20),
        alignItems: 'center',
        borderRadius: ms(30),
        backgroundColor: '#EB584E'
    },
    fontButton: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: ms(14),
        color: 'white',
    },
    card: {
        backgroundColor: 'white',
        paddingHorizontal: 0,
        marginHorizontal: 0,
    },
    next: {
        backgroundColor: '#0F5996',
        borderRadius: ms(10),
        paddingVertical: ms(15),
        width: ms(310),
        alignItems: 'center',
        alignSelf: 'center'
    },
    cardContainer: {
        padding: ms(15),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    contentContainer: {
        marginBottom: ms(10),
        marginTop: ms(15)
    }
})
