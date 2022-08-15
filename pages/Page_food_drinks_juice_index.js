import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_juice from "./images/food_fruit/fruit.svg";
import Svg_apple_juice from "./images/drink_type/apple_juice.svg";
import Svg_orange_juice from "./images/drink_type/orange_juice.svg";
import Svg_blackcurrant_juice from "./images/drink_type/blackcurrant_juice.svg";
import Svg_pineapple_juice from "./images/drink_type/pineapple_juice.svg";
import Svg_grape_juice from "./images/drink_type/grape_juice.svg";
import Svg_grapefruit_juice from "./images/drink_type/grapefruit_juice.svg";
import Svg_cranberry_juice from "./images/drink_type/cranberry_juice.svg";
import Svg_tomato_juice from "./images/drink_type/tomato_juice.svg";
export default class Page_food_drinks_juice_index extends Component {
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
      image: Svg_juice,
      text: "juice",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_juice, "juice");
      },
    },
    {
      image: Svg_apple_juice,
      text: "apple juice",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_apple_juice, "apple juice");
      },
    },
    {
      image: Svg_orange_juice,
      text: "orange juice",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_orange_juice, "orange juice");
      },
    },
    {
      image: Svg_blackcurrant_juice,
      text: "blackcurrant juice",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_blackcurrant_juice,
          "blackcurrant juice"
        );
      },
    },
    {
      image: Svg_pineapple_juice,
      text: "pineapple juice",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pineapple_juice, "pineapple juice");
      },
    },
    {
      image: Svg_grape_juice,
      text: "grape juice",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_grape_juice, "grape juice");
      },
    },
    {
      image: Svg_grapefruit_juice,
      text: "grapefruit juice",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_grapefruit_juice, "grapefruit juice");
      },
    },
    {
      image: Svg_cranberry_juice,
      text: "cranberry juice",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cranberry_juice, "cranberry juice");
      },
    },
    {
      image: Svg_tomato_juice,
      text: "tomato juice",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tomato_juice, "tomato juice");
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
