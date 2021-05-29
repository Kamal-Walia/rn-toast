import { StyleSheet, Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

const position = windowHeight - 450;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toastContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignSelf: 'center',
    top: position,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 13,
    elevation: 10,
    zIndex: 10,
  },
  toast: {
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;
