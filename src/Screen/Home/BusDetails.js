import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  ScrollView,
  FlatList,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import {Card, Divider, Image} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const REVIEW = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    reviewer: 'Irham Raziqony',
    review: '5/5 (Very Good)',
    comment:
      '"Bisnya nyaman dan bersih, tempat duduknya enak perjalanan jauh serasa dekat karna tidak terasa capek"',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    reviewer: 'Ozie Irham',
    review: '4/5 (Good)',
    comment:
      'Bisnya nyaman dan bersih, tempat duduknya enak perjalanan jauh serasa dekat karna tidak terasa capek',
  },
];

export default function BusDetails(props) {
  const onAllPhotos = () => {
    props.navigation.navigate('All Photos');
  };

  const onSelectSeat = () => {
    props.navigation.navigate('Select Seat');
  };

  const Item = ({reviewer, review, comment}) => (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewHeader}>
        <Text style={styles.fontReviewer}>{reviewer}</Text>
        <Text style={styles.biruMedium}>{review}</Text>
      </View>

      <Text style={styles.comment}>{comment}</Text>
    </View>
  );

  const renderReview = ({item}) => (
    <Item
      reviewer={item.reviewer}
      review={item.review}
      comment={item.comment}
    />
  );

  return (
    <ScrollView>
      <View style={styles.ijo}>
        <View style={styles.columnEven}>
          <Text style={styles.fontBiru}>PT Sinar Jaya Group</Text>
          <Text style={styles.fontKecil}>Executive</Text>
        </View>
        <View style={[styles.columnEven, {alignItems: 'flex-end'}]}>
          <View style={styles.rowBawah}>
            <Text style={styles.fontBiru}>IDR 300.000</Text>
            <Text style={styles.fontKecil}>/seat</Text>
          </View>
          <Text style={styles.fontKecil}>Available seat: 20</Text>
        </View>
      </View>
      <View>
        <Image
          source={require('../../Assets/Images/fotoBus.png')}
          PlaceholderContent={<ActivityIndicator />}
          style={styles.thumbnail}></Image>
        <TouchableOpacity style={styles.allPhotos} onPress={onAllPhotos}>
          <Text style={styles.biruKecil}>See All Photos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.fontBesar}>Schedule</Text>
      </View>

      <View style={styles.contentContainer}>
        <View
          style={{
            alignItems: 'center',
            marginRight: ms(10),
            justifyContent: 'space-between',
            height: ms(130),
          }}>
          <View style={styles.columnCenter}>
            <Text style={styles.fontKecil}>07.00</Text>
            <Text style={styles.fontMini}>Sat, 21 Aug</Text>
          </View>

          <Text style={styles.fontMini}>8hr 00mnt</Text>
          <View style={styles.columnCenter}>
            <Text style={styles.fontKecil}>15.00</Text>
            <Text style={styles.fontMini}>Sat, 21 Aug</Text>
          </View>
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="circle-outline"
                color="#0F5996"
                size={ms(20)}
                style={{marginVertical: ms(-5)}}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{marginBottom: ms(-3), width: ms(1)}}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{width: ms(1)}}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{marginVertical: ms(-4), width: ms(1)}}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{width: ms(1)}}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{marginVertical: ms(-4), width: ms(1)}}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{width: ms(1)}}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{marginVertical: ms(-4), width: ms(1)}}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{width: ms(1)}}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{marginVertical: ms(-4), width: ms(1)}}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{width: ms(1)}}
              />
              <FontAwesome
                name="ellipsis-v"
                color="#0F5996"
                style={{marginVertical: ms(-4), width: ms(1)}}
              />
              <MaterialCommunityIcons
                name="record-circle-outline"
                color="#0F5996"
                size={ms(20)}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: ms(10),
                justifyContent: 'space-between',
                height: ms(130),
              }}>
              <View style={styles.contentBetween}>
                <Text style={styles.fontKecil}>Terminal Lebak Bulus</Text>
                <Text style={styles.abuKecil}>
                  Jl. Lebak Bulus Jaya Abadi RT 06 RW 07 Jakarta Selatan
                </Text>
              </View>
              <View style={styles.contentBetween}>
                <Text style={styles.fontKecil}>
                  Terminal Purabaya Bungurasih
                </Text>
                <Text style={styles.abuKecil}>
                  Jl. Bungurasih Timur, Waru, Sidoarjo
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.fontBesar}>Facilities</Text>
      </View>

      <View style={styles.contentContainer}>
        <View style={[styles.columnCenter, {width: '20%'}]}>
          <Image
            source={require('../../Assets/Images/iconoir_air-conditioner.png')}
            PlaceholderContent={<ActivityIndicator />}
            style={styles.icon}></Image>
          <Text style={[styles.fontKecil, {textAlign: 'center'}]}>
            Air Conditioner
          </Text>
        </View>
        <View style={[styles.columnCenter, {width: '20%'}]}>
          <Image
            source={require('../../Assets/Images/map_toilet.png')}
            PlaceholderContent={<ActivityIndicator />}
            style={styles.icon}></Image>
          <Text style={[styles.fontKecil, {textAlign: 'center'}]}>Toilet</Text>
        </View>
        <View style={[styles.columnCenter, {width: '20%'}]}>
          <Image
            source={require('../../Assets/Images/fluent_food-24-filled.png')}
            PlaceholderContent={<ActivityIndicator />}
            style={styles.icon}></Image>
          <Text style={[styles.fontKecil, {textAlign: 'center'}]}>
            Free Meal
          </Text>
        </View>
        <View style={[styles.columnCenter, {width: '20%'}]}>
          <Image
            source={require('../../Assets/Images/iconoir_ev-charge.png')}
            PlaceholderContent={<ActivityIndicator />}
            style={styles.icon}></Image>
          <Text style={[styles.fontKecil, {textAlign: 'center'}]}>Charger</Text>
        </View>
        <View style={[styles.columnCenter, {width: '20%'}]}>
          <Image
            source={require('../../Assets/Images/icon-park-outline_baby-car-seat.png')}
            PlaceholderContent={<ActivityIndicator />}
            style={styles.icon}></Image>
          <Text style={[styles.fontKecil, {textAlign: 'center'}]}>
            Comfortable Seat
          </Text>
        </View>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.fontBesar}>Passenger Rating & Review</Text>
        <View
          style={[
            styles.rowBawah,
            {width: ms(58), justifyContent: 'space-between'},
          ]}>
          <FontAwesome name="star" color="#0F5996" size={ms(17)} />
          <View style={styles.rowBawah}>
            <Text style={styles.fontBiru}>4,7</Text>
            <Text style={styles.biruKecil}>/5</Text>
          </View>
        </View>
      </View>

      <View style={styles.passengerReview}>
        <FlatList
          data={REVIEW}
          renderItem={renderReview}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={Divider}
        />
      </View>

      <TouchableOpacity style={styles.allReviews}>
        <Text style={styles.fontBiru}>SEE ALL REVIEW</Text>
      </TouchableOpacity>

      <Card containerStyle={styles.card}>
        <TouchableOpacity style={styles.selectSeat} onPress={onSelectSeat}>
          <Text style={styles.fontSeat}>Select Seat</Text>
        </TouchableOpacity>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ijo: {
    backgroundColor: '#CBFFCA',
    width: '100%',
    paddingVertical: ms(10),
    paddingHorizontal: ms(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: ms(80),
  },
  fontBiru: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(14),
    color: '#0F5996',
  },
  rowBawah: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  fontKecil: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(10),
    color: '#092C4C',
  },
  columnEven: {
    justifyContent: 'space-evenly',
  },
  allPhotos: {
    backgroundColor: 'white',
    borderRadius: ms(20),
    paddingVertical: ms(5),
    paddingHorizontal: ms(15),
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: ms(20),
    right: ms(20),
    zIndex: 1,
  },
  biruKecil: {
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(10),
    color: '#0F5996',
  },
  thumbnail: {
    width: '100%',
    height: undefined,
    aspectRatio: 375 / 211,
  },
  headerContainer: {
    backgroundColor: 'white',
    paddingHorizontal: ms(20),
    paddingVertical: ms(16),
    marginTop: ms(20),
    marginBottom: ms(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontBesar: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(14),
    color: '#092C4C',
  },
  contentContainer: {
    backgroundColor: 'white',
    paddingHorizontal: ms(10),
    paddingVertical: ms(20),
    flexDirection: 'row',
  },
  fontMini: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(8),
    color: '#536C82',
    paddingTop: ms(5),
  },
  columnCenter: {
    alignItems: 'center',
  },
  abuKecil: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(10),
    color: '#ABB3BB',
    paddingTop: ms(5),
  },
  contentBetween: {
    alignItems: 'flex-start',
    width: ms(250),
    height: ms(30),
    justifyContent: 'space-between',
  },
  icon: {
    width: ms(24),
    height: ms(24),
    margin: ms(10),
  },
  fontReviewer: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(12),
    color: '#092C4C',
    marginRight: ms(15),
  },
  biruMedium: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(12),
    color: '#0F5996',
  },
  comment: {
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(12),
    color: '#092C4C',
    paddingBottom: ms(20),
  },
  reviewHeader: {
    flexDirection: 'row',
    paddingVertical: ms(15),
  },
  reviewContainer: {
    paddingHorizontal: ms(10),
  },
  passengerReview: {
    backgroundColor: 'white',
    paddingHorizontal: ms(10),
  },
  allReviews: {
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: ms(10),
    paddingVertical: ms(20),
    flexDirection: 'row',
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    marginHorizontal: 0,
    marginTop: ms(20),
    alignItems: 'center',
  },
  selectSeat: {
    backgroundColor: '#0F5996',
    borderRadius: ms(10),
    paddingVertical: ms(15),
    width: ms(310),
    alignItems: 'center',
  },
  fontSeat: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: ms(14),
    color: 'white',
  },
});
