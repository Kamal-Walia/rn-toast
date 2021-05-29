import * as React from 'react';

import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import RnToast from 'rn-toast';

export default function App() {
  let toastRef;
  const showToast = (msg) => {
    toastRef.show(msg, 1000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => showToast('Hello World')}>
        <Text>Show Toast</Text>
        <RnToast ref={(toast) => (toastRef = toast)} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
