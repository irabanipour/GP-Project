import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_breakfast from "./images/food_meals/breakfast_5.svg";
import Svg_cereal from "./images/food_breads/cereal.svg";
import Svg_porridge from "./images/food_breads/porridge.svg";
import Svg_bran from "./images/food_breads/cereal_bran.svg";
import Svg_toast from "./images/kitchen_items/toast.svg";
import Svg_butter from "./images/food_dairy/butter.svg";
import Svg_croissant from "./images/food_meals/breafkfast_continental_1.svg";
import Svg_jam from "./images/food_sweets/jam.svg";
import Svg_muesli from "./images/food_breads/cereal_box_museli.svg";
import Svg_boiled_egg from "./images/food_eggs/egg_boiled.svg";
import Svg_fried_egg from "./images/food_eggs/egg_fried.svg";
import Svg_scrambled_egg from "./images/food_eggs/eggs_scrambled.svg";
import Svg_bagel from "./images/food_breads/bagel.svg";
import Svg_full_English from "./images/food_meals/breafkfast_fried.svg";
import Svg_beans from "./images/food_vegetables/baked_beans.svg";
import Svg_fruit from "./images/food_fruit/fruit.svg";
import Svg_pancakes from "./images/food_breads/pancakes.svg";
export default class Page_food_breakfast_index extends Component {
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
      image: Svg_breakfast,
      text: "breakfast",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_breakfast, "breakfast");
      },
    },
    {
      image: Svg_cereal,
      text: "cereal",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cereal, "cereal");
      },
    },
    {
      image: Svg_porridge,
      text: "porridge",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_porridge, "porridge");
      },
    },
    {
      image: Svg_bran,
      text: "bran",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bran, "bran");
      },
    },
    {
      image: Svg_toast,
      text: "toast",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toast, "toast");
      },
    },
    {
      image: Svg_butter,
      text: "butter",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_butter, "butter");
      },
    },
    {
      image: Svg_croissant,
      text: "croissant",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_croissant, "croissant");
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
      image: Svg_muesli,
      text: "muesli",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_muesli, "muesli");
      },
    },
    {
      image: Svg_boiled_egg,
      text: "boiled egg",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_boiled_egg, "boiled egg");
      },
    },
    {
      image: Svg_fried_egg,
      text: "fried egg",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fried_egg, "fried egg");
      },
    },
    {
      image: Svg_scrambled_egg,
      text: "scrambled egg",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_scrambled_egg, "scrambled egg");
      },
    },
    {
      image: Svg_bagel,
      text: "bagel",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bagel, "bagel");
      },
    },
    {
      image: Svg_full_English,
      text: "full English",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_full_English, "full English");
      },
    },
    {
      image: Svg_beans,
      text: "beans",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_beans, "beans");
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
      image: Svg_pancakes,
      text: "pancakes",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pancakes, "pancakes");
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
