import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toastContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignSelf: 'center',
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
