import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_flavour from "./images/food_fruit/fruit.svg";
import Svg_raisin from "./images/food_fruit/raisin.svg";
import Svg_banana from "./images/food_fruit/banana.svg";
import Svg_fruit from "./images/food_fruit/fruit.svg";
import Svg_mint from "./images/food_sweets/mints.svg";
import Svg_toffee from "./images/food_sweets/chocolate_box.svg";
import Svg_lime from "./images/food_fruit/lime.svg";
import Svg_lemon from "./images/food_fruit/lemon.svg";
import Svg_chocolate from "./images/food_sweets/chocolate.svg";
import Svg_pineapple from "./images/food_fruit/pineapple.svg";
import Svg_strawberry from "./images/food_fruit/strawberry.svg";
import Svg_cherry from "./images/food_fruit/cherry.svg";
import Svg_blackberry from "./images/food_fruit/blackberry.svg";
export default class Page_food_flavours_index extends Component {
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
      image: Svg_flavour,
      text: "flavour",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_flavour, "flavour");
      },
    },
    {
      image: Svg_raisin,
      text: "raisin",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_raisin, "raisin");
      },
    },
    {
      image: Svg_banana,
      text: "banana",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_banana, "banana");
      },
    },
    {
      image: Svg_fruit,
      text: "fruit",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fruit, "fruit");
      },
    },
    {
      image: Svg_mint,
      text: "mint",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mint, "mint");
      },
    },
    {
      image: Svg_toffee,
      text: "toffee",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toffee, "toffee");
      },
    },
    {
      image: Svg_lime,
      text: "lime",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lime, "lime");
      },
    },
    {
      image: Svg_lemon,
      text: "lemon",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lemon, "lemon");
      },
    },
    {
      image: Svg_chocolate,
      text: "chocolate",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chocolate, "chocolate");
      },
    },
    {
      image: Svg_pineapple,
      text: "pineapple",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pineapple, "pineapple");
      },
    },
    {
      image: Svg_strawberry,
      text: "strawberry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_strawberry, "strawberry");
      },
    },
    {
      image: Svg_cherry,
      text: "cherry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cherry, "cherry");
      },
    },
    {
      image: Svg_blackberry,
      text: "blackberry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_blackberry, "blackberry");
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
