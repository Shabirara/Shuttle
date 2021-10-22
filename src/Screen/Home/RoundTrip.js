import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Card, Input } from 'react-native-elements';
import { ms } from 'react-native-size-matters';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native'

const RoundTrip = (props) => {
    const [pressed, setPressed] = useState(false)
    const [pressedA, setPressedA] = useState(false)
    const [searchResult, setSearchResult] = useState([]);
    const [searchResultA, setSearchResultA] = useState([]);
    const [valueSearch, setValueSearch] = useState("");
    const [valueSearchA, setValueSearchA] = useState("");

    const [showPassenger, setShowPassenger] = useState(false);
    const [passengerValue, setPassengerValue] = useState("")

    const [dateVisible, setDateVisible] = useState(false);
    const [dateVisibleA, setDateVisibleA] = useState(false);
    const [datePicked, setDatePicked] = useState("")
    const [datePickedA, setDatePickedA] = useState("")

    const navigation = useNavigation()

    const toggleDate = () => {
        setDateVisible(!dateVisible)
    }
    const toggleDateA = () => {
        setDateVisibleA(!dateVisibleA)
    }

    const handleDate = (date) => {
        const datestring = date.toDateString()
        setDatePicked(datestring);
        setDateVisible(false);
    }

    const handleDateA = (date) => {
        const datestring = date.toDateString()
        setDatePickedA(datestring);
        setDateVisibleA(false);
    }

    const passenger = [1, 2, 3, 4]
    const item = [
        {
            id: 1,
            name: 'All Terminal Jakarta'
        },
        {
            id: 2,
            name: 'All Terminal Bandung'
        },
        {
            id: 3,
            name: 'All Terminal Yogyakarta'
        },
        {
            id: 4,
            name: 'All Terminal Semarang'
        },
        {
            id: 5,
            name: 'All Terminal Surabaya'
        },
    ];

    const onSearch = () => {
        navigation.navigate('Detail Stack', { screen: 'Search' })
    };

    const findData = (searchString) => {
        setValueSearch(searchString);
        const filteredCharacters = item.filter((e) => {
            if (searchString.length > 0) {
                return (
                    e.name.toUpperCase().includes(searchString.toUpperCase())
                );
            } else {
                setSearchResult([]);
            }
        });
        setSearchResult(filteredCharacters);
    };

    const findDataA = (searchString) => {
        setValueSearchA(searchString);
        const filteredCharactersA = item.filter((e) => {
            if (searchString.length > 0) {
                return (
                    e.name.toUpperCase().includes(searchString.toUpperCase())
                );
            } else {
                setSearchResult([]);
            }
        });
        setSearchResultA(filteredCharactersA);
    };

    return (
        <Card containerStyle={styles.oneContainer}>
            <Text style={styles.from}>From</Text>
            <View style={pressed ? styles.fromContainer : null}>
                <Input placeholder='Search place'
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    leftIcon={
                        pressed ?
                            <EvilIcons name="search" style={{ color: 'grey', fontSize: ms(25) }} /> :
                            <Image source={require('../../Assets/Images/Berangkat.png')} />
                    }
                    rightIcon={
                        pressed ?
                            <Feather name='x-circle'
                                style={{
                                    fontSize: ms(20), color: '#092C4C'
                                }}
                                onPress={() => {
                                    setValueSearch("");
                                    setSearchResult([]);
                                    setPressed(false);
                                }}
                            /> : null
                    }
                    onFocus={() => setPressed(true)}
                    value={valueSearch}
                    onChangeText={(text) => { findData(text); setPressed(true) }}
                />
                {pressed ?
                    <View style={styles.searchResultContainer}>
                        <Text style={styles.fontMedium}>{searchResult.length > 0 ? 'Search Result' : 'Popular City'}</Text>
                        {searchResult.length > 0 ?
                            searchResult.map((e) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        setValueSearch(e.name);
                                        setPressed(false)
                                    }}
                                    style={styles.searchResult}>
                                    <Text style={styles.fontKecil}>{e.name}</Text>
                                </TouchableOpacity>
                            )) :
                            item.map((e) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        setValueSearch(e.name);
                                        setPressed(false)
                                    }}
                                    style={styles.searchResult}>
                                    <Text style={styles.fontKecil}>{e.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    : null}
            </View>

            <View style={styles.switch}>
                <Text style={styles.from}>To</Text>
                <TouchableOpacity onPress={() => {
                    setValueSearch(valueSearchA);
                    setValueSearchA(valueSearch)
                }}>
                    <Image source={require('../../Assets/Images/switchValue.png')} />
                </TouchableOpacity>
            </View>
            <View style={pressedA ? styles.fromContainer : null}>
                <Input placeholder='Search place'
                    style={styles.input}
                    inputContainerStyle={styles.inputContainer}
                    leftIcon={
                        pressedA ?
                            <EvilIcons name="search" style={{ color: 'grey', fontSize: ms(25) }} /> :
                            <Image source={require('../../Assets/Images/Pulang.png')} />
                    }
                    rightIcon={
                        pressedA ?
                            <Feather name='x-circle'
                                style={{
                                    fontSize: ms(20), color: '#092C4C'
                                }}
                                onPress={() => {
                                    setValueSearchA("");
                                    setSearchResultA([]);
                                    setPressedA(false)
                                }}
                            /> : null
                    }
                    onFocus={() => setPressedA(true)}
                    value={valueSearchA}
                    onChangeText={(text) => { findDataA(text), setPressedA(true) }}
                />
                {pressedA ?
                    <View style={styles.searchResultContainer}>
                        <Text style={styles.fontMedium}>{searchResultA.length > 0 ? 'Search Result' : 'Popular City'}</Text>
                        {searchResultA.length > 0 ?
                            searchResultA.map((e) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        setValueSearchA(e.name);
                                        setPressedA(false)
                                    }}
                                    style={styles.searchResult}>
                                    <Text style={styles.fontKecil}>{e.name}</Text>
                                </TouchableOpacity>
                            )) :
                            item.map((e) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        setValueSearchA(e.name);
                                        setPressedA(false)
                                    }}
                                    style={styles.searchResult}>
                                    <Text style={styles.fontKecil}>{e.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                    : null}
            </View>

            <Text style={styles.from}>Departure Date</Text>
            <Input placeholder="Select date"
                leftIcon={
                    <Image source={require('../../Assets/Images/Kalender.png')} />
                }
                style={styles.input}
                inputContainerStyle={styles.inputContainer}
                onFocus={toggleDate}
                value={datePicked}
            />
            <DateTimePickerModal
                mode='date'
                isVisible={dateVisible}
                onConfirm={handleDate}
                onCancel={() => setDateVisible(false)}
            />

            <Text style={styles.from}>Return Date</Text>
            <Input placeholder="Select date"
                leftIcon={
                    <Image source={require('../../Assets/Images/Kalender.png')} />
                }
                style={styles.input}
                inputContainerStyle={styles.inputContainer}
                onFocus={toggleDateA}
                value={datePickedA}
            />
            <DateTimePickerModal
                mode='date'
                isVisible={dateVisibleA}
                onConfirm={handleDateA}
                onCancel={() => setDateVisibleA(false)}
            />

            <Text style={styles.from}>Passenger</Text>
            <Input placeholder="Select passenger"
                leftIcon={
                    <Image source={require('../../Assets/Images/Penumpang.png')} />
                }
                style={styles.input}
                inputContainerStyle={styles.inputContainer}
                onFocus={() => setShowPassenger(true)}
                value={passengerValue}
            />

            <View style={showPassenger ? styles.dropdown : null}>
                {showPassenger ?
                    passenger.map((e) => (
                        <TouchableOpacity
                            style={passengerValue === `${e} Passenger` ? styles.searchResultSelected : styles.searchResult}
                            onPress={() => { setPassengerValue(`${e} Passenger`); setShowPassenger(false) }}
                        >
                            <Text style={styles.fontKecil}>{e} Passenger</Text>
                        </TouchableOpacity>
                    ))
                    : null
                }
            </View>

            <TouchableOpacity onPress={onSearch} style={styles.next}>
                <Text style={styles.fontButton}>Search</Text>
            </TouchableOpacity>
        </Card>
    )
}

