import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { ms } from 'react-native-size-matters';
import OneWay from './OneWay';
import RoundTrip from './RoundTrip';

export default function Home1(props) {

  const [active, setActive] = useState(0)
  const dataTab = [
    {
      title: 'One Way'
    },
    {
      title: 'Round Trip'
    }
  ]

  return (
    <ScrollView>
      <View style={styles.extension}>
        <View style={styles.top}>
          {dataTab.map((e, i) => (
            <TouchableOpacity
              onPress={() => setActive(i)}
              style={[{
                backgroundColor: active === i ? '#fff' : '#EDEDED', width: '50%',
              }, styles.topTab]}>
              <Text style={active === i ? styles.fontButton : styles.fontMedium}>{e.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {active === 0 ? <OneWay /> : <RoundTrip />}
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  fontMedium: {
    color: '#092C4C',
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(14)
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
    color: '#0F5996',
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  topTab: {
    padding: ms(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(5),
    marginHorizontal: ms(-5)
  },
  extension: {
    flexDirection: 'row',
    backgroundColor: '#0F5996',
    padding: ms(20),
    justifyContent: 'center'
  }
})