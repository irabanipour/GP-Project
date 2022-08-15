import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_colour from "./images/art_colour/colour.svg";
import Svg_white from "./images/art_colour/white.svg";
import Svg_black from "./images/art_colour/black.svg";
import Svg_red from "./images/art_colour/red.svg";
import Svg_light from "./images/art_colour/grey_light.svg";
import Svg_yellow from "./images/art_colour/yellow.svg";
import Svg_orange from "./images/art_colour/orange_2.svg";
import Svg_green from "./images/art_colour/green.svg";
import Svg_blue from "./images/art_colour/blue.svg";
import Svg_dark from "./images/art_colour/grey_dark.svg";
import Svg_purple from "./images/art_colour/purple.svg";
import Svg_pink from "./images/art_colour/pink.svg";
import Svg_brown from "./images/art_colour/brown.svg";
import Svg_gold from "./images/money/gold_bar.svg";
import Svg_spotted from "./images/descriptive_state/spotty.svg";
import Svg_silver from "./images/sport_accessories/medal.svg";
export default class Page_describing_colours_index extends Component {
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
      image: Svg_colour,
      text: "colour",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_colour, "colour");
      },
    },
    {
      image: Svg_white,
      text: "white",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_white, "white");
      },
    },
    {
      image: Svg_black,
      text: "black",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_black, "black");
      },
    },
    {
      image: Svg_red,
      text: "red",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_red, "red");
      },
    },
    {
      image: Svg_light,
      text: "light",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_light, "light");
      },
    },
    {
      image: Svg_yellow,
      text: "yellow",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_yellow, "yellow");
      },
    },
    {
      image: Svg_orange,
      text: "orange",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_orange, "orange");
      },
    },
    {
      image: Svg_green,
      text: "green",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_green, "green");
      },
    },
    {
      image: Svg_blue,
      text: "blue",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_blue, "blue");
      },
    },
    {
      image: Svg_dark,
      text: "dark",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dark, "dark");
      },
    },
    {
      image: Svg_purple,
      text: "purple",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_purple, "purple");
      },
    },
    {
      image: Svg_pink,
      text: "pink",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pink, "pink");
      },
    },
    {
      image: Svg_brown,
      text: "brown",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_brown, "brown");
      },
    },
    {
      image: Svg_gold,
      text: "gold",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_gold, "gold");
      },
    },
    {
      image: Svg_spotted,
      text: "spotted",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_spotted, "spotted");
      },
    },
    {
      image: Svg_silver,
      text: "silver",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_silver, "silver");
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
