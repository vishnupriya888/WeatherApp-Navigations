import * as React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import AppHeader from "../components/AppHeader";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      cityName: "",
    };
  }
  goToWeatherScreen = () => {
    if (this.state.cityName != "") {
      this.props.navigation.navigate("WeatherScreen", {
        cityName: this.state.cityName,
      });
    } else {
      alert("City Name cant be blank");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.input}>
          <TextInput
            placeholder="Enter city name"
            onChangeText={(text) => this.setState({ cityName: text })}
            value={this.state.cityName}
            style={styles.textInput}
          />
        </View>
        <View style={styles.container2}>
          <TouchableOpacity onPress={this.goToWeatherScreen}>
            <Text style={styles.text}>Show Weather</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: "maroon",
    margin: 25,
    borderRadius: 10,
  },
  textInput: {
    height: 40,
    textAlign: "center",
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    textAlign: "center",
    fontSize: 20,
    color: "maroon",
  },
});
