import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_bake from "./images/kitchen_actions/bake_,_to.svg";
import Svg_cook from "./images/kitchen_actions/cook_,_to.svg";
import Svg_chop from "./images/kitchen_actions/chop_,_to.svg";
import Svg_grate from "./images/kitchen_actions/grate_,_to.svg";
import Svg_stir from "./images/kitchen_actions/stir_mix_,_to.svg";
import Svg_peel from "./images/kitchen_actions/peel_,_to.svg";
import Svg_pour from "./images/food_ingredients/gravy_pour_,_to.svg";
import Svg_blend from "./images/kitchen_items/blender-drinks.svg";
import Svg_fry from "./images/kitchen_actions/fry_,_to.svg";
import Svg_measure from "./images/descriptive_quantity/weigh_,_to.svg";
import Svg_it from "./images/descriptive_position/bottom.svg";
import Svg_Kitchen_equipment from "./images/kitchen_items/place_setting.svg";
import Svg_Dont_burn_it from "./images/medical_conditions/burn.svg";
export default class Page_food_cooking_index extends Component {
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
      image: Svg_bake,
      text: "bake",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bake, "bake");
      },
    },
    {
      image: Svg_cook,
      text: "cook",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cook, "cook");
      },
    },
    {
      image: Svg_chop,
      text: "chop",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chop, "chop");
      },
    },
    {
      image: Svg_grate,
      text: "grate",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_grate, "grate");
      },
    },
    {
      image: Svg_stir,
      text: "stir",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_stir, "stir");
      },
    },
    {
      image: Svg_peel,
      text: "peel",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_peel, "peel");
      },
    },
    {
      image: Svg_pour,
      text: "pour",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pour, "pour");
      },
    },
    {
      image: Svg_blend,
      text: "blend",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_blend, "blend");
      },
    },
    {
      image: Svg_fry,
      text: "fry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fry, "fry");
      },
    },
    {
      image: Svg_measure,
      text: "measure",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_measure, "measure");
      },
    },
    {
      image: Svg_it,
      text: "it",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_it, "it");
      },
    },
    {
      image: Svg_Kitchen_equipment,
      text: "Kitchen equipment",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Kitchen_equipment,
          "Kitchen equipment"
        );
      },
    },
    {
      image: Svg_Dont_burn_it,
      text: "Don't burn it",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Dont_burn_it, "Don't burn it");
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
