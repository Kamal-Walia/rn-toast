import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class RnToast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showToast: false, msg: null };
  }

  show = (msg, duration) => {
    this.setState({ showToast: true, msg });
    setTimeout(
      () => {
        this.setState({ showToast: false, msg: null });
      },
      duration ? duration : 3000
    );
  };

  render() {
    return this.state.showToast ? (
      <View style={styles.toastContainer}>
        <Text style={styles.toast}>{this.state.msg}</Text>
      </View>
    ) : null;
  }
}

export default RnToast;
