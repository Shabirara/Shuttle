import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Divider, Card, Input } from 'react-native-elements'
import { ms } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function TicketDetails() {
    const [checkedIn, setCheckedIn] = useState(false)
    const [expired, setExpired] = useState(false)
    const [pressed, setPressed] = useState(false)
    const [pressed1, setPressed1] = useState(false)
    const [pressed2, setPressed2] = useState(false)
    const [pressed3, setPressed3] = useState(false)
    const [pressed4, setPressed4] = useState(false)

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
                            <Text style={styles.fontMedium}>PT Sinar Jaya Group</Text>
                            <Text style={styles.fontMedium}>Jakarta ➜ Surabaya</Text>
                            <Text style={styles.fontMedium}>Sat, 21 Aug 2021</Text>
                        </View>
                    </View>
                </View>
                <Divider orientation='horizontal' width={ms(2)} />
                <View style={expired ? styles.expiredWrapper : (checkedIn ? styles.successWrapper : styles.pendingWrapper)}>
                    <Text style={styles.fontButton}>Status Payment: {expired ? 'Expired' : (checkedIn ? 'Success' : 'Pending')}</Text>
                </View>
            </View>
            <Card containerStyle={styles.card}>
                <View style={styles.cardContainer}>
                    <Text style={styles.fontMedium}>Ticket Details</Text>
                </View>
                <Divider />
                <View style={[styles.cardContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={{ width: '50%', justifyContent: 'space-between' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>Order ID</Text>
                        <Text style={styles.fontMedium}>BDTR2108187</Text>
                    </View>
                    <View style={{ width: '50%', justifyContent: 'space-between' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>Ticket Number</Text>
                        <Text style={styles.fontMedium}>1234567890</Text>
                    </View>
                </View>
            </Card>
            <Card containerStyle={styles.card}>
                <View style={styles.cardContainer}>
                    <Text style={styles.fontMedium}>Passenger Detail</Text>
                </View>
                <Divider />
                <View style={[styles.cardContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={{ width: '50%', justifyContent: 'space-between' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>Name</Text>
                        <Text style={styles.fontMedium}>Irham Raziqony</Text>
                    </View>
                    <View style={{ width: '50%', justifyContent: 'space-between' }}>
                        <Text style={[styles.contentContainer, styles.fontKecil]}>Seat Number</Text>
                        <Text style={styles.fontMedium}>12</Text>
                    </View>
                </View>
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
                            <Text style={styles.fontKecil}>07.00</Text>
                            <Text style={styles.fontMini}>Sat, 21 Aug</Text>
                        </View>

                        <Text style={styles.fontMini}>8hr 00mnt</Text>
                        <View style={styles.columnCenter}>
                            <Text style={styles.fontKecil}>15.00</Text>
                            <Text style={styles.fontMini}>Sat, 21 Aug</Text>
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
                                    <Text style={styles.fontKecil}>Terminal Lebak Bulus</Text>
                                    <Text style={styles.abuKecil}>
                                        Jl. Lebak Bulus Jaya Abadi RT 06 RW 07 Jakarta Selatan
                                    </Text>
                                </View>
                                <View style={styles.contentBetween}>
                                    <Text style={styles.fontKecil}>
                                        Terminal Purabaya Bungurasih
                                    </Text>
                                    <Text style={styles.abuKecil}>
                                        Jl. Bungurasih Timur, Waru, Sidoarjo
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
                <View style={[{ padding: ms(10), flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={[styles.columnCenter, { width: '20%' }]}>
                        <Image
                            source={require('../../Assets/Images/iconoir_air-conditioner.png')}
                            PlaceholderContent={<ActivityIndicator />}
                            style={styles.icon}></Image>
                        <Text style={[styles.fontKecil, { textAlign: 'center' }]}>
                            Air Conditioner
                        </Text>
                    </View>
                    <View style={[styles.columnCenter, { width: '20%' }]}>
                        <Image
                            source={require('../../Assets/Images/map_toilet.png')}
                            PlaceholderContent={<ActivityIndicator />}
                            style={styles.icon}></Image>
                        <Text style={[styles.fontKecil, { textAlign: 'center' }]}>Toilet</Text>
                    </View>
                    <View style={[styles.columnCenter, { width: '20%' }]}>
                        <Image
                            source={require('../../Assets/Images/fluent_food-24-filled.png')}
                            PlaceholderContent={<ActivityIndicator />}
                            style={styles.icon}></Image>
                        <Text style={[styles.fontKecil, { textAlign: 'center' }]}>
                            Free Meal
                        </Text>
                    </View>
                    <View style={[styles.columnCenter, { width: '20%' }]}>
                        <Image
                            source={require('../../Assets/Images/iconoir_ev-charge.png')}
                            PlaceholderContent={<ActivityIndicator />}
                            style={styles.icon}></Image>
                        <Text style={[styles.fontKecil, { textAlign: 'center' }]}>Charger</Text>
                    </View>
                    <View style={[styles.columnCenter, { width: '20%' }]}>
                        <Image
                            source={require('../../Assets/Images/icon-park-outline_baby-car-seat.png')}
                            PlaceholderContent={<ActivityIndicator />}
                            style={styles.icon}></Image>
                        <Text style={[styles.fontKecil, { textAlign: 'center' }]}>
                            Comfortable Seat
                        </Text>
                    </View>
                </View>
            </Card>
            {expired ? null : (checkedIn ?
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
                    <Input placeholder='Input Review here' multiline={true} numberOfLines={5}
                        inputStyle={[styles.abuMedium, styles.input]}
                        inputContainerStyle={{ borderBottomWidth: 0, marginBottom: 0 }}
                    />
                    <Divider />
                    <View style={{ paddingTop: ms(15) }}>
                        <TouchableOpacity style={styles.next}>
                            <Text style={styles.fontButton}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </Card> : null)}
        </ScrollView>
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