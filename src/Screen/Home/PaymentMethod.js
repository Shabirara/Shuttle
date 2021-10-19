import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { Card, Divider } from 'react-native-elements'
import { ms } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Modal from "react-native-modal";

export default function PaymentMethod(props) {
    const [banks, setBanks] = useState([
        { name: 'BCA', imgUri: require('../../Assets/Images/bca.png'), selected: false },
        { name: 'Mandiri', imgUri: require('../../Assets/Images/mandiri.png'), selected: false },
        { name: 'BNI', imgUri: require('../../Assets/Images/bni.png'), selected: false }
    ])

    const [isVisible, setIsVisible] = useState(false);

    const [bookActive, setBookActive] = useState(false)

    const listIndex = [0, 1, 2]

    const onBook = () => {
        props.navigation.navigate('Payment Details')
    }

    const toggleModal = () => {
        setIsVisible(!isVisible);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.ijo}>
                <View>
                    <Text style={styles.fontJudul}>Amount to Pay</Text>
                    <Text style={styles.fontBiru}>IDR 450.000</Text>
                    <Text style={styles.fontJudul}>Order ID</Text>
                    <Text style={styles.fontBiru}>BDTR2108187</Text>
                </View>
                <View style={{ width: '40%' }}>
                    <Text style={styles.fontJudul}>Passenger</Text>
                    <Text style={styles.fontBiru}>1</Text>
                    <Text style={styles.fontJudul}>Order Date</Text>
                    <Text style={styles.fontBiru}>Fri, 20 Aug 2021</Text>
                </View>
            </View>
            <Card containerStyle={styles.card}>
                <Text style={[styles.fontJudul, { padding: ms(30) }]}>Transfer Virtual Account</Text>
                <Card.Divider width={ms(2)} />
                {banks.map((e, i) => {
                    return (
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: ms(20), width: '100%' }}
                            onPress={() => {
                                const newIndex = [...listIndex];
                                newIndex.splice(i, 1)
                                setBanks((prevState) => {
                                    prevState[i].selected = !prevState[i].selected;
                                    newIndex.map((item, index) => {
                                        return prevState[item].selected = false;
                                    })
                                    return [...prevState]
                                });
                                setBookActive(true);
                            }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={e.imgUri} style={{ width: ms(40), height: ms(30), resizeMode: 'contain', margin: ms(15) }} />
                                <Text style={styles.fontCard}>{e.name} Virtual Account</Text>
                            </View>

                            <MaterialCommunityIcons
                                name={e.selected ? 'record-circle-outline' : 'circle-outline'}
                                color="#0F5996"
                                size={ms(20)}
                            />
                        </TouchableOpacity>
                    )
                })}
            </Card>
            <Card containerStyle={styles.book}>
                {bookActive ?
                    <TouchableOpacity onPress={toggleModal} style={styles.next}>
                        <Text style={styles.fontButton}>Book</Text>
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.nextDisabled} disabled>
                        <Text style={styles.fontButton}>Book</Text>
                    </TouchableOpacity>
                }
            </Card>
            <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
                <View style={styles.modal}>
                    <Text style={styles.fontJudul}>Are You Sure You Want to Book This?</Text>
                    <Text style={styles.fontModal}>You cannot change your booking after
                        continue to payment</Text>
                    <TouchableOpacity onPress={onBook} style={styles.next}>
                        <Text style={styles.fontButton}>Yes, Continue to Payment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal} style={styles.cancel}>
                        <Text style={styles.fontCancel}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View >
    )
}

const styles = StyleSheet.create({
    ijo: {
        backgroundColor: '#CBFFCA',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: ms(20),
        marginBottom: ms(10)
    },
    fontJudul: {
        fontFamily: 'Montserrat-Medium',
        fontSize: ms(14),
        color: '#092C4C',
        paddingVertical: ms(10)
    },
    fontBiru: {
        fontFamily: 'Montserrat-Medium',
        color: '#0F5996',
        fontSize: ms(20),
        paddingBottom: ms(10)
    },
    card: {
        backgroundColor: 'white',
        marginHorizontal: 0,
        paddingHorizontal: 0,
        width: '100%'
    },
    fontCard: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(12),
        color: '#092C4C'
    },
    book: {
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
    nextDisabled: {
        backgroundColor: '#0F599650',
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
        height: ms(280),
        justifyContent: 'space-evenly',
    },
    fontModal: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(14),
        color: '#092C4C',
        marginBottom: ms(20)
    },
    cancel: {
        backgroundColor: 'white',
        borderColor: '#0F5996',
        borderWidth: ms(1),
        borderRadius: ms(10),
        paddingVertical: ms(15),
        width: ms(310),
        alignItems: 'center',
    },
    fontCancel: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: ms(14),
        color: '#0F5996',
    }
})

//     < FlatList
// data = { banks }
// renderItem = { renderItem }
// keyExtractor = { item => item.name }
// style = {{ paddingRight: ms(20) }}
// />
// const renderItem = ({ item }) => (
//     <Bank name={item.name} imgUri={item.imgUri} selected={item.selected} />
// )
// const Bank = ({ name, imgUri, selected }) => (
//     <TouchableOpacity
//         style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: ms(10) }}
//         onPress={() => {
//             setBanks((prevState) => {
//                 prevState.selected = !prevState.selected
//                 return [...prevState]
//             });
//         }}>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <Image source={imgUri} style={{ width: ms(40), height: ms(30), resizeMode: 'contain', margin: ms(15) }} />
//             <Text style={styles.fontCard}>{name} Virtual Account</Text>
//         </View>

//         <MaterialCommunityIcons
//             name={selected ? 'record-circle-outline' : 'circle-outline'}
//             color="#0F5996"
//             size={ms(20)}
//         />
//     </TouchableOpacity>
// )