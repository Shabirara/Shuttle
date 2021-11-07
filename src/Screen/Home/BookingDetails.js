import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Card, Divider } from 'react-native-elements'
import { ms } from 'react-native-size-matters'
import { useSelector } from 'react-redux'
import moment from "moment";

export default function BookingDetails(props) {
    const data = useSelector(state => { return state.HomeReducer.paymentDetail })
    const HomeRedux = useSelector(state => { return state.HomeReducer })
    const returnDate = moment(HomeRedux?.returnDate).format('ddd, DD MMM YYYY')
    const orderDate = moment(data?.order_date).format('ddd, DD MMM YYYY')

    const onPayment = () => {
        props.navigation.navigate('Bottom Tab', { screen: 'My Booking' })
    }

    console.log(HomeRedux?.isOneWay)

    return (
        <ScrollView>
            <View style={styles.ijo}>
                <View style={styles.topWrapper}>
                    <Image source={require('../../Assets/Images/bx_bx-bus.png')}
                        style={{ height: ms(30), width: ms(30), margin: ms(20) }} />
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.fontMedium}>{data?.departure_shuttle[1]}</Text>
                            {HomeRedux?.isOneWay ?
                                <Text style={styles.fontMedium}> ➜ </Text> :
                                <Image source={require('../../Assets/Images/carbon_repeat.png')}
                                    style={{ margin: ms(10) }} />
                            }
                            <Text style={styles.fontMedium}>{HomeRedux?.arrivalCity}</Text>
                        </View>
                        <View style={{ marginRight: ms(90) }}>
                            {HomeRedux?.isOneWay ?
                                <Text style={styles.fontKecil}>
                                    {`${data?.price_detail?.departure_provider} - ${HomeRedux?.departureDateString} - ${data?.departure_time[0]}`}
                                </Text> :
                                <Text style={[styles.fontKecil]}>
                                    {`${data?.price_detail?.departure_provider} - ${HomeRedux?.departureDateString} - ${data?.departure_time[0]}
                                \n${data?.return_bus_provider} - ${returnDate} - ${data?.return_time?.[0]}`}
                                </Text>
                            }
                        </View>
                    </View>
                </View>
                <Divider orientation='horizontal' width={ms(2)} />
                <View style={data?.payment_status === 'expired' ? styles.expiredWrapper : (data?.payment_status === 'success' ? styles.successWrapper : styles.pendingWrapper)}>
                    <Text style={styles.fontButton}>Status Payment: {data?.payment_status === 'expired' ? 'Expired' : (data?.payment_status === 'success' ? 'Success' : 'Pending')}</Text>
                </View>
            </View>
            <Card containerStyle={styles.card}>
                <Text style={[styles.fontMedium, styles.cardContainer]}>Booking Details</Text>
                <Divider />
                <View style={[styles.cardContainer, { flexDirection: 'column', justifyContent: 'space-between' }]}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: '45%' }}>
                            <Text style={[styles.contentContainer, styles.fontKecil]}>Order ID</Text>
                            <Text style={styles.fontMedium}>{data?.order_id}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={[styles.contentContainer, styles.fontKecil]}>Order Date</Text>
                            <Text style={styles.fontMedium}>{orderDate}</Text>
                        </View>

                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <View style={{ width: '45%' }}>
                            <Text style={[styles.contentContainer, styles.fontKecil]}>Passenger</Text>
                            <Text style={styles.fontMedium}>{data?.passengers?.length}</Text>
                        </View>
                        <View style={{ width: '50%' }}>
                            <Text style={[styles.contentContainer, styles.fontKecil]}>Due Date Payment</Text>
                            <Text style={styles.fontMedium}>{data?.due_date}</Text>
                        </View>
                    </View>
                </View>
            </Card>
            <Card containerStyle={styles.card}>
                <Text style={[styles.fontMedium, styles.cardContainer]}>Passenger Detail</Text>
                <Divider />
                {data?.passengers?.map((e, i) => (
                    <View key={`key-bookingdetailpassenger-${i}`} style={[styles.cardContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <View style={{ width: '50%', justifyContent: 'space-between' }}>
                            <Text style={[styles.contentContainer, styles.fontKecil]}>Name</Text>
                            <Text style={styles.fontMedium}>{e?.fullname}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '50%' }}>
                            <View style={{ justifyContent: 'space-between', flexShrink: 1 }}>
                                <Text style={[styles.contentContainer, styles.fontKecil]}>Departure Seat</Text>
                                <Text style={styles.fontMedium}>{e?.departure_seat}</Text>
                            </View>
                            {HomeRedux.isOneWay ? null :
                                <View style={{ justifyContent: 'space-between', flexShrink: 1 }}>
                                    <Text style={[styles.contentContainer, styles.fontKecil]}>Return Seat</Text>
                                    <Text style={styles.fontMedium}>{e?.return_seat}</Text>
                                </View>
                            }
                        </View>
                    </View>
                ))}

            </Card>
            <Card containerStyle={styles.card}>
                <View style={styles.cardContainer}>
                    <Text style={styles.fontMedium}>Total Price</Text>
                    <Text style={styles.fontMedium}>IDR {data?.price_detail?.total_price}</Text>
                </View>
                <Divider />
                <View style={[styles.cardContainer, { flexShrink: 1, flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={{ justifyContent: 'space-between' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>PT Sinar Jaya Group ({data?.passengers?.length}x)</Text>
                        <Text style={styles.fontMedium}>IDR {data.price_detail?.departure_price}</Text>
                    </View>
                    {HomeRedux?.isOneWay ? null :
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text style={[styles.contentContainer, styles.fontKecil]}>KYM Trans ({data?.passengers?.length}x)</Text>
                            <Text style={styles.fontMedium}>IDR {data.price_detail?.return_price}</Text>
                        </View>
                    }
                </View>
            </Card>
            <Card containerStyle={styles.card}>
                <TouchableOpacity onPress={onPayment} style={styles.next}>
                    <Text style={styles.fontButton}>See My Bookings</Text>
                </TouchableOpacity>
            </Card>
        </ScrollView >
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
