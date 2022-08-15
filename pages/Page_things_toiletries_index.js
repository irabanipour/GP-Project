import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_toiletries from "./images/healthcare_grooming/toilet_roll.svg";
import Svg_soap from "./images/healthcare_grooming/soap.svg";
import Svg_toothbrush from "./images/healthcare_grooming/toothbrush.svg";
import Svg_toothpaste from "./images/healthcare_grooming/toothpaste.svg";
import Svg_bubble_bath from "./images/healthcare_grooming/bubble_bath.svg";
import Svg_deodorant from "./images/healthcare_grooming/deodorant.svg";
import Svg_shampoo from "./images/healthcare_grooming/shampoo.svg";
import Svg_conditioner from "./images/healthcare_grooming/hair_conditioner.svg";
import Svg_makeup from "./images/healthcare_grooming/make_up.svg";
import Svg_razor from "./images/healthcare_grooming/razor_electric.svg";
import Svg_shaving_foam from "./images/healthcare_grooming/shaving_cream.svg";
import Svg_aftershave from "./images/healthcare_grooming/perfume.svg";
import Svg_toilet_roll from "./images/healthcare_grooming/toilet_roll.svg";
import Svg_sanitary_items from "./images/healthcare_grooming/sanitary_towel.svg";
import Svg_hairdryer from "./images/healthcare_grooming/hairdryer.svg";
import Svg_comb from "./images/healthcare_grooming/comb.svg";
import Svg_brush from "./images/healthcare_grooming/hairbrush.svg";
import Svg_hairspray from "./images/healthcare_grooming/hairspray.svg";
import Svg_hair_dye from "./images/healthcare_grooming/hair_dye.svg";
export default class Page_things_toiletries_index extends Component {
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
      image: Svg_toiletries,
      text: "toiletries",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toiletries, "toiletries");
      },
    },
    {
      image: Svg_soap,
      text: "soap",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_soap, "soap");
      },
    },
    {
      image: Svg_toothbrush,
      text: "toothbrush",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toothbrush, "toothbrush");
      },
    },
    {
      image: Svg_toothpaste,
      text: "toothpaste",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toothpaste, "toothpaste");
      },
    },
    {
      image: Svg_bubble_bath,
      text: "bubble bath",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bubble_bath, "bubble bath");
      },
    },
    {
      image: Svg_deodorant,
      text: "deodorant",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_deodorant, "deodorant");
      },
    },
    {
      image: Svg_shampoo,
      text: "shampoo",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_shampoo, "shampoo");
      },
    },
    {
      image: Svg_conditioner,
      text: "conditioner",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_conditioner, "conditioner");
      },
    },
    {
      image: Svg_makeup,
      text: "make-up",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_makeup, "make-up");
      },
    },
    {
      image: Svg_razor,
      text: "razor",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_razor, "razor");
      },
    },
    {
      image: Svg_shaving_foam,
      text: "shaving foam",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_shaving_foam, "shaving foam");
      },
    },
    {
      image: Svg_aftershave,
      text: "aftershave",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_aftershave, "aftershave");
      },
    },
    {
      image: Svg_toilet_roll,
      text: "toilet roll",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toilet_roll, "toilet roll");
      },
    },
    {
      image: Svg_sanitary_items,
      text: "sanitary items",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sanitary_items, "sanitary items");
      },
    },
    {
      image: Svg_hairdryer,
      text: "hairdryer",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hairdryer, "hairdryer");
      },
    },
    {
      image: Svg_comb,
      text: "comb",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_comb, "comb");
      },
    },
    {
      image: Svg_brush,
      text: "brush",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_brush, "brush");
      },
    },
    {
      image: Svg_hairspray,
      text: "hairspray",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hairspray, "hairspray");
      },
    },
    {
      image: Svg_hair_dye,
      text: "hair dye",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hair_dye, "hair dye");
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
