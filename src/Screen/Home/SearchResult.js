import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import { Button, CheckBox, Divider } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ms } from 'react-native-size-matters'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Modal from "react-native-modal";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        bus: 'KYM Trans',
        type: 'Executive',
        hourStart: '13.10',
        duration: '8hr 20mnt',
        hourEnd: '21.00',
        price: '250.000',
        available: '20',
        terminalStart: 'Terminal Kampung Rambutan Jakarta',
        terminalEnd: 'Terminal Purabaya Bungurasih'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        bus: 'PT Sumber Bahari',
        type: 'Executive',
        hourStart: '07.00',
        duration: '8hr 00mnt',
        hourEnd: '15.00',
        price: '200.000',
        available: '20',
        terminalStart: 'Terminal Lebak Bulus',
        terminalEnd: 'Terminal Purabaya Bungurasih'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        bus: 'Jaya Sentosa',
        type: 'Executive',
        hourStart: '07.00',
        duration: '8hr 00mnt',
        hourEnd: '15.00',
        price: '300.000',
        available: '20',
        terminalStart: 'Terminal Lebak Bulus',
        terminalEnd: 'Terminal Bratang Surabaya'
    }
];

const Item = ({ bus, type, price, available, hourStart, duration, hourEnd, terminalStart, terminalEnd }) => (
    <View style={styles.item}>
        <View style={{ alignItems: 'center', marginRight: ms(10), justifyContent: 'space-evenly', height: ms(125) }}>
            <Image source={require('../../Assets/Images/bx_bx-bus.png')}
                style={{ height: ms(40), width: ms(40) }} />
            <Text style={styles.hour}>{hourStart}</Text>
            <Text style={styles.duration}>{duration}</Text>
            <Text style={styles.hour}>{hourEnd}</Text>
        </View>
        <View style={{ flexDirection: 'column', marginTop: ms(10) }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: ms(245), height: ms(40) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexShrink: 1, width: ms(120) }}>
                        <Text style={styles.tanggal} numberOfLines={1}>{bus}</Text>
                        <Text style={styles.type}>{type}</Text>
                    </View>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <Text style={styles.change}>IDR {price}/</Text>
                        <Text style={styles.type}>seat</Text>
                    </View>
                    <Text style={styles.type}>Available Seat : {available}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ alignItems: 'center', marginTop: ms(5) }}>
                    <MaterialCommunityIcons name='circle-outline' color='#0F5996' size={ms(20)} />
                    <FontAwesome name='ellipsis-v' color='#0F5996' style={{ marginVertical: ms(-3), width: ms(1) }} />
                    <FontAwesome name='ellipsis-v' color='#0F5996' style={{ width: ms(1) }} />
                    <FontAwesome name='ellipsis-v' color='#0F5996' style={{ marginVertical: ms(-4), width: ms(1) }} />
                    <MaterialCommunityIcons name='record-circle-outline' color='#0F5996' size={ms(20)} />
                </View>
                <View style={{ flexDirection: 'column', marginLeft: ms(10), marginTop: ms(7), justifyContent: 'space-between', height: ms(60) }}>
                    <Text style={styles.type}>{terminalStart}</Text>
                    <Text style={styles.type}>{terminalEnd}</Text>
                </View>
            </View>
        </View>
    </View >
);


