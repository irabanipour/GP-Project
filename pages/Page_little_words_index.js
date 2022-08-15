import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_Position_words from "./images/descriptive_position/in.svg";
import Svg_fun from "./images/celebration_event/celebration.svg";
import Svg_away from "./images/people_actions/exit_door_,_to.svg";
import Svg_a from "./images/a.svg";
import Svg_all from "./images/descriptive_state/spotty.svg";
import Svg_this from "./images/this.svg";
import Svg_that from  "./images/that.svg";
import Svg_is from  "./images/is.svg";
import Svg_am from  "./images/am.svg";
import Svg_none from "./images/descriptive_state/spotty.svg";
import Svg_to from  "./images/to.svg";
import Svg_from from  "./images/from.svg";
import Svg_about from "./images/work_education/work_book.svg";
import Svg_be from  "./images/be.svg";
import Svg_some from "./images/descriptive_state/spotty.svg";
import Svg_with from "./images/descriptive_quantity/some.svg";
import Svg_and from  "./images/plus.svg";
import Svg_at from "./images/computer_icon/at_key.svg";
import Svg_the from  "./images/hand.svg";
export default class Page_little_words_index extends Component {
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
      image: Svg_Position_words,
      text: "Position words",
      onPress: () => {
        this.props.navigation.navigate("Little_words_position_words");
      },
    },
    {
      image: Svg_fun,
      text: "fun",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fun, "fun");
      },
    },
    {
      image: Svg_away,
      text: "away",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_away, "away");
      },
    },
    {
      image: Svg_a,
      text: "a",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_a, "a");
      },
    },
    {
      image: Svg_all,
      text: "all",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_all, "all");
      },
    },
    {
      image: Svg_this,
      text: "this",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_this, "this");
      },
    },
    {
      image: Svg_that,
      text: "that",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_that, "that");
      },
    },
    {
      image: Svg_is,
      text: "is",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_is, "is");
      },
    },
    {
      image: Svg_am,
      text: "am",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_am, "am");
      },
    },
    {
      image: Svg_none,
      text: "none",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_none, "none");
      },
    },
    {
      image: Svg_to,
      text: "to",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_to, "to");
      },
    },
    {
      image: Svg_from,
      text: "from",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_from, "from");
      },
    },
    {
      image: Svg_about,
      text: "about",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_about, "about");
      },
    },
    {
      image: Svg_be,
      text: "be",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_be, "be");
      },
    },
    {
      image: Svg_some,
      text: "some",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_some, "some");
      },
    },
    {
      image: Svg_with,
      text: "with",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_with, "with");
      },
    },
    {
      image: Svg_and,
      text: "and",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_and, "and");
      },
    },
    {
      image: Svg_at,
      text: "at",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_at, "at");
      },
    },
    {
      image: Svg_the,
      text: "the",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_the, "the");
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
