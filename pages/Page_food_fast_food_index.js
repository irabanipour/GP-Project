import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_fast_food from "./images/food_meals/takeaway_burger_and_chips.svg";
import Svg_chips from "./images/food_vegetables/chips.svg";
import Svg_chicken_nuggets from "./images/food_poultry/chicken_nuggets.svg";
import Svg_burger from "./images/food_meals/takeaway_burger.svg";
import Svg_hot_dog from "./images/food_meals/hot_dog.svg";
import Svg_pizza from "./images/food_meals/pizza.svg";
import Svg_fish_and_chips from "./images/food_meals/fish_and_chips.svg";
import Svg_fish_burger from "./images/food_meals/fish_burger.svg";
import Svg_cheese_burger from "./images/food_meals/cheese_burger.svg";
import Svg_sweets from "./images/food_sweets/sweet.svg";
import Svg_candy_floss from "./images/food_sweets/candy_floss.svg";
export default class Page_food_fast_food_index extends Component {
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
      image: Svg_fast_food,
      text: "fast food",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fast_food, "fast food");
      },
    },
    {
      image: Svg_chips,
      text: "chips",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chips, "chips");
      },
    },
    {
      image: Svg_chicken_nuggets,
      text: "chicken nuggets",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chicken_nuggets, "chicken nuggets");
      },
    },
    {
      image: Svg_burger,
      text: "burger",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_burger, "burger");
      },
    },
    {
      image: Svg_hot_dog,
      text: "hot dog",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hot_dog, "hot dog");
      },
    },
    {
      image: Svg_pizza,
      text: "pizza",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pizza, "pizza");
      },
    },
    {
      image: Svg_fish_and_chips,
      text: "fish & chips",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fish_and_chips, "fish & chips");
      },
    },
    {
      image: Svg_fish_burger,
      text: "fish burger",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fish_burger, "fish burger");
      },
    },
    {
      image: Svg_cheese_burger,
      text: "cheese burger",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cheese_burger, "cheese burger");
      },
    },
    {
      image: Svg_sweets,
      text: "sweets",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sweets, "sweets");
      },
    },
    {
      image: Svg_candy_floss,
      text: "candy floss",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_candy_floss, "candy floss");
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
