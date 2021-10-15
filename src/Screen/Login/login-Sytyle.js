import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

export default StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    paddingTop: ms(10),
    paddingBottom: ms(6),
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: ms(16),
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: ms(16),
    borderRadius: ms(12),
    paddingBottom: ms(20),
  },
  intoContainer: {
    paddingVertical: ms(17),
    alignItems: 'center',
  },
  inToSHUTTLE: {
    height: ms(100),
    width: ms(200),
  },
  borderLess: {
    borderWidth: 0,
    borderColor: 'transparent',
    marginBottom: ms(-24),
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
  rememberText: {
    paddingBottom: ms(4),
  },
  forgotText: {
    color: 'red',
    paddingBottom: ms(4),
  },
  Image: {
    width: ms(200),
    height: ms(50),
    alignItems: 'center',
  },

  passwordContainer: {
    paddingBottom: ms(20),
    alignItems: 'flex-end',
    paddingRight: ms(12),
  },
  password: {
    color: 'white',
  },
  button: {
    backgroundColor: '#0F5996',
    paddingTop: ms(4),
    paddingVertical: ms(14),
    paddingHorizontal: ms(10),
    borderRadius: ms(10),
    alignItems: 'center',
    paddingBottom: ms(6),
    width: ms(280),
    height: ms(48),
    justifyContent: 'center',
    color: 'white',
  },
  buttonText: {
    color: 'white',
  },
  orOptionalIcon: {
    height: ms(40),
  },
  sosmedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleContainer: {
    paddingRight: ms(8),
    // height: ms(60),
  },
  medIcon: {
    height: ms(80),
    width: ms(140),
  },
  facebookContainer: {
    paddingLeft: ms(8),
  },
  haveNoSignUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginContainer: {
    alignItems: 'center',
    paddingBottom: ms(20),
  },
  haveNoAccountText: {
    paddingRight: ms(4),
  },
  signUp: {
    color: 'blue',
    alignSelf: 'center',
    paddingTop: ms(37),
    paddingBottom: ms(36),
    paddingLeft: ms(4),
    fontWeight: 'bold',
  },
  skipText: {
    color: 'blue',
    alignSelf: 'center',
    paddingTop: ms(12),
    marginBottom: ms(20),
  },
});
