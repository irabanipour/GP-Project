import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_water_animal from "./images/animal_fish/dolphin.svg";
import Svg_fish from "./images/animal_fish/fish.svg";
import Svg_whale from "./images/animal_fish/killer_whale.svg";
import Svg_prawn from "./images/animal_crustacean/prawn.svg";
import Svg_crab from "./images/animal_crustacean/crab.svg";
import Svg_dolphin from "./images/animal_fish/dolphin.svg";
import Svg_jellyfish from "./images/animal_invertebrates/jellyfish.svg";
import Svg_tropical from "./images/animal_fish/fish_tropical.svg";
export default class Page_things_nature_animals_water_index extends Component {
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
      image: Svg_water_animal,
      text: "water animal",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_water_animal, "water animal");
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
      image: Svg_whale,
      text: "whale",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_whale, "whale");
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
      image: Svg_crab,
      text: "crab",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_crab, "crab");
      },
    },
    {
      image: Svg_dolphin,
      text: "dolphin",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dolphin, "dolphin");
      },
    },
    {
      image: Svg_jellyfish,
      text: "jellyfish",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_jellyfish, "jellyfish");
      },
    },
    {
      image: Svg_tropical,
      text: "tropical",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tropical, "tropical");
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
