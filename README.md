# rn-toast

Simple JS based RN toast that will work on both iOS and android

## Installation

```sh
npm i rn-js-toast
```

## Usage

```js
import RnToast from "rn-toast";

// ...
let toastRef;

  const showToast = (msg) => {
    toastRef.show(msg, 1000);
  };
  
 <TouchableOpacity onPress={() => showToast('Hello World')}>
        <Text>Show Toast</Text>
        <RnToast ref={(toast) => (toastRef = toast)} />
      </TouchableOpacity>
<RnToast ref={(toast) => (toastRef = toast)} />
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
