import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_pint from "./images/drink_containers/pint.svg";
import Svg_half_pint from "./images/drink_containers/pint_half.svg";
import Svg_straw from "./images/kitchen_items/straw.svg";
import Svg_special_cup from "./images/food_feeding/dysphagia_cup_2.svg";
import Svg_diet from "./images/food_ingredients/sugar_white.svg";
import Svg_sugar from "./images/food_ingredients/sugar_white.svg";
import Svg_large from "./images/drink_containers/drink_large.svg";
import Svg_medium from "./images/drink_containers/drink_medium.svg";
import Svg_small from "./images/drink_containers/drink_small.svg";
import Svg_hot from "./images/drink_description/drink_hot.svg";
import Svg_cold from "./images/drink_description/drink_cold.svg";
export default class Page_food_drinks_describing_index extends Component {
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
      image: Svg_pint,
      text: "pint",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pint, "pint");
      },
    },
    {
      image: Svg_half_pint,
      text: "half pint",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_half_pint, "half pint");
      },
    },
    {
      image: Svg_straw,
      text: "straw",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_straw, "straw");
      },
    },
    {
      image: Svg_special_cup,
      text: "special cup",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_special_cup, "special cup");
      },
    },
    {
      image: Svg_diet,
      text: "diet",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_diet, "diet");
      },
    },
    {
      image: Svg_sugar,
      text: "sugar",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sugar, "sugar");
      },
    },
    {
      image: Svg_large,
      text: "large",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_large, "large");
      },
    },
    {
      image: Svg_medium,
      text: "medium",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_medium, "medium");
      },
    },
    {
      image: Svg_small,
      text: "small",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_small, "small");
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
