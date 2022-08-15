import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_snack from "./images/food_sweets/ice_cream_2.svg";
import Svg_raisins from "./images/food_fruit/raisin.svg";
import Svg_ice_lolly from "./images/food_sweets/ice_lolly.svg";
import Svg_cake from "./images/food_breads/cake.svg";
import Svg_custard from "./images/food_sweets/pour_custard_,_to.svg";
import Svg_cream from "./images/food_dairy/cream.svg";
import Svg_fruit from "./images/food_fruit/fruit.svg";
import Svg_yoghurt from "./images/food_dairy/yogurt.svg";
import Svg_crisps from "./images/food_meals/crisps.svg";
import Svg_sweets from "./images/food_sweets/sweet.svg";
import Svg_candy_floss from "./images/food_sweets/candy_floss.svg";
import Svg_pie from "./images/food_breads/pie.svg";
import Svg_chocolate from "./images/food_sweets/chocolate.svg";
import Svg_ice_cream from "./images/food_sweets/ice_cream_2.svg";
import Svg_cup_cake from "./images/food_breads/cake_cup_cake.svg";
import Svg_rice_cake from "./images/food_pastas/rice_cake.svg";
export default class Page_food_snacks_index extends Component {
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
      image: Svg_snack,
      text: "snack",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_snack, "snack");
      },
    },
    {
      image: Svg_raisins,
      text: "raisins",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_raisins, "raisins");
      },
    },
    {
      image: Svg_ice_lolly,
      text: "ice lolly",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ice_lolly, "ice lolly");
      },
    },
    {
      image: Svg_cake,
      text: "cake",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cake, "cake");
      },
    },
    {
      image: Svg_custard,
      text: "custard",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_custard, "custard");
      },
    },
    {
      image: Svg_cream,
      text: "cream",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cream, "cream");
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
      image: Svg_yoghurt,
      text: "yoghurt",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_yoghurt, "yoghurt");
      },
    },
    {
      image: Svg_crisps,
      text: "crisps",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_crisps, "crisps");
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
    {
      image: Svg_pie,
      text: "pie",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pie, "pie");
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
      image: Svg_ice_cream,
      text: "ice cream",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ice_cream, "ice cream");
      },
    },
    {
      image: Svg_cup_cake,
      text: "cup cake",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cup_cake, "cup cake");
      },
    },
    {
      image: Svg_rice_cake,
      text: "rice cake",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_rice_cake, "rice cake");
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
