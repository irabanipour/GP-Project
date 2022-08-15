import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_are from "./images/are.svg";
import Svg_buy from "./images/money/money.svg";
import Svg_can from "./images/food_meals/tin_can.svg";
import Svg_count from "./images/money/counters.svg";
import Svg_find from "./images/people_feelings/face_neutral_3.svg";
import Svg_hear from "./images/healthcare_body/ear.svg";
import Svg_hold from "./images/healthcare_body/fist.svg";
import Svg_let from "./images/let.svg";
import Svg_live from "./images/building_residential/house.svg";
import Svg_ride from "./images/sport/ride_horse_,_to.svg";
import Svg_say from "./images/people_feelings/face_neutral_3.svg";
import Svg_share from "./images/descriptive_state/spotty.svg";
import Svg_walk from "./images/animal_activity/walk_dog_,_to.svg";
import Svg_was from "./images/before.svg";
import Svg_wash from "./images/healthcare_grooming/wash_face_,_to.svg";
import Svg_write from "./images/work_stationery/paper.svg";
import Svg_break from "./images/descriptive_state/break_2.svg";
import Svg_ask from "./images/people_feelings/face_neutral_3.svg";
import Svg_Back_top_action_words from "./images/tools_actions/work_,_to.svg";
export default class Page_action_words_more_more_index extends Component {
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
      image: Svg_are,
      text: "are",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_are, "are");
      },
    },
    {
      image: Svg_buy,
      text: "buy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_buy, "buy");
      },
    },
    {
      image: Svg_can,
      text: "can",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_can, "can");
      },
    },
    {
      image: Svg_count,
      text: "count",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_count, "count");
      },
    },
    {
      image: Svg_find,
      text: "find",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_find, "find");
      },
    },
    {
      image: Svg_hear,
      text: "hear",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hear, "hear");
      },
    },
    {
      image: Svg_hold,
      text: "hold",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hold, "hold");
      },
    },
    {
      image: Svg_let,
      text: "let",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_let, "let");
      },
    },
    {
      image: Svg_live,
      text: "live",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_live, "live");
      },
    },
    {
      image: Svg_ride,
      text: "ride",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ride, "ride");
      },
    },
    {
      image: Svg_say,
      text: "say",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_say, "say");
      },
    },
    {
      image: Svg_share,
      text: "share",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_share, "share");
      },
    },
    {
      image: Svg_walk,
      text: "walk",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_walk, "walk");
      },
    },
    {
      image: Svg_was,
      text: "was",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_was, "was");
      },
    },
    {
      image: Svg_wash,
      text: "wash",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wash, "wash");
      },
    },
    {
      image: Svg_write,
      text: "write",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_write, "write");
      },
    },
    {
      image: Svg_break,
      text: "break",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_break, "break");
      },
    },
    {
      image: Svg_ask,
      text: "ask",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ask, "ask");
      },
    },
    {
      image: Svg_Back_top_action_words,
      text: "Back top action words",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Back_top_action_words,
          "Back top action words"
        );
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
