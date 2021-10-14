import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import Gallery from 'react-native-image-gallery';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Berangkat from '../../Assets/Images/Berangkat.png';
import Pulang from '../../Assets/Images/Pulang.png';
import kalender from '../../Assets/Images/Kalender.png';
import Penumpang from '../../Assets/Images/Penumpang.png';
import Tukar from '../../Assets/Images/switchValue.png';

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
      title: 'One Way',
    },
    {
      title: 'Roundtrip',
    },
  ];

  const place = [
    {
      id: 1,
      name: 'All Terminal Jakarta',
    },
    {
      id: 2,
      name: 'All terminal Bandung',
    },
    {
      id: 3,
      name: 'All Terminal Yogyakarta',
    },
    {
      id: 4,
      name: 'All Terminal Semarang',
    },
    {
      id: 5,
      name: 'All Terminal Surabaya',
    },
  ];

  return (
    <>
      <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#0F5996',
              paddingHorizontal: wp(8),
              paddingVertical: ms(8),
            }}>
            {dataTab.map((e, i) => (
              <TouchableOpacity
                onPress={() => setActive(i)}
                style={{
                  backgroundColor: active === i ? '#fff' : '#EDEDED',
                  padding: ms(10),
                  height: hp(5),
                  flex: ms(1),
                  alignItems: 'center',
                }}>
                <Text style={{color: '#0F5996'}}>{e.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View
            style={{
              padding: ms(20),
              height: hp(100),
            }}>
            {active === 0 ? <OneWay /> : <RoundTrip />}
          </View>
        </View>
      </View>
    </>
  );
}

const OneWay = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: ms(5),
        paddingHorizontal: ms(12),
      }}>
      {/* select from place */}
      <Text style={{color: '#092C4C', marginBottom: ms(12), marginTop: ms(20)}}>
        From
      </Text>
      <View
        style={{
          paddingHorizontal: ms(12),
          borderWidth: ms(1),
          borderColor: '#D0D0D0',
          borderRadius: ms(5),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={{width: ms(24)}} source={Berangkat} />
        <SearchableDropdown
          placeholder="Search place"
          placeholderTextColor="#ABB3BB"
        />
      </View>
      {/* end of from place */}

      {/* select destination */}

      {/* switch place */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{color: '#092C4C', marginBottom: ms(12), marginTop: ms(20)}}>
          To
        </Text>
        <Image
          style={{
            height: ms(50),
            resizeMode: 'contain',
          }}
          source={Tukar}
        />
      </View>
      {/* end of switch place */}

      <View
        style={{
          paddingHorizontal: ms(12),
          borderWidth: ms(1),
          borderColor: '#D0D0D0',
          borderRadius: ms(5),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={{width: ms(24)}} source={Pulang} />
        <SearchableDropdown
          placeholder="Search place"
          placeholderTextColor="#ABB3BB"
        />
      </View>
      {/* end of destination */}

      {/* select departure date */}
      <Text style={{color: '#092C4C', marginBottom: ms(12), marginTop: ms(20)}}>
        Departure Date
      </Text>
      <View
        style={{
          paddingHorizontal: ms(12),
          borderWidth: ms(1),
          borderColor: '#D0D0D0',
          borderRadius: ms(5),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={{width: ms(24)}} source={kalender} />
        <SearchableDropdown
          placeholder="Select date"
          placeholderTextColor="#ABB3BB"
        />
      </View>
      {/* end of select departure date */}

      {/* select passenger */}
      <Text style={{color: '#092C4C', marginBottom: ms(12), marginTop: ms(20)}}>
        Passenger
      </Text>
      <View
        style={{
          paddingHorizontal: ms(12),
          borderWidth: ms(1),
          borderColor: '#D0D0D0',
          borderRadius: ms(5),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={{width: 24}} source={Penumpang} />
        <SearchableDropdown
          placeholder="Search passenger"
          placeholderTextColor="#ABB3BB"
        />
      </View>
      {/* end of select passenger */}

      {/* button search */}
      <TouchableOpacity
        style={{
          backgroundColor: '#0F5996',
          alignItems: 'center',
          borderRadius: ms(5),
          padding: ms(12),
          marginTop: ms(24),
          marginBottom: ms(24),
        }}>
        <Text>Search</Text>
      </TouchableOpacity>
      {/* end button search */}
    </View>
  );
};

const RoundTrip = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: ms(5),
        paddingHorizontal: ms(12),
      }}>
      {/* select from place */}
      <Text style={{color: '#092C4C', marginBottom: ms(12), marginTop: ms(20)}}>
        From
      </Text>
      <View
        style={{
          paddingHorizontal: ms(12),
          borderWidth: ms(1),
          borderColor: '#D0D0D0',
          borderRadius: ms(5),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={{width: ms(24)}} source={Berangkat} />
        <SearchableDropdown
          placeholder="Search place"
          placeholderTextColor="#ABB3BB"
        />
      </View>
      {/* end of from place */}

      {/* select destination */}

      {/* switch place */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{color: '#092C4C', marginBottom: ms(12), marginTop: ms(20)}}>
          To
        </Text>
        <Image
          style={{
            height: ms(50),
            resizeMode: 'contain',
          }}
          source={Tukar}
        />
      </View>
      {/* end of switch place */}

      <View
        style={{
          paddingHorizontal: ms(12),
          borderWidth: ms(1),
          borderColor: '#D0D0D0',
          borderRadius: ms(5),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={{width: ms(24)}} source={Pulang} />
        <SearchableDropdown
          placeholder="Search place"
          placeholderTextColor="#ABB3BB"
        />
      </View>
      {/* end of destination */}

      {/* select departure date */}
      <Text style={{color: '#092C4C', marginBottom: ms(12), marginTop: ms(20)}}>
        Departure Date
      </Text>
      <View
        style={{
          paddingHorizontal: ms(12),
          borderWidth: ms(1),
          borderColor: '#D0D0D0',
          borderRadius: ms(5),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={{width: ms(24)}} source={kalender} />
        <SearchableDropdown
          placeholder="Select date"
          placeholderTextColor="#ABB3BB"
        />
      </View>
      {/* end of select departure date */}

      {/* select return date */}
      <Text style={{color: '#092C4C', marginBottom: ms(12), marginTop: ms(20)}}>
        Return Date
      </Text>
      <View
        style={{
          paddingHorizontal: ms(12),
          borderWidth: ms(1),
          borderColor: '#D0D0D0',
          borderRadius: ms(5),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={{width: ms(24)}} source={kalender} />
        <SearchableDropdown
          placeholder="Select date"
          placeholderTextColor="#ABB3BB"
        />
      </View>
      {/* end of select return date */}

      {/* select passenger */}
      <Text style={{color: '#092C4C', marginBottom: ms(12), marginTop: ms(20)}}>
        Passenger
      </Text>
      <View
        style={{
          paddingHorizontal: ms(12),
          borderWidth: ms(1),
          borderColor: '#D0D0D0',
          borderRadius: ms(5),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image style={{width: ms(24)}} source={Penumpang} />
        <SearchableDropdown
          placeholder="Search passenger"
          placeholderTextColor="#ABB3BB"
        />
      </View>
      {/* end of select passenger */}

      {/* button search */}
      <TouchableOpacity
        style={{
          backgroundColor: '#0F5996',
          alignItems: 'center',
          borderRadius: ms(5),
          padding: ms(12),
          marginTop: ms(24),
          marginBottom: ms(24),
        }}>
        <Text>Search</Text>
      </TouchableOpacity>
      {/* end button search */}
    </View>
  );
};