export default function SearchResult(props) {
    const onLogin = () => {
        props.navigation.navigate('Login')
    };

    const [isChangeVisible, setChangeVisible] = useState(false);
    const toggleChangeModal = () => {
        setChangeVisible(!isChangeVisible);
    };

    const [isSortVisible, setSortVisible] = useState(false);
    const toggleSortModal = () => {
        setSortVisible(!isSortVisible);
    };

    const [checked, setChecked] = useState(false);
    const [activeCheck, setActiveCheck] = useState(0);

    const checklist = ['Lowest price', 'Earliest departure time', 'Earliest arrival time', 'Shortest duration']

    const renderItem = ({ item }) => (
        <Item bus={item.bus} type={item.type} price={item.price} available={item.available} hourStart={item.hourStart} duration={item.duration} hourEnd={item.hourEnd} terminalStart={item.terminalStart} terminalEnd={item.terminalEnd} />
    );

    return (
        <>
            <Modal isVisible={isChangeVisible} swipeDirection='down' onSwipeComplete={() => setChangeVisible(false)} style={{ margin: 0 }}>
                <View style={styles.changeModal}>
                    <Divider orientation="horizontal" width={ms(8)} style={styles.holder} />
                    <Text style={styles.jalur}>Change Shuttle</Text>
                </View>
            </Modal>

            <Modal isVisible={isSortVisible} swipeDirection='down' onSwipeComplete={() => setSortVisible(false)} style={{ marginHorizontal: 0, marginTop: '100%', marginBottom: 0 }}>
                <View style={styles.sortModal}>
                    <Divider orientation="horizontal" width={ms(8)} style={styles.holder} />
                    <Text style={styles.jalur}>Sort By</Text>
                    <View style={{ width: '100%' }}>
                        {checklist.map((e, i) => {
                            return (
                                <CheckBox title={e}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checkedColor='#0F5996'
                                    uncheckedColor='#0F5996'
                                    onPress={() => {
                                        setActiveCheck(i);
                                    }}
                                    checked={activeCheck === i ? true : false}
                                    containerStyle={{ backgroundColor: 'white', borderColor: 'white' }}
                                    textStyle={styles.sortFont} key={i} />
                            )
                        })}
                    </View>
                </View>
            </Modal>

            <SafeAreaView style={{ flex: 1 }}>

                <View style={styles.jalurTanggal}>
                    <Text style={styles.jalur}>
                        Jakarta  ➜  Surabaya
                    </Text>
                    <Text style={styles.tanggal}>
                        Sat, 9 Okt 2021
                    </Text>
                    <Button title='Change'
                        onPress={toggleChangeModal}
                        titleStyle={styles.change}
                        buttonStyle={styles.buttonChange}
                    />
                </View>

                <View style={styles.floatings}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.touchable} onPress={toggleSortModal}>
                            <Image source={require('../../Assets/Images/Vector.png')} />
                            <Text style={styles.sort}>Sort</Text>
                        </TouchableOpacity>
                        <Divider orientation="vertical" height={ms(35)} color='white' width={ms(1)} />
                        <TouchableOpacity style={styles.touchable}>
                            <Image source={require('../../Assets/Images/carbon_settings-adjust.png')} />
                            <Text style={styles.sort}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    jalurTanggal: {
        height: ms(150),
        backgroundColor: '#CBFFCA',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: ms(10)
    },
    jalur: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#092C4C',
        fontSize: ms(16)
    },
    tanggal: {
        fontFamily: 'Montserrat-Medium',
        color: '#092C4C',
        fontSize: ms(14),
    },
    change: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#0F5996',
        fontSize: ms(14)
    },
    buttonChange: {
        width: ms(300),
        backgroundColor: 'white',
        borderRadius: ms(20),
        paddingVertical: ms(10),
        borderColor: 'gray',
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: ms(5),
        marginHorizontal: ms(20),
        borderRadius: ms(5),
        flexDirection: 'row',
    },
    type: {
        color: '#536C82',
        fontFamily: 'Montserrat-Medium',
        fontSize: ms(10)
    },
    hour: {
        color: '#092C4C',
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(10)
    },
    duration: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(8),
        color: '#536C82'
    },
    floatings: {
        position: 'absolute',
        bottom: ms(50),
        zIndex: 1,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#0F5996',
        flexDirection: 'row',
        borderRadius: ms(50),
        paddingVertical: ms(10),
        justifyContent: 'space-evenly',
        width: ms(300)
    },
    touchable: {
        margin: ms(5),
        flexDirection: 'row',
        alignItems: 'center'
    },
    sort: {
        fontFamily: 'Montserrat-Medium',
        fontSize: ms(14),
        color: 'white',
        marginLeft: ms(5)
    },
    changeModal: {
        borderTopRightRadius: ms(40),
        borderTopLeftRadius: ms(40),
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    },
    holder: {
        width: ms(70),
        alignSelf: 'center',
        borderRadius: ms(10),
        marginTop: ms(20),
        marginBottom: ms(40)
    },
    sortModal: {
        borderTopRightRadius: ms(40),
        borderTopLeftRadius: ms(40),
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 1
    },
    sortFont: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(14),
        color: '#092C4C'
    }
})