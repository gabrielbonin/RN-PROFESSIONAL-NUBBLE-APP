import Reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: typeof console.log;
  }
}

let reactotron: typeof Reactotron | null = null;

if (__DEV__) {
  reactotron = Reactotron.configure({
    name: 'Nubble-App',
  }).useReactNative({
    networking: {
      ignoreUrls: /\/(logs|symbolicate)$/,
    },
  });

  reactotron?.connect();

  console.tron = (...args: unknown[]) => {
    reactotron?.logImportant?.(...args);
  };

  console.log = console.tron;

  reactotron?.clear?.();
  console.log('Reactotron Configured');
} else {
  console.tron = (...args: unknown[]) => {
    console.log(...args);
  };
}

export default reactotron as Required<typeof Reactotron>;
