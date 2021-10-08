import React, { useState } from 'react'
import { View, Text, Button, Image } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import Gallery from 'react-native-image-gallery';

export default function Home(props) {
    const onSearch = () => props.navigation.navigate('Home Stack')
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <Gallery
            style={{ flex: 1, backgroundColor: 'black' }}
            images={[
                { source: { uri: 'http://i.imgur.com/XP2BE7q.jpg' } },
                { source: { uri: 'http://i.imgur.com/5nltiUd.jpg' } },
                { source: { uri: 'http://i.imgur.com/6vOahbP.jpg' } },
                { source: { uri: 'http://i.imgur.com/kj5VXtG.jpg' } }
            ]}
        />
    )
}

