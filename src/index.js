import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

import styles from './styles';

const POSITIONS = { Top: 'top', Center: 'center', Bottom: 'bottom' };

class RnToast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false,
      msg: null,
      position: 'bottom',
      positionValue: 120,
    };
  }

  show = (msg, duration, position, positionValue) => {
    const positionVal = positionValue
      ? positionValue
      : this.state.positionValue;
    const positionFromTop = this.getPosition(position, positionVal);
    this.setState({ showToast: true, msg, position: positionFromTop });
    setTimeout(
      () => {
        this.setState({
          showToast: false,
          msg: null,
        });
      },
      duration ? duration : 3000
    );
  };

  getPosition = (position, positionValue) => {
    let positionFromTop;
    switch (position) {
      case POSITIONS.Top:
        positionFromTop = positionValue;
        break;
      case POSITIONS.Center:
        positionFromTop = windowHeight / 2;
        break;
      case POSITIONS.Bottom:
        positionFromTop = windowHeight - positionValue;
        break;
      default:
        positionFromTop = windowHeight - positionValue;
    }
    return positionFromTop;
  };

  render() {
    return this.state.showToast ? (
      <View style={[styles.toastContainer, { top: this.state.position }]}>
        <Text style={styles.toast}>{this.state.msg}</Text>
      </View>
    ) : null;
  }
}

export default RnToast;
