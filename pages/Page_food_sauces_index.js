import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_tomato_sauce from "./images/food_ingredients/sauce_tomato.svg";
import Svg_mayonaisse from "./images/food_dairy/mayonnaise.svg";
import Svg_peanut_butter from "./images/food_ingredients/peanut_butter.svg";
import Svg_pepper from "./images/kitchen_items/pepper_mill.svg";
import Svg_salt from "./images/kitchen_items/salt.svg";
import Svg_gravy from "./images/kitchen_items/gravy_boat.svg";
import Svg_sugar from "./images/food_ingredients/sugar_white.svg";
import Svg_jam from "./images/food_sweets/jam.svg";
import Svg_brown_sauce from "./images/food_ingredients/sauce_brown.svg";
import Svg_vinegar from "./images/food_ingredients/vinegar.svg";
import Svg_spices from "./images/food_feeding/spicy.svg";
import Svg_honey from "./images/food_ingredients/honey.svg";
export default class Page_food_sauces_index extends Component {
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
      image: Svg_tomato_sauce,
      text: "tomato sauce",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tomato_sauce, "tomato sauce");
      },
    },
    {
      image: Svg_mayonaisse,
      text: "mayonaisse",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mayonaisse, "mayonaisse");
      },
    },
    {
      image: Svg_peanut_butter,
      text: "peanut butter",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_peanut_butter, "peanut butter");
      },
    },
    {
      image: Svg_pepper,
      text: "pepper",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pepper, "pepper");
      },
    },
    {
      image: Svg_salt,
      text: "salt",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_salt, "salt");
      },
    },
    {
      image: Svg_gravy,
      text: "gravy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_gravy, "gravy");
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
      image: Svg_jam,
      text: "jam",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_jam, "jam");
      },
    },
    {
      image: Svg_brown_sauce,
      text: "brown sauce",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_brown_sauce, "brown sauce");
      },
    },
    {
      image: Svg_vinegar,
      text: "vinegar",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_vinegar, "vinegar");
      },
    },
    {
      image: Svg_spices,
      text: "spices",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_spices, "spices");
      },
    },
    {
      image: Svg_honey,
      text: "honey",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_honey, "honey");
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
