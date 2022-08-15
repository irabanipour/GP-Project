import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_time from "./images/electrical_general/clock.svg";
import Svg_day from "./images/descriptive_time/day.svg";
import Svg_months from "./images/descriptive_time/calendar_month.svg";
import Svg_special_days from "./images/descriptive_time/calendar_month.svg";
import Svg_yesterday from "./images/descriptive_time/yesterday.svg";
import Svg_today from "./images/descriptive_time/today.svg";
import Svg_tomorrow from "./images/descriptive_time/tomorrow.svg";
import Svg_later from "./images/descriptive_time/future.svg";
import Svg_late from "./images/descriptive_time/future.svg";
import Svg_morning from "./images/descriptive_time/morning.svg";
import Svg_afternoon from "./images/descriptive_time/afternoon.svg";
import Svg_evening from "./images/descriptive_time/night.svg";
import Svg_now from "./images/descriptive_time/now.svg";
import Svg_never from "./images/electrical_general/clock.svg";
import Svg_again from "./images/again.svg";
import Svg_ready from "./images/people_descriptive/ready.svg";
import Svg_hurry from "./images/people_descriptive/ready.svg";
import Svg_before from "./images/descriptive_position/first.svg";
import Svg_after from "./images/descriptive_position/last.svg";
export default class Page_time_index extends Component {
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
      image: Svg_time,
      text: "time",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_time, "time");
      },
    },
    {
      image: Svg_day,
      text: "day",
      onPress: () => {
        this.props.navigation.navigate("Time_day");
      },
    },
    {
      image: Svg_months,
      text: "months",
      onPress: () => {
        this.props.navigation.navigate("Time_months");
      },
    },
    {
      image: Svg_special_days,
      text: "special days",
      onPress: () => {
        this.props.navigation.navigate("Time_special_days");
      },
    },
    {
      image: Svg_yesterday,
      text: "yesterday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_yesterday, "yesterday");
      },
    },
    {
      image: Svg_today,
      text: "today",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_today, "today");
      },
    },
    {
      image: Svg_tomorrow,
      text: "tomorrow",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tomorrow, "tomorrow");
      },
    },
    {
      image: Svg_later,
      text: "later",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_later, "later");
      },
    },
    {
      image: Svg_late,
      text: "late",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_late, "late");
      },
    },
    {
      image: Svg_morning,
      text: "morning",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_morning, "morning");
      },
    },
    {
      image: Svg_afternoon,
      text: "afternoon",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_afternoon, "afternoon");
      },
    },
    {
      image: Svg_evening,
      text: "evening",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_evening, "evening");
      },
    },
    {
      image: Svg_now,
      text: "now",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_now, "now");
      },
    },
    {
      image: Svg_never,
      text: "never",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_never, "never");
      },
    },
    {
      image: Svg_again,
      text: "again",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_again, "again");
      },
    },
    {
      image: Svg_ready,
      text: "ready",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ready, "ready");
      },
    },
    {
      image: Svg_hurry,
      text: "hurry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hurry, "hurry");
      },
    },
    {
      image: Svg_before,
      text: "before",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_before, "before");
      },
    },
    {
      image: Svg_after,
      text: "after",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_after, "after");
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
