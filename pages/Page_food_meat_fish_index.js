import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_meat from "./images/food_meat/meat.svg";
import Svg_bacon from "./images/food_meat/bacon.svg";
import Svg_beef from "./images/food_meat/beef.svg";
import Svg_tuna from "./images/food_fish/tuna.svg";
import Svg_lamb from "./images/food_meat/lamb.svg";
import Svg_ham from "./images/food_meat/ham.svg";
import Svg_chicken from "./images/food_poultry/chicken_breast.svg";
import Svg_pork_chop from "./images/food_meat/pork_chop.svg";
import Svg_meatballs from "./images/food_meals/meatballs_and_spaghetti.svg";
import Svg_fish from "./images/animal_fish/fish.svg";
import Svg_mince from "./images/food_meat/minced_meat.svg";
import Svg_prawn from "./images/animal_crustacean/prawn.svg";
import Svg_fish_fingers from "./images/food_meals/frozen_fish_fingers.svg";
import Svg_sausages from "./images/food_meat/sausages.svg";
export default class Page_food_meat_fish_index extends Component {
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
      image: Svg_meat,
      text: "meat",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_meat, "meat");
      },
    },
    {
      image: Svg_bacon,
      text: "bacon",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bacon, "bacon");
      },
    },
    {
      image: Svg_beef,
      text: "beef",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_beef, "beef");
      },
    },
    {
      image: Svg_tuna,
      text: "tuna",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tuna, "tuna");
      },
    },
    {
      image: Svg_lamb,
      text: "lamb",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lamb, "lamb");
      },
    },
    {
      image: Svg_ham,
      text: "ham",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ham, "ham");
      },
    },
    {
      image: Svg_chicken,
      text: "chicken",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chicken, "chicken");
      },
    },
    {
      image: Svg_pork_chop,
      text: "pork chop",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pork_chop, "pork chop");
      },
    },
    {
      image: Svg_meatballs,
      text: "meatballs",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_meatballs, "meatballs");
      },
    },
    {
      image: Svg_fish,
      text: "fish",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fish, "fish");
      },
    },
    {
      image: Svg_mince,
      text: "mince",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mince, "mince");
      },
    },
    {
      image: Svg_prawn,
      text: "prawn",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_prawn, "prawn");
      },
    },
    {
      image: Svg_fish_fingers,
      text: "fish fingers",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fish_fingers, "fish fingers");
      },
    },
    {
      image: Svg_sausages,
      text: "sausages",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sausages, "sausages");
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
