import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Card, Divider } from 'react-native-elements'
import { ms } from 'react-native-size-matters'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Clipboard from '@react-native-clipboard/clipboard';
import Modal from 'react-native-modal'

export default function PaymentDetails(props) {
    const [show, setShow] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => {
        setIsVisible(!isVisible);
    };
    const onBookingDetails = () => {
        props.navigation.navigate('Booking Details')
    }
    return (
        <>
            <ScrollView>
                <View style={styles.ijo}>
                    <Image source={require('../../Assets/Images/bx_bx-bus.png')}
                        style={{ height: ms(30), width: ms(30), margin: ms(20) }} />
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.fontMedium}>Jakarta</Text>
                            <Image source={require('../../Assets/Images/carbon_repeat.png')}
                                style={{ margin: ms(10) }} />
                            <Text style={styles.fontMedium}>Surabaya</Text>
                        </View>
                        <Text style={styles.fontKecil}>Sat, 21 Aug 2021 - Sat, 28 Aug 2021</Text>
                    </View>
                </View>
                <Card containerStyle={styles.card}>
                    <View style={{ padding: ms(10) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: ms(20) }}>
                            <EvilIcons name="clock"
                                style={{ color: '#0F5996', fontSize: ms(20), marginHorizontal: ms(10), marginTop: ms(2) }} />
                            <View style={{ height: ms(50), justifyContent: 'space-between' }}>
                                <Text style={styles.fontKecil}>Complete payment before</Text>
                                <Text style={styles.fontMedium}>Sat, 21 Aug 2021 05:00</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <FontAwesome name="money"
                                style={{ color: '#0F5996', fontSize: ms(15), marginHorizontal: ms(10), marginTop: ms(2) }} />
                            <View style={{ justifyContent: 'space-between' }}>
                                <Text style={styles.fontKecil}>Transfer to</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: ms(300), alignItems: 'center' }}>
                                    <Text style={styles.fontMedium}>PT Ozie Selalu Sukses</Text>
                                    <Image source={require('../../Assets/Images/bca.png')} style={{ height: ms(30), width: ms(40) }} />
                                </View>
                                <View style={styles.rekening}>
                                    <Text style={styles.fontMedium}>123 456 7890</Text>
                                    <TouchableOpacity onPress={() => { Clipboard.setString('123 456 7890') }, toggleModal}>
                                        <Text style={styles.fontBiru}>Copy</Text>
                                    </TouchableOpacity>

                                </View>
                                <Text style={styles.fontKecil}>Amount to Pay</Text>
                                <View style={styles.rekening}>
                                    <Text style={styles.fontMedium}>Rp. 450.000</Text>
                                    <TouchableOpacity onPress={() => { Clipboard.setString('Rp. 450.000') }, toggleModal}>
                                        <Text style={styles.fontBiru}>Copy</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </Card>
                <Card containerStyle={styles.card}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: ms(20) }}>
                        <Text style={styles.fontMedium}>How to Pay</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => setShow(!show)}>
                            <Text style={styles.fontShow}>{show ? 'Hide' : 'Show'}</Text>
                            {show ?
                                <AntDesign name='caretup' style={{ color: '#0F5996', margin: ms(5) }} /> :
                                <AntDesign name='caretdown' style={{ color: '#0F5996', margin: ms(5) }} />
                            }
                        </TouchableOpacity>
                    </View>
                    {show ?
                        <>
                            <Divider style={{ marginVertical: ms(20) }} />
                            <View style={{ paddingHorizontal: ms(20) }}>
                                <View style={{ marginBottom: ms(20) }}>
                                    <Text style={styles.fontAtm}>ATM</Text>
                                    <Text style={styles.fontKecil}>
                                        1. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        2. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        3. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit
                                        4. Lorem ipsum dolor sit amet, consectetur
                                        5. Lorem ipsum dolor sit amet
                                        6. Lorem ipsum
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.fontAtm}>Mobile Banking</Text>
                                    <Text style={styles.fontKecil}>
                                        1. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        2. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        3. Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit
                                        4. Lorem ipsum dolor sit amet, consectetur
                                        5. Lorem ipsum dolor sit amet
                                        6. Lorem ipsum
                                    </Text>
                                </View>
                            </View>
                        </>
                        : null
                    }
                </Card>
            </ScrollView>
            <Card containerStyle={styles.cardNext}>
                <TouchableOpacity onPress={onBookingDetails} style={styles.next}>
                    <Text style={styles.fontButton}>Go To Booking Detail</Text>
                </TouchableOpacity>
            </Card>
            <Modal isVisible={isVisible} onBackdropPress={() => setIsVisible(false)} onModalShow={() => setTimeout(() => { setIsVisible(false) }, 300)}>
                <View style={styles.modal}>
                    <Text style={styles.fontKecil}>Copied!</Text>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    ijo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: ms(15),
        backgroundColor: '#CBFFCA',
    },
    fontMedium: {
        fontFamily: 'Montserrat-Medium',
        fontSize: ms(16),
        color: '#092C4C'
    },
    fontKecil: {
        fontFamily: 'Montserrat-Regular',
        color: '#092C4C',
        fontSize: ms(12)
    },
    fontBiru: {
        fontFamily: 'Montserrat-Regular',
        color: '#0F5996',
        fontSize: ms(12)
    },
    card: {
        backgroundColor: 'white',
        paddingVertical: ms(20),
        paddingHorizontal: 0,
        marginHorizontal: 0,
    },
    rekening: {
        flexDirection: 'row',
        backgroundColor: '#F7F9FA',
        justifyContent: 'space-between',
        padding: ms(20),
        marginVertical: ms(20)
    },
    fontShow: {
        fontFamily: 'Montserrat-Light',
        color: '#0F5996',
        fontSize: ms(12)
    },
    fontAtm: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#0F5996',
        fontSize: ms(12),
        marginBottom: ms(10)
    },
    cardNext: {
        backgroundColor: 'white',
        paddingVertical: ms(20),
        alignItems: 'center'
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
    modal: {
        backgroundColor: 'white',
        padding: ms(20),
        borderRadius: ms(10),
        justifyContent: 'space-evenly',
        width: ms(100),
        alignSelf: 'center',
        marginTop: '150%'
    },
})