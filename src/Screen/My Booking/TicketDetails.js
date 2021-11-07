import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, TouchableOpacity, ToastAndroid } from 'react-native'
import { Divider, Card, Input } from 'react-native-elements'
import { ms } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux'
import { postReview } from './Redux/BookingAction'

export default function TicketDetails() {
    const depart = useSelector(state => { return state.BookingReducer.selectedTicketData.departure })
    const returns = useSelector(state => { return state.BookingReducer.selectedTicketData.return })
    const isReturn = useSelector(state => { return state.HomeReducer.isReturn })
    const token = useSelector(state => { return state.LoginReducer.access_token.token })
    const reviewData = useSelector(state => { return state.BookingReducer.reviewId.data[0] })
    console.log(reviewData)

    const [checkedIn, setCheckedIn] = useState(false)
    const [expired, setExpired] = useState(false)
    const [pressed, setPressed] = useState(false)
    const [pressed1, setPressed1] = useState(false)
    const [pressed2, setPressed2] = useState(false)
    const [pressed3, setPressed3] = useState(false)
    const [pressed4, setPressed4] = useState(false)
    const [showReview, setShowReview] = useState(true)
    const [review, setReview] = useState('')
    const [stars, setStars] = useState(5)

    const config = isReturn ? returns[0] : depart[0]
    const dispatch = useDispatch()

    const onReview = async () => {
        try {
            if (pressed4) {
                setStars(5)
            } else if (pressed3) {
                setStars(4)
            } else if (pressed2) {
                setStars(3)
            } else if (pressed1) {
                setStars(2)
            } else if (pressed) {
                setStars(1)
            } else {
                setStars(0)
            }

            dispatch(postReview({
                "order_id": reviewData.order_id,
                "order_detail_id": reviewData.id,
                "rating": stars,
                "review": review,
                token: token
            }))
            setShowReview(false)
        } catch (err) {
            ToastAndroid.showWithGravityAndOffset(
                'Sorry, review failed. Please try again later.',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                200,
            );
            console.log(err)
        }
    }

    return (
        <ScrollView>
            <View style={styles.ijo}>
                <View style={styles.topWrapper}>
                    <View style={{ height: ms(100), justifyContent: 'space-evenly' }}>
                        <Text style={styles.fontKecil}>Bus</Text>
                        <Text style={styles.fontKecil}>Destination</Text>
                        <Text style={styles.fontKecil}>Date</Text>
                    </View>
                    <View style={{ height: ms(100), marginHorizontal: ms(10), justifyContent: 'space-evenly' }}>
                        <Text style={styles.fontKecil}>:</Text>
                        <Text style={styles.fontKecil}>:</Text>
                        <Text style={styles.fontKecil}>:</Text>
                    </View>
                    <View>
                        <View style={{ height: ms(100), justifyContent: 'space-evenly' }}>
                            <Text style={styles.fontMedium}>{config?.departure?.bus_name}</Text>
                            <Text style={styles.fontMedium}>{config?.departure?.departure_from[1]} ➜ {config?.departure?.arrival_to[1]}</Text>
                            <Text style={styles.fontMedium}>{config?.order_date}</Text>
                        </View>
                    </View>
                </View>
                <Divider orientation='horizontal' width={ms(2)} />
                <View style={styles.successWrapper}>
                    <Text style={styles.fontButton}>Status Payment: Success</Text>
                </View>
            </View>
            <Card containerStyle={styles.card}>
                <View style={styles.cardContainer}>
                    <Text style={styles.fontMedium}>Ticket Details</Text>
                </View>
                <Divider />
                <View style={[styles.cardContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={{ width: '45%', justifyContent: 'flex-start' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>Order ID</Text>
                        <Text style={styles.fontMedium}>{config.order_id}</Text>
                    </View>
                    <View style={{ width: '50%', justifyContent: 'flex-start' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>Ticket Number</Text>
                        <Text style={styles.fontMedium}>{config.ticket_number}</Text>
                    </View>
                </View>
            </Card>
            <Card containerStyle={styles.card}>
                <View style={styles.cardContainer}>
                    <Text style={styles.fontMedium}>Passenger Detail</Text>
                </View>
                {config?.departure?.passenger_detail?.map((e, i) => {
                    return (
                        <>
                            <Divider />
                            <View style={[styles.cardContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                                <View style={{ width: '50%', justifyContent: 'flex-start' }}>
                                    <Text style={[styles.contentContainer, styles.fontKecil]}>Name</Text>
                                    <Text style={styles.fontMedium}>{e.fullname}</Text>
                                </View>
                                <View style={{ width: '45%', justifyContent: 'flex-start' }}>
                                    <Text style={[styles.contentContainer, styles.fontKecil]}>Seat Number</Text>
                                    <Text style={styles.fontMedium}>{isReturn ? e.return_seat : e.departure_seat}</Text>
                                </View>
                            </View>
                        </>
                    )
                })}

            </Card>
            <Card containerStyle={styles.card}>
                <View style={styles.cardContainer}>
                    <Text style={styles.fontMedium}>Schedule</Text>
                </View>
                <Divider />
                <View style={styles.cardContainer}>
                    <View
                        style={{
                            alignItems: 'center',
                            marginRight: ms(10),
                            justifyContent: 'space-between',
                            height: ms(130),
                        }}>
                        <View style={styles.columnCenter}>
                            <Text style={styles.fontKecil}>{config?.departure?.departure_from[0]}</Text>
                            <Text style={styles.fontMini}>{ }</Text>
                        </View>

                        <Text style={styles.fontMini}>{ }</Text>
                        <View style={styles.columnCenter}>
                            <Text style={styles.fontKecil}>{config?.departure?.arrival_to[0]}</Text>
                            <Text style={styles.fontMini}>{ }</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center' }}>
                                <MaterialCommunityIcons
                                    name="circle-outline"
                                    color="#0F5996"
                                    size={ms(20)}
                                    style={{ marginVertical: ms(-5) }}
                                />
                                <FontAwesome
                                    name="ellipsis-v"
                                    color="#0F5996"
                                    style={{ marginBottom: ms(-3), width: ms(1) }}
                                />
                                <FontAwesome
                                    name="ellipsis-v"
                                    color="#0F5996"
                                    style={{ width: ms(1) }}
                                />
                                <FontAwesome
                                    name="ellipsis-v"
                                    color="#0F5996"
                                    style={{ marginVertical: ms(-4), width: ms(1) }}
                                />
                                <FontAwesome
                                    name="ellipsis-v"
                                    color="#0F5996"
                                    style={{ width: ms(1) }}
                                />
                                <FontAwesome
                                    name="ellipsis-v"
                                    color="#0F5996"
                                    style={{ marginVertical: ms(-4), width: ms(1) }}
                                />
                                <FontAwesome
                                    name="ellipsis-v"
                                    color="#0F5996"
                                    style={{ width: ms(1) }}
                                />
                                <FontAwesome
                                    name="ellipsis-v"
                                    color="#0F5996"
                                    style={{ marginVertical: ms(-4), width: ms(1) }}
                                />
                                <FontAwesome
                                    name="ellipsis-v"
                                    color="#0F5996"
                                    style={{ width: ms(1) }}
                                />
                                <FontAwesome
                                    name="ellipsis-v"
                                    color="#0F5996"
                                    style={{ marginVertical: ms(-4), width: ms(1) }}
                                />
                                <FontAwesome
                                    name="ellipsis-v"
                                    color="#0F5996"
                                    style={{ width: ms(1) }}
                                />
                                <FontAwesome
                                    name="ellipsis-v"
                                    color="#0F5996"
                                    style={{ marginVertical: ms(-4), width: ms(1) }}
                                />
                                <MaterialCommunityIcons
                                    name="record-circle-outline"
                                    color="#0F5996"
                                    size={ms(20)}
                                />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    marginLeft: ms(10),
                                    justifyContent: 'space-between',
                                    height: ms(130),
                                    width: '80%'
                                }}>
                                <View style={styles.contentBetween}>
                                    <Text style={styles.fontKecil}>{config?.departure?.departure_from[2]}</Text>
                                    <Text style={styles.abuKecil}>
                                        {config?.departure?.departure_from[1]}
                                    </Text>
                                </View>
                                <View style={styles.contentBetween}>
                                    <Text style={styles.fontKecil}>
                                        {config?.departure?.arrival_to[2]}
                                    </Text>
                                    <Text style={styles.abuKecil}>
                                        {config?.departure?.arrival_to[1]}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Card>
            <Card containerStyle={styles.card}>
                <View style={styles.cardContainer}>
                    <Text style={styles.fontMedium}>Bus Facilities</Text>
                </View>
                <Divider />
                <View style={[{ padding: ms(10), flexDirection: 'row', justifyContent: 'space-evenly' }]}>
                    {config?.departure?.facilities.AC ?
                        <View style={[styles.columnCenter, { width: '20%' }]}>
                            <Image
                                source={require('../../Assets/Images/iconoir_air-conditioner.png')}
                                PlaceholderContent={<ActivityIndicator />}
                                style={styles.icon}></Image>
                            <Text style={[styles.fontKecil, { textAlign: 'center' }]}>
                                Air Conditioner
                            </Text>
                        </View> : null
                    }
                    {config?.departure?.facilities.toilet ?
                        <View style={[styles.columnCenter, { width: '20%' }]}>
                            <Image
                                source={require('../../Assets/Images/map_toilet.png')}
                                PlaceholderContent={<ActivityIndicator />}
                                style={styles.icon}></Image>
                            <Text style={[styles.fontKecil, { textAlign: 'center' }]}>Toilet</Text>
                        </View> : null
                    }
                    {config?.departure?.facilities.free_meal ?
                        <View style={[styles.columnCenter, { width: '20%' }]}>
                            <Image
                                source={require('../../Assets/Images/fluent_food-24-filled.png')}
                                PlaceholderContent={<ActivityIndicator />}
                                style={styles.icon}></Image>
                            <Text style={[styles.fontKecil, { textAlign: 'center' }]}>
                                Free Meal
                            </Text>
                        </View> : null
                    }
                    {config?.departure?.facilities.charger ?
                        <View style={[styles.columnCenter, { width: '20%' }]}>
                            <Image
                                source={require('../../Assets/Images/iconoir_ev-charge.png')}
                                PlaceholderContent={<ActivityIndicator />}
                                style={styles.icon}></Image>
                            <Text style={[styles.fontKecil, { textAlign: 'center' }]}>Charger</Text>
                        </View> : null
                    }
                    {config?.departure?.facilities.comfortable_seat ?
                        <View style={[styles.columnCenter, { width: '20%' }]}>
                            <Image
                                source={require('../../Assets/Images/icon-park-outline_baby-car-seat.png')}
                                PlaceholderContent={<ActivityIndicator />}
                                style={styles.icon}></Image>
                            <Text style={[styles.fontKecil, { textAlign: 'center' }]}>
                                Comfortable Seat
                            </Text>
                        </View> : null
                    }
                </View>
            </Card>
            {config?.departure?.ticket_status && !reviewData?.UserReview && showReview ?
                <Card containerStyle={styles.card}>
                    <View style={styles.cardContainer}>
                        <Text style={styles.fontMedium}>Give Rating & Review</Text>
                    </View>
                    <Divider />
                    <View style={[styles.cardContainer, { justifyContent: 'center' }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: ms(250) }}>
                            <FontAwesome name={pressed ? "star" : "star-o"} color="#0F5996" size={ms(17)}
                                onPress={() => { setPressed(!pressed); setPressed1(false); setPressed2(false); setPressed3(false); setPressed4(false) }} />
                            <FontAwesome name={pressed1 ? "star" : "star-o"} color="#0F5996" size={ms(17)}
                                onPress={() => { setPressed(true); setPressed1(!pressed1), setPressed2(false); setPressed3(false); setPressed4(false) }} />
                            <FontAwesome name={pressed2 ? "star" : "star-o"} color="#0F5996" size={ms(17)}
                                onPress={() => { setPressed(true); setPressed1(true); setPressed2(!pressed2); setPressed3(false); setPressed4(false) }} />
                            <FontAwesome name={pressed3 ? "star" : "star-o"} color="#0F5996" size={ms(17)}
                                onPress={() => { setPressed(true); setPressed1(true); setPressed2(true); setPressed3(!pressed3); setPressed4(false) }} />
                            <FontAwesome name={pressed4 ? "star" : "star-o"} color="#0F5996" size={ms(17)}
                                onPress={() => { setPressed(true); setPressed1(true); setPressed2(true); setPressed3(true); setPressed4(!pressed4) }} />
                        </View>
                    </View>
                    <Divider />
                    <Input placeholder='Input Review here' multiline={true} numberOfLines={5} maxLength={255}
                        inputStyle={[styles.mediumGelap, styles.input]}
                        inputContainerStyle={{ borderBottomWidth: 0, marginBottom: 0 }}
                        onChangeText={(text) => setReview(text)}
                    />
                    <Divider />
                    <View style={{ paddingTop: ms(15) }}>
                        <TouchableOpacity style={styles.next} onPress={onReview}>
                            <Text style={styles.fontButton}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </Card> : null
            }
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    next: {
        backgroundColor: '#0F5996',
        borderRadius: ms(10),
        paddingVertical: ms(15),
        width: ms(310),
        alignItems: 'center',
        alignSelf: 'center',
    },
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
        fontSize: ms(14),
        color: '#092C4C'
    },
    fontKecil: {
        fontFamily: 'Montserrat-Regular',
        color: '#092C4C',
        fontSize: ms(10),
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
    cardContainer: {
        paddingHorizontal: ms(20),
        paddingVertical: ms(10),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    contentContainer: {
        marginBottom: ms(10),
        marginTop: ms(15)
    },
    fontMini: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(8),
        color: '#536C82',
        paddingTop: ms(5),
    },
    abuKecil: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(10),
        color: '#ABB3BB',
        paddingTop: ms(5),
    },
    abuMedium: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(12),
        color: '#ABB3BB',
        paddingTop: ms(5),
    },
    mediumGelap: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(12),
        color: '#092C4C',
        paddingTop: ms(5),
    },
    columnCenter: {
        alignItems: 'center',
    },
    icon: {
        width: ms(24),
        height: ms(24),
        margin: ms(10),
    },
    input: {
        borderColor: '#D0D0D0',
        borderWidth: ms(1),
        marginHorizontal: ms(10),
        marginTop: ms(10),
        marginBottom: -15,
        borderRadius: ms(8),
        textAlignVertical: 'top',
        padding: ms(10)
    }
})
