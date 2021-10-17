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
  input: {
    backgroundColor: 'white',
    // paddingHorizontal: ms(12),
    borderWidth: ms(0.2),
    borderColor: 'transparent',
    marginBottom: ms(16),

    borderRadius: ms(2),
  },
  borderLess: {
    borderWidth: 0,
    borderColor: 'transparent',
    marginBottom: ms(-24),
  },
  signUpContainer: {
    alignItems: 'center',
    paddingBottom: ms(20),
    paddingTop: ms(40),
  },
  buttonUp: {
    backgroundColor: '#2154BC',
    paddingTop: ms(4),
    paddingVertical: ms(14),
    paddingHorizontal: ms(10),
    borderRadius: ms(6),
    alignItems: 'center',
    paddingBottom: ms(6),
    width: ms(320),
    height: ms(44),
    justifyContent: 'center',
    color: 'white',
  },
  signUpText: {
    color: 'white',
  },
});
