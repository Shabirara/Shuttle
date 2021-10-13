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
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Fourth Item',
        bus: 'PT Sumber Bahagia',
        type: 'Executive',
        hourStart: '07.00',
        duration: '8hr 00mnt',
        hourEnd: '15.00',
        price: '200.000',
        available: '20',
        terminalStart: 'Terminal Lebak Bulus',
        terminalEnd: 'Terminal Purabaya Bungurasih'
    }
];

const checklist = ['Lowest price', 'Earliest departure time', 'Earliest arrival time', 'Shortest duration'];

const [filterDeparture, setFilterDeparture] = useState([
    { title: '00:00 - 16:00', active: false },
    { title: '06:00 - 12:00', active: false },
    { title: '12:00 - 18:00', active: false },
    { title: '18:00 - 00:00', active: false }
])
const [filterArrival, setFilterArrival] = useState([
    { title: '00:00 - 16:00', active: false },
    { title: '06:00 - 12:00', active: false },
    { title: '12:00 - 18:00', active: false },
    { title: '18:00 - 00:00', active: false }
])
const [busVendor, setBusVendor] = useState([
    { title: 'KYM Trans', active: false },
    { title: 'PT Sumber Bahagia', active: false },
    { title: 'DAMRI', active: false },
    { title: 'Harapan Jaya', active: false },
    { title: 'KYM Trans', active: false },
    { title: 'PT Sumber Bahagia', active: false },
    { title: 'Harapan Jaya', active: false }
])

import React from 'react'
import { View, Text } from 'react-native'

export const HomeReducer = (state = {DATA, checklist, filterDeparture, filterArrival, busVendor}, action) => {
    switch (action.type) {
        case "SET_ACTIVE_TO_HOME_REDUCER":
            return {
                ...state,
                active: action.payload,
            };
        default:
            return state;
    }
};
