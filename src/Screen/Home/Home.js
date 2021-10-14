import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import Gallery from 'react-native-image-gallery';
import SearchableDropdown from 'react-native-searchable-dropdown';

export default function Home(props) {
  const onSearch = () => props.navigation.navigate('Home Stack');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const [active, setActive] = useState(0);

  const dataTab = [
    {
      title: 'ONE WAY',
    },
    {
      title: 'ROUND TRIP',
    },
  ];

  return (
    <>
      <View style={{ padding: 20 }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            {dataTab.map((e, i) => (
              <TouchableOpacity
                onPress={() => setActive(i)}
                style={{
                  marginHorizontal: wp(5),
                  backgroundColor: active === i ? '#c4c4c4' : '#222',
                  padding: 10,
                  height: hp(5),
                  width: wp(30),
                  alignItems: 'center',
                }}>
                <Text>{e.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ padding: 20 }}>
            {active === 0 ? <OneWay /> : <RoundTrip />}
          </View>
        </View>
      </View>
    </>
  );
}

const OneWay = () => {
  return (
    <View>
      <Text style={{ color: '#092C4C' }}>From</Text>
      <SearchableDropdown
        placeholder="Search place"
        placeholderTextColor="#ABB3BB"
        containerStyle={{ borderRadius: 10, borderColor: 'red' }}
        itemStyle={{ borderColor: 'red' }}
      />
      <Text style={{ color: '#092C4C' }}>To</Text>
      <SearchableDropdown
        placeholder="Search place"
        placeholderTextColor="#ABB3BB"
      />
      <Text style={{ color: '#092C4C' }}>Departure Date</Text>
      <SearchableDropdown
        placeholder="Search place"
        placeholderTextColor="#ABB3BB"
      />
      <Text style={{ color: '#092C4C' }}>Passenger</Text>
      <SearchableDropdown
        placeholder="Search place"
        placeholderTextColor="#ABB3BB"
      />
    </View>
  );
};

const RoundTrip = () => {
  return (
    <View>
      <Text style={{ color: '#092C4C' }}>From</Text>
      <SearchableDropdown
        placeholder="Search place"
        placeholderTextColor="#ABB3BB"
      />
      <Text style={{ color: '#092C4C' }}>To</Text>
      <SearchableDropdown
        placeholder="Search place"
        placeholderTextColor="#ABB3BB"
      />
      <Text style={{ color: '#092C4C' }}>Departure Date</Text>
      <SearchableDropdown
        placeholder="Search place"
        placeholderTextColor="#ABB3BB"
      />
      <Text style={{ color: '#092C4C' }}>Return Date</Text>
      <SearchableDropdown
        placeholder="Search place"
        placeholderTextColor="#ABB3BB"
      />
      <Text style={{ color: '#092C4C' }}>Passenger</Text>
      <SearchableDropdown
        placeholder="Search place"
        placeholderTextColor="#ABB3BB"
      />
    </View>
  );
};
