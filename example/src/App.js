import * as React from 'react';

import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import RnToast from 'rn-js-toast';

export default function App() {
  let toastRef;
  const showToast = (msg, position) => {
    toastRef.show(msg, 1000, position);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => showToast('Hello World', 'top')}
      >
        <Text>Show Toast Position Top</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => showToast('Hello World', 'center')}
      >
        <Text>Show Toast Position center</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => showToast('Hello World', 'bottom')}
      >
        <Text>Show Toast Position Bottom</Text>
      </TouchableOpacity>
      <RnToast ref={(toast) => (toastRef = toast)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
});
