import { isMap } from 'immer/dist/internal';
import React, { useState } from 'react'
import { View, Text, SafeAreaView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Gallery from 'react-native-image-gallery';
import { ms } from 'react-native-size-matters';
import Carousel from 'react-native-snap-carousel';


const data = [
    {
        imgUrl: "https://picsum.photos/id/11/200/300"
    },
    {
        imgUrl: "https://picsum.photos/id/10/200/300"
    },
    {
        imgUrl: "https://picsum.photos/id/12/200/300"
    },
    {
        imgUrl: "https://picsum.photos/id/11/200/300"
    },
    {
        imgUrl: "https://picsum.photos/id/10/200/300"
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
            <View style={{ width: '100%' }}>
                <Image source={{ uri: data[indexGambar].imgUrl }} style={{
                    width: '100%', height: undefined, aspectRatio: 16 / 9
                }} />
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

