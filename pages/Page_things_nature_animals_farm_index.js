import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_farm_animal from "./images/animal_habitat/chicken_house.svg";
import Svg_pig from "./images/animal_mammal/piglet.svg";
import Svg_sheep from "./images/animal_mammal/sheep.svg";
import Svg_chick from "./images/animal_birds/chick.svg";
import Svg_chicken from "./images/animal_birds/chicken_live.svg";
import Svg_cow from "./images/animal_mammal/cow.svg";
import Svg_horse from "./images/animal_mammal/horse.svg";
export default class Page_things_nature_animals_farm_index extends Component {
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
      image: Svg_farm_animal,
      text: "farm animal",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_farm_animal, "farm animal");
      },
    },
    {
      image: Svg_pig,
      text: "pig",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pig, "pig");
      },
    },
    {
      image: Svg_sheep,
      text: "sheep",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sheep, "sheep");
      },
    },
    {
      image: Svg_chick,
      text: "chick",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chick, "chick");
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
      image: Svg_cow,
      text: "cow",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cow, "cow");
      },
    },
    {
      image: Svg_horse,
      text: "horse",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_horse, "horse");
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
