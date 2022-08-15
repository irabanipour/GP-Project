import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_bird from "./images/animal_birds/bird.svg";
import Svg_duck from "./images/animal_birds/duck.svg";
import Svg_parrot from "./images/animal_birds/parrot.svg";
import Svg_robin from "./images/animal_birds/robin.svg";
import Svg_turkey from "./images/animal_birds/turkey.svg";
import Svg_goose from "./images/animal_birds/goose.svg";
import Svg_swan from "./images/animal_birds/swan.svg";
import Svg_peacock from "./images/animal_birds/peacock.svg";
import Svg_owl from "./images/animal_birds/owl.svg";
import Svg_penguin from "./images/animal_birds/penguin.svg";
export default class Page_things_nature_animals_birds_index extends Component {
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
      image: Svg_bird,
      text: "bird",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bird, "bird");
      },
    },
    {
      image: Svg_duck,
      text: "duck",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_duck, "duck");
      },
    },
    {
      image: Svg_parrot,
      text: "parrot",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_parrot, "parrot");
      },
    },
    {
      image: Svg_robin,
      text: "robin",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_robin, "robin");
      },
    },
    {
      image: Svg_turkey,
      text: "turkey",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_turkey, "turkey");
      },
    },
    {
      image: Svg_goose,
      text: "goose",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_goose, "goose");
      },
    },
    {
      image: Svg_swan,
      text: "swan",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_swan, "swan");
      },
    },
    {
      image: Svg_peacock,
      text: "peacock",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_peacock, "peacock");
      },
    },
    {
      image: Svg_owl,
      text: "owl",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_owl, "owl");
      },
    },
    {
      image: Svg_penguin,
      text: "penguin",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_penguin, "penguin");
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
