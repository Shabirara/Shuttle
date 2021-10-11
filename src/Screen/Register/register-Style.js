import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  imgContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pencil: {
    backgroundColor: 'blue',
    width: 14,
    position: 'absolute',
  },
  image: {
    paddingBottom: 65,
    height: 120,
    width: 120,
  },
  input: {
    paddingTop: 8,
    color: 'white',
  },
  signUpContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  buttonUp: {
    backgroundColor: '#2154BC',
    paddingTop: 4,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 30,
    alignItems: 'center',
    paddingBottom: 6,
    width: 120,
    height: 44,
    justifyContent: 'center',
    color: 'white',
  },
  signUpText: {
    color: 'white',
  },
  already: {
    color: 'white',
    alignSelf: 'center',
  },
});
