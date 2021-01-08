import * as React from "react";
import { Text } from "react-native";
import HomeScreen from "./Screens/HomeScreen";
import WeatherScreen from "./Screens/WeatherScreen";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  WeatherScreen: WeatherScreen,
});

const AppContainer = createAppContainer(AppNavigator);
