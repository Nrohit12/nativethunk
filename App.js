/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { LogBox } from 'react-native';
import React from 'react';
import type {Node} from 'react';
import RootNavigator from './src/navigator/root';
import {Provider} from 'react-redux'
import store from './src/redux/store'
const App: () => Node = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default App;
