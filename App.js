import React, { PureComponent } from 'react';
import {
  View
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/setup/routes'
import { NativeBaseProvider, Text, Box,Root } from 'native-base';
import { store } from './src/setup/store';
import { Provider } from 'react-redux';

export default class App extends PureComponent {
  render() {
    return (
      <NativeBaseProvider>
      <Provider store={store} key="provider">
              <AppRouter/>
              </Provider>
              </NativeBaseProvider>
    );
  }

}