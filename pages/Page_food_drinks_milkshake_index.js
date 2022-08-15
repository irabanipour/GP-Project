import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_milkshake from "./images/drink_type/milkshake.svg";
import Svg_banana_milkshake from "./images/food_sweets/milkshake_banana.svg";
import Svg_strawberry_milkshake from "./images/food_sweets/milkshake_strawberry.svg";
import Svg_chocolate_milkshake from "./images/food_sweets/milkshake_chocolate.svg";
export default class Page_food_drinks_milkshake_index extends Component {
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
      image: Svg_milkshake,
      text: "milkshake",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_milkshake, "milkshake");
      },
    },
    {
      image: Svg_banana_milkshake,
      text: "banana milkshake",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_banana_milkshake, "banana milkshake");
      },
    },
    {
      image: Svg_strawberry_milkshake,
      text: "strawberry milkshake",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_strawberry_milkshake,
          "strawberry milkshake"
        );
      },
    },
    {
      image: Svg_chocolate_milkshake,
      text: "chocolate milkshake",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_chocolate_milkshake,
          "chocolate milkshake"
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