const styles = StyleSheet.create({
    oneContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: ms(5),
        paddingHorizontal: ms(10),
        paddingVertical: ms(20),
        margin: ms(20)
    },
    from: {
        color: '#092C4C',
        marginBottom: ms(12),
        fontFamily: 'Montserrat-Medium',
        marginHorizontal: ms(10)
    },
    fontMedium: {
        color: '#092C4C',
        marginBottom: ms(10),
        fontFamily: 'Montserrat-Medium',
    },
    fontKecil: {
        fontFamily: 'Montserrat-Regular',
        color: '#092C4C',
        fontSize: ms(12)
    },
    fromContainer: {
        borderWidth: ms(1),
        borderColor: '#D0D0D0',
        borderRadius: ms(5),
        paddingVertical: ms(10),
        marginHorizontal: ms(10),
        marginBottom: ms(10)
    },
    inputContainer: {
        borderWidth: ms(1),
        borderColor: '#D0D0D0',
        borderRadius: ms(5),
        paddingHorizontal: ms(10),
    },
    input: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(14),
    },
    dropdown: {
        borderWidth: ms(1),
        borderColor: '#D0D0D0',
        borderRadius: ms(5),
        marginTop: ms(-26),
        marginHorizontal: ms(9),
    },
    searchResultContainer: {
        paddingHorizontal: ms(15),
        marginBottom: ms(10),
        marginTop: ms(-10)
    },
    searchResult: {
        padding: ms(15)
    },
    searchResultSelected: {
        padding: ms(15),
        backgroundColor: '#CBFFCA'
    },
    switch: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: ms(-25)
    },
    next: {
        backgroundColor: '#0F5996',
        borderRadius: ms(10),
        paddingVertical: ms(15),
        marginHorizontal: ms(10),
        alignItems: 'center',
    },
    fontButton: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: ms(14),
        color: 'white',
    },
})

export default RoundTrip