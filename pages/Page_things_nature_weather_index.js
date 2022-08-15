import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_weather from "./images/descriptive_time/sun.svg";
import Svg_rain from "./images/environment_weather/rain.svg";
import Svg_sun from "./images/descriptive_time/sun.svg";
import Svg_snow from "./images/environment_weather/snow.svg";
import Svg_It_is from "./images/descriptive_position/bottom.svg";
import Svg_wind from "./images/descriptive_time/autumn.svg";
import Svg_cloudy from "./images/environment_weather/cloudy.svg";
import Svg_foggy from "./images/foggy.svg";
import Svg_freezing from "./images/environment_weather/snow.svg";
import Svg_icey from "./images/descriptive_time/winter.svg";
import Svg_stormy from "./images/environment_weather/thunder_storm.svg";
import Svg_hot from "./images/people_descriptive/hot_person.svg";
import Svg_cold from "./images/descriptive_time/winter.svg";
export default class Page_things_nature_weather_index extends Component {
  constructor(props) {
    super(props);
  }

  styles = StyleSheet.create({
    container: {},
  });

  buttonData = [
    {
      image: Svg_Yes,
      text: "Yes",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Yes, "Yes");
      },
    },

    {
      image: Svg_No,
      text: "No",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_No, "No");
      },
    },
    {
      image: Svg_Top_Page,
      text: "Top Page",
      onPress: () => {
        this.props.navigation.navigate("Home");
      },
    },
    {
      image: Svg_weather,
      text: "weather",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_weather, "weather");
      },
    },
    {
      image: Svg_rain,
      text: "rain",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_rain, "rain");
      },
    },
    {
      image: Svg_sun,
      text: "sun",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sun, "sun");
      },
    },
    {
      image: Svg_snow,
      text: "snow",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_snow, "snow");
      },
    },
    {
      image: Svg_It_is,
      text: "It is",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_It_is, "It is");
      },
    },
    {
      image: Svg_wind,
      text: "wind",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wind, "wind");
      },
    },
    {
      image: Svg_cloudy,
      text: "cloudy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cloudy, "cloudy");
      },
    },
    {
      image: Svg_foggy,
      text: "foggy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_foggy, "foggy");
      },
    },
    {
      image: Svg_freezing,
      text: "freezing",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_freezing, "freezing");
      },
    },
    {
      image: Svg_icey,
      text: "icey",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_icey, "icey");
      },
    },
    {
      image: Svg_stormy,
      text: "stormy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_stormy, "stormy");
      },
    },
    {
      image: Svg_hot,
      text: "hot",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hot, "hot");
      },
    },
    {
      image: Svg_cold,
      text: "cold",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cold, "cold");
      },
    },
  ];

  render() {
    return (
      <FlatList
        contentContainerStyle={this.styles.container}
        data={this.buttonData}
        keyExtractor={(item) => item.text}
        renderItem={CustomButtonRenderItem}
        numColumns={3}
      />
    );
  }
}

const CustomButtonRenderItem = ({ item }) => (
  <CustomButton
    image={item.image}
    buttonText={item.text}
    onPress={item.onPress}
  ></CustomButton>
);
