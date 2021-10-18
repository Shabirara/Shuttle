import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: ms(16),
    paddingBottom: ms(20),
  },

  image: {
    paddingBottom: ms(65),
    height: ms(100),
    width: ms(100),
  },
  avatarContainer: {
    // height: ms(100),
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: ms(10),
    paddingBottom: ms(10),
  },
  namaUser: {
    alignItems: 'center',
  },
  telpDanUserContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: ms(10),
  },
  // titikAsingContainer: {
  //   // marginTop: ms(10),
  // },
  titikAsing: {
    fontSize: ms(40),
  },
  inputContainer: {
    paddingBottom: ms(4),
  },

  borderLess: {
    borderWidth: 0,
    borderColor: 'transparent',
    marginBottom: ms(-24),
  },
  signOutContainer: {
    alignItems: 'center',
    paddingBottom: ms(60),
    paddingTop: ms(40),
  },
  buttonUp: {
    backgroundColor: '#0F5996',
    paddingTop: ms(4),
    paddingVertical: ms(14),
    paddingHorizontal: ms(10),
    borderRadius: ms(6),
    alignItems: 'center',
    paddingBottom: ms(6),
    width: ms(330),
    height: ms(44),
    justifyContent: 'center',
    color: 'white',
  },

  signUpText: {
    color: 'white',
  },
  inputan: {
    paddingHorizontal: 20,
    backgroundColor: '#F6F6F6',
    marginBottom: 16,
    borderRadius: 8,
  },
  editProfile: {
    backgroundColor: 'white',
    paddingTop: ms(4),
    paddingVertical: ms(14),
    paddingHorizontal: ms(10),
    borderRadius: ms(6),
    alignItems: 'flex-start',
    paddingBottom: ms(6),
    width: ms(330),
    height: ms(52),
    justifyContent: 'center',
    color: 'blue',
  },
  profileText: {
    color: 'black',
  },
});
