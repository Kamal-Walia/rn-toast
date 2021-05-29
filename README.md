# rn-toast

Simple JS based RN toast that will work on both iOS and android

## Installation

```sh
npm install rn-toast
```

## Usage

```js
import RnToast from "rn-js-toast";

// ...
let toastRef;

  const showToast = (msg, position) => {
    /** 
    params: msg, duration, position: top/center/bottom, positionValue: number
    */
    toastRef.show(msg, 1000, position);
  };
  
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
