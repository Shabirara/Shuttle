import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

export default StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: ms(16),
    // paddingVertical: 120,
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: ms(16),
    borderRadius: ms(12),
    paddingBottom: ms(80),
  },
  intoContainer: {
    paddingVertical: ms(10),
    paddingHorizontal: ms(4),
    alignItems: 'center',
  },
  inToSHUTTLE: {
    height: ms(70),
    width: ms(200),
  },
  inputEmail: {
    paddingHorizontal: ms(12),
    borderWidth: ms(0.2),
    borderColor: '#777',
    marginBottom: ms(16),

    borderRadius: ms(2),
  },
  checkBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: ms(20),
  },
  rememberMeBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkStyle: {
    padding: 0,
    margin: 0,
    marginRight: ms(1),
  },
  forgotText: {
    color: 'red',
  },
  logoContainer: {
    paddingTop: ms(10),
    paddingBottom: ms(6),
    alignItems: 'center',
  },
  Image: {
    width: ms(200),
    height: ms(50),
    alignItems: 'center',
  },

  passwordContainer: {
    paddingBottom: ms(20),
    alignItems: 'flex-end',
    paddingRight: 12,
  },
  password: {
    color: 'white',
  },
  button: {
    backgroundColor: '#2154BC',
    paddingTop: ms(4),
    paddingVertical: ms(14),
    paddingHorizontal: ms(10),
    borderRadius: ms(10),
    alignItems: 'center',
    paddingBottom: ms(6),
    width: ms(280),
    height: ms(36),
    justifyContent: 'center',
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
  optionalContainer: {
    paddingTop: ms(40),
  },
  // sosmedContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   paddingBottom: ms(20),
  // },
  haveNoSignUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAccountContainer: {
    order: ms(2),
  },
  loginContainer: {
    alignItems: 'center',
    paddingBottom: ms(20),
  },
  signUp: {
    color: 'blue',
    alignSelf: 'center',
    paddingTop: ms(34),
    paddingBottom: ms(36),
    fontWeight: 'bold',
  },
  skipText: {
    color: 'blue',
    alignSelf: 'center',
    paddingTop: ms(12),
    marginBottom: ms(20),
  },
});
