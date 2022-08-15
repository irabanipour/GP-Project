import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_potato from "./images/food_vegetables/potato.svg";
import Svg_chips from "./images/food_vegetables/chips.svg";
import Svg_mash_potato from "./images/food_meals/mash_potato_1.svg";
import Svg_baked_potato from "./images/food_vegetables/jacket_potato_1.svg";
import Svg_sweet_potato from "./images/food_vegetables/sweet_potato.svg";
import Svg_potato_salad from "./images/food_vegetables/salad.svg";
export default class Page_food_vegetables_potato_index extends Component {
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
      image: Svg_potato,
      text: "potato",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_potato, "potato");
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
      image: Svg_mash_potato,
      text: "mash potato",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mash_potato, "mash potato");
      },
    },
    {
      image: Svg_baked_potato,
      text: "baked potato",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_baked_potato, "baked potato");
      },
    },
    {
      image: Svg_sweet_potato,
      text: "sweet potato",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sweet_potato, "sweet potato");
      },
    },
    {
      image: Svg_potato_salad,
      text: "potato salad",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_potato_salad, "potato salad");
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
