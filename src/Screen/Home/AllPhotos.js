import { isMap } from 'immer/dist/internal';
import React, { useState } from 'react'
import { View, Text, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Gallery from 'react-native-image-gallery';
import { ms } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image'

const data = [
    {
        imgUrl: "https://www.bigbluebus.com/uploadedImages/Content/Newsroom/Press_Kit/IMG_6759.jpg?n=1794"
    },
    {
        imgUrl: "https://i.pinimg.com/originals/2c/be/eb/2cbeebbd5b7a55e14b744a737a1d6f33.jpg"
    },
    {
        imgUrl: "https://smmirror-enki-v5.s3.amazonaws.com/wp-content/uploads/2019/08/Courtesy-of-Big-Blue-Bus-_Battery-Electric-Bus-3-1.jpg"
    },
    {
        imgUrl: "https://www.sustainable-bus.com/wp-content/uploads/2021/01/Bluebus-12-meters-RATP-and-IDF-Mobilit%C3%A9s.jpg"
    },
    {
        imgUrl: "https://media.suara.com/pictures/653x366/2019/11/14/63532-bus.jpg"
    }
]

const SLIDER_WIDTH = Dimensions.get('window').width


export default function AllPhotos() {
    const [indexGambar, setIndexGambar] = useState(0)
    const CarouselCardItem = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} onPress={() => setIndexGambar(index)} style={index === indexGambar ? { borderColor: 'white', borderWidth: ms(1) } : null}>
                <Image
                    source={{ uri: item.imgUrl }}
                    style={styles.image}
                />
            </TouchableOpacity >
        )
    }
    return (
        <View style={{ backgroundColor: '#232323', flex: 1, justifyContent: 'center' }}>
            <View>
                <FastImage source={{ uri: data[indexGambar].imgUrl }} resizeMode='contain' style={{ height: '100%' }} />
            </View>


            <View style={{ position: 'absolute', bottom: ms(30) }}>
                <Carousel
                    data={data}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ms(100)}
                    useScrollView={true}
                    inactiveSlideScale={1}
                />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: ms(100),
        height: ms(100),
    },
})

