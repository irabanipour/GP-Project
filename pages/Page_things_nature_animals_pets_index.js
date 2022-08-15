import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_pet from "./images/animal_mammal/dog.svg";
import Svg_cat from "./images/animal_mammal/cat.svg";
import Svg_hamster from "./images/animal_mammal/hamster.svg";
import Svg_mouse from "./images/animal_mammal/mouse.svg";
import Svg_guinea_pig from "./images/animal_mammal/guinea_pig.svg";
import Svg_rabbit from "./images/animal_mammal/rabbit.svg";
import Svg_horse from "./images/animal_mammal/horse.svg";
import Svg_fish from "./images/animal_fish/goldfish.svg";
import Svg_rat from "./images/animal_mammal/rat.svg";
import Svg_dog from "./images/animal_mammal/dog.svg";
export default class Page_things_nature_animals_pets_index extends Component {
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
      image: Svg_pet,
      text: "pet",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pet, "pet");
      },
    },
    {
      image: Svg_cat,
      text: "cat",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cat, "cat");
      },
    },
    {
      image: Svg_hamster,
      text: "hamster",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hamster, "hamster");
      },
    },
    {
      image: Svg_mouse,
      text: "mouse",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mouse, "mouse");
      },
    },
    {
      image: Svg_guinea_pig,
      text: "guinea pig",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_guinea_pig, "guinea pig");
      },
    },
    {
      image: Svg_rabbit,
      text: "rabbit",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_rabbit, "rabbit");
      },
    },
    {
      image: Svg_horse,
      text: "horse",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_horse, "horse");
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
      image: Svg_rat,
      text: "rat",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_rat, "rat");
      },
    },
    {
      image: Svg_dog,
      text: "dog",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dog, "dog");
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
