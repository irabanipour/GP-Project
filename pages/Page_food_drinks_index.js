import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_drink from "./images/drink_type/drink.svg";
import Svg_coffee from "./images/drink_type/coffee.svg";
import Svg_tea from "./images/drink_type/tea.svg";
import Svg_hot_chocolate from "./images/drink_type/hot_chocolate.svg";
import Svg_Describing_drinks from "./images/drink_containers/drink_small.svg";
import Svg_milk from "./images/drink_type/milk.svg";
import Svg_water from "./images/drink_type/water.svg";
import Svg_juice from "./images/drink_type/drink.svg";
import Svg_smoothie from "./images/drink_type/milkshake.svg";
import Svg_milkshake from "./images/drink_type/milkshake.svg";
import Svg_fizzy_drink from "./images/drink_type/drink.svg";
import Svg_alcohol from "./images/drink_type/wine.svg";
import Svg_with from "./images/descriptive_quantity/some.svg";
import Svg_and from "./images/plus.svg";
export default class Page_food_drinks_index extends Component {
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
      image: Svg_drink,
      text: "drink",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_drink, "drink");
      },
    },
    {
      image: Svg_coffee,
      text: "coffee",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_coffee, "coffee");
      },
    },
    {
      image: Svg_tea,
      text: "tea",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tea, "tea");
      },
    },
    {
      image: Svg_hot_chocolate,
      text: "hot chocolate",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hot_chocolate, "hot chocolate");
      },
    },
    {
      image: Svg_Describing_drinks,
      text: "Describing drinks",
      onPress: () => {
        this.props.navigation.navigate("Food_drinks_describing");
      },
    },
    {
      image: Svg_milk,
      text: "milk",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_milk, "milk");
      },
    },
    {
      image: Svg_water,
      text: "water",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_water, "water");
      },
    },
    {
      image: Svg_juice,
      text: "juice",
      onPress: () => {
        this.props.navigation.navigate("Food_drinks_juice");
      },
    },
    {
      image: Svg_smoothie,
      text: "smoothie",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_smoothie, "smoothie");
      },
    },
    {
      image: Svg_milkshake,
      text: "milkshake",
      onPress: () => {
        this.props.navigation.navigate("Food_drinks_milkshake");
      },
    },
    {
      image: Svg_fizzy_drink,
      text: "fizzy drink",
      onPress: () => {
        this.props.navigation.navigate("Food_drinks_fizzy");
      },
    },
    {
      image: Svg_alcohol,
      text: "alcohol",
      onPress: () => {
        this.props.navigation.navigate("Food_drinks_alcohol");
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
