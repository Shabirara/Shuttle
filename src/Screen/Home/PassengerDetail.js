import React, { useState } from 'react'
import { View, Text, Button, ScrollView, StyleSheet, Image } from 'react-native'
import { ms } from 'react-native-size-matters'

export default function PassengerDetail(props) {
    const [oneWay, setOneWay] = useState(false)
    return (
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
                </>
            }

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    topWrapper: {
        backgroundColor: '#CBFFCA',
        padding: ms(10),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: ms(10)
    },
    fontKecil: {
        fontFamily: 'Montserrat-Regular',
        fontSize: ms(12),
        color: '#092C4C',
        padding: ms(5),
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
    }
})