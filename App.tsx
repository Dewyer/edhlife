import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';
import { Provider } from "react-redux";
import store from "./reducers/store";

import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

var screens = {
  Main: MainScreen,
};
var AppNavigator = createAppContainer(createStackNavigator(screens, {
  initialRouteName: "Main",
  defaultNavigationOptions: { header: null }
}));


export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
