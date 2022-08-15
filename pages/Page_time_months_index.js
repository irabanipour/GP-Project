import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_month from "./images/descriptive_time/calendar_month.svg";
import Svg_this_month from "./images/descriptive_time/this_month.svg";
import Svg_next_month from "./images/descriptive_time/next_month.svg";
import Svg_last_month from "./images/descriptive_time/last_month.svg";
import Svg_January from "./images/celebration_item/fireworks_2.svg";
import Svg_February from "./images/descriptive_shape/heart_shape.svg";
import Svg_March from "./images/descriptive_time/calendar_month.svg";
import Svg_April from "./images/descriptive_time/calendar_month.svg";
import Svg_May from "./images/descriptive_time/calendar_month.svg";
import Svg_June from "./images/descriptive_time/calendar_month.svg";
import Svg_July from "./images/descriptive_time/calendar_month.svg";
import Svg_August from "./images/people_actions/relax_3_,_to.svg";
import Svg_September from "./images/descriptive_time/calendar_month.svg";
import Svg_October from "./images/celebration_event/Halloween.svg";
import Svg_November from "./images/celebration_event/Bonfire_Night.svg";
import Svg_December from "./images/religion_festival/Christmas.svg";
export default class Page_time_months_index extends Component {
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
      image: Svg_month,
      text: "month",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_month, "month");
      },
    },
    {
      image: Svg_this_month,
      text: "this month",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_this_month, "this month");
      },
    },
    {
      image: Svg_next_month,
      text: "next month",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_next_month, "next month");
      },
    },
    {
      image: Svg_last_month,
      text: "last month",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_last_month, "last month");
      },
    },
    {
      image: Svg_January,
      text: "January",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_January, "January");
      },
    },
    {
      image: Svg_February,
      text: "February",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_February, "February");
      },
    },
    {
      image: Svg_March,
      text: "March",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_March, "March");
      },
    },
    {
      image: Svg_April,
      text: "April",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_April, "April");
      },
    },
    {
      image: Svg_May,
      text: "May",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_May, "May");
      },
    },
    {
      image: Svg_June,
      text: "June",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_June, "June");
      },
    },
    {
      image: Svg_July,
      text: "July",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_July, "July");
      },
    },
    {
      image: Svg_August,
      text: "August",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_August, "August");
      },
    },
    {
      image: Svg_September,
      text: "September",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_September, "September");
      },
    },
    {
      image: Svg_October,
      text: "October",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_October, "October");
      },
    },
    {
      image: Svg_November,
      text: "November",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_November, "November");
      },
    },
    {
      image: Svg_December,
      text: "December",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_December, "December");
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
