import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: ms(20)
  },
  textNormal: {
    fontSize: ms(12),
    fontFamily: 'Montserrat-Regular',
    color: '#092C4C'
  },
  textNama: {
    fontSize: ms(20),
    fontFamily: 'Montserrat-SemiBold',
    color: '#092C4C'
  },
  textEdit: {
    fontSize: ms(12),
    fontFamily: 'Montserrat-Medium',
    color: '#092C4C'
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
    paddingBottom: ms(10)
  },
  namaUser: {
    alignItems: 'center',
  },
  telpDanUserContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: ms(20)
  },
  titikAsing: {
    fontSize: ms(40),
    color: '#092C4C'
  },
  inputContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: ms(15),
    justifyContent: 'space-evenly'
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
    paddingVertical: ms(14),
    paddingHorizontal: ms(10),
    borderRadius: ms(6),
    alignItems: 'flex-start',
    paddingBottom: ms(6),
    width: ms(300),
    height: ms(52),
    justifyContent: 'center',
    color: 'blue',
  },
  profileText: {
    color: 'black',
  },
});
