import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_day from "./images/descriptive_time/day.svg";
import Svg_week from "./images/descriptive_time/week_1.svg";
import Svg_weekend from "./images/descriptive_time/weekend.svg";
import Svg_night from "./images/descriptive_time/night.svg";
import Svg_Monday from "./images/descriptive_time/day.svg";
import Svg_Tuesday from "./images/descriptive_time/day.svg";
import Svg_Wednesday from "./images/descriptive_time/day.svg";
import Svg_Thursday from "./images/descriptive_time/day.svg";
import Svg_Friday from "./images/descriptive_time/day.svg";
import Svg_Saturday from "./images/descriptive_time/day.svg";
import Svg_Sunday from "./images/descriptive_time/day.svg";
import Svg_this_week from "./images/descriptive_time/this_week.svg";
import Svg_next_week from "./images/descriptive_time/next_week.svg";
import Svg_tonight from "./images/descriptive_time/night.svg";
export default class Page_time_day_index extends Component {
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
      image: Svg_day,
      text: "day",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_day, "day");
      },
    },
    {
      image: Svg_week,
      text: "week",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_week, "week");
      },
    },
    {
      image: Svg_weekend,
      text: "weekend",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_weekend, "weekend");
      },
    },
    {
      image: Svg_night,
      text: "night",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_night, "night");
      },
    },
    {
      image: Svg_Monday,
      text: "Monday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Monday, "Monday");
      },
    },
    {
      image: Svg_Tuesday,
      text: "Tuesday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Tuesday, "Tuesday");
      },
    },
    {
      image: Svg_Wednesday,
      text: "Wednesday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Wednesday, "Wednesday");
      },
    },
    {
      image: Svg_Thursday,
      text: "Thursday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Thursday, "Thursday");
      },
    },
    {
      image: Svg_Friday,
      text: "Friday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Friday, "Friday");
      },
    },
    {
      image: Svg_Saturday,
      text: "Saturday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Saturday, "Saturday");
      },
    },
    {
      image: Svg_Sunday,
      text: "Sunday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Sunday, "Sunday");
      },
    },
    {
      image: Svg_this_week,
      text: "this week",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_this_week, "this week");
      },
    },
    {
      image: Svg_next_week,
      text: "next week",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_next_week, "next week");
      },
    },
    {
      image: Svg_tonight,
      text: "tonight",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tonight, "tonight");
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
