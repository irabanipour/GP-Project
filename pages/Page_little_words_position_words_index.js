import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_up from "./images/descriptive_direction/up.svg";
import Svg_down from "./images/descriptive_direction/down.svg";
import Svg_in from "./images/descriptive_position/in.svg";
import Svg_out from "./images/descriptive_direction/out.svg";
import Svg_here from  "./images/from.svg";
import Svg_there from  "./images/there.svg";
import Svg_on from "./images/descriptive_position/on.svg";
import Svg_off from "./images/descriptive_position/off.svg";
import Svg_middle from "./images/descriptive_position/middle.svg";
import Svg_top from "./images/descriptive_position/top_2.svg";
import Svg_bottom from "./images/descriptive_position/bottom_2.svg";
import Svg_under from "./images/descriptive_position/under_1.svg";
import Svg_over from "./images/descriptive_position/over.svg";
export default class Page_little_words_position_words_index extends Component {
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
      image: Svg_up,
      text: "up",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_up, "up");
      },
    },
    {
      image: Svg_down,
      text: "down",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_down, "down");
      },
    },
    {
      image: Svg_in,
      text: "in",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_in, "in");
      },
    },
    {
      image: Svg_out,
      text: "out",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_out, "out");
      },
    },
    {
      image: Svg_here,
      text: "here",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_here, "here");
      },
    },
    {
      image: Svg_there,
      text: "there",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_there, "there");
      },
    },
    {
      image: Svg_on,
      text: "on",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_on, "on");
      },
    },
    {
      image: Svg_off,
      text: "off",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_off, "off");
      },
    },
    {
      image: Svg_middle,
      text: "middle",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_middle, "middle");
      },
    },
    {
      image: Svg_top,
      text: "top",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_top, "top");
      },
    },
    {
      image: Svg_bottom,
      text: "bottom",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bottom, "bottom");
      },
    },
    {
      image: Svg_under,
      text: "under",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_under, "under");
      },
    },
    {
      image: Svg_over,
      text: "over",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_over, "over");
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
