import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

export default StyleSheet.create({
  mainContainer: {
    marginTop: 0,
    backgroundColor: 'white',
    padding: ms(20),
    marginHorizontal: 0,
  },
  inputEmail: {
    paddingHorizontal: ms(12),
    borderWidth: ms(0.2),
    borderColor: '#777',
    marginBottom: ms(16),
    borderRadius: ms(2),
    fontFamily: 'Montserrat-Regular',
    fontSize: ms(14)
  },
  inputContainer: {
    paddingVertical: ms(12),
    alignItems: 'center'
  },
  borderLess: {
    borderColor: 'transparent',
    marginBottom: ms(-24),
    width: ms(300)
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
    width: ms(308),
    height: ms(44),
    justifyContent: 'center',
    color: 'white',
  },

  signUpText: {
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    fontSize: ms(14)
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
});
