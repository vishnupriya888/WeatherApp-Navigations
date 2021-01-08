import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { APIKEY } from "../assets/ApiKey";
import "react-native-vector-icons";
import AppHeader from "../components/AppHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import weatherInfoJSON from "../assets/weatherInfoJSON";

export default class WeatherScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      temp: 0,
      feelsLike: 0,
      tempMin: 0,
      tempMax: 0,
      pressure: 0,
      humidity: 0,
      description: "",
      iconName: "",
    };
  }
  componentDidMount() {
    this.getWeatherInfo();
  }

  getWeatherInfo = async () => {
    var cityName = this.props.navigation.getParam("cityName");
    var url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&units=metric&appid=" +
      APIKEY;

    const response = await fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.weather[0].description);

        this.setState({
          temp: responseJson.main.temp,
          feelsLike: responseJson.main.feels_like,
          tempMin: responseJson.main.temp_min,
          tempMax: responseJson.main.temp_max,
          humidity: responseJson.main.humidity,
          description: responseJson.weather[0].description,
        });
        this.setState({
          iconName: weatherInfoJSON[this.state.description].icon,
          color: weatherInfoJSON[this.state.description].color,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <View style={styles.display}>
          <MaterialCommunityIcons
            name={this.state.iconName}
            size={84}
            color={this.state.color}
            style={{ alignSelf: "center" }}
          />
          <Text style={styles.text}>Temp : {this.state.temp}&deg;C</Text>
          <Text style={styles.text}>
            Feels Like : {this.state.feelsLike}&deg;C
          </Text>
          <Text style={styles.text}>
            Minimum Temp : {this.state.tempMin}&deg;C
          </Text>
          <Text style={styles.text}>
            Maximum Temp : {this.state.tempMax}&deg;C
          </Text>
          <Text style={styles.text}>Humidity: {this.state.humidity}%</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  display: {
    borderWidth: 2,
    margin: 40,
    borderColor: "maroon",
    marginTop: "50%",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "maroon",
  },
});
