import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_wild_animal from "./images/animal_mammal/lion.svg";
import Svg_zebra from "./images/animal_mammal/zebra.svg";
import Svg_snake from "./images/animal_reptiles/snake.svg";
import Svg_monkey from "./images/animal_mammal/chimpanzee.svg";
import Svg_bear from "./images/animal_mammal/polar_bear.svg";
import Svg_camel from "./images/animal_mammal/camel.svg";
import Svg_cheetah from "./images/animal_mammal/cheetah.svg";
import Svg_deer from "./images/animal_mammal/deer.svg";
import Svg_elephant from "./images/animal_mammal/elephant.svg";
import Svg_giraffe from "./images/animal_mammal/giraffe.svg";
import Svg_gorilla from "./images/animal_mammal/gorilla.svg";
import Svg_hippo from "./images/animal_mammal/hippopotamus.svg";
import Svg_lion from "./images/animal_mammal/lion.svg";
import Svg_tiger from "./images/animal_mammal/tiger.svg";
import Svg_rhinoceros from "./images/animal_mammal/rhinoceros.svg";
export default class Page_things_nature_animals_wild_index extends Component {
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
      image: Svg_wild_animal,
      text: "wild animal",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wild_animal, "wild animal");
      },
    },
    {
      image: Svg_zebra,
      text: "zebra",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_zebra, "zebra");
      },
    },
    {
      image: Svg_snake,
      text: "snake",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_snake, "snake");
      },
    },
    {
      image: Svg_monkey,
      text: "monkey",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_monkey, "monkey");
      },
    },
    {
      image: Svg_bear,
      text: "bear",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bear, "bear");
      },
    },
    {
      image: Svg_camel,
      text: "camel",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_camel, "camel");
      },
    },
    {
      image: Svg_cheetah,
      text: "cheetah",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cheetah, "cheetah");
      },
    },
    {
      image: Svg_deer,
      text: "deer",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_deer, "deer");
      },
    },
    {
      image: Svg_elephant,
      text: "elephant",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_elephant, "elephant");
      },
    },
    {
      image: Svg_giraffe,
      text: "giraffe",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_giraffe, "giraffe");
      },
    },
    {
      image: Svg_gorilla,
      text: "gorilla",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_gorilla, "gorilla");
      },
    },
    {
      image: Svg_hippo,
      text: "hippo",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hippo, "hippo");
      },
    },
    {
      image: Svg_lion,
      text: "lion",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lion, "lion");
      },
    },
    {
      image: Svg_tiger,
      text: "tiger",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tiger, "tiger");
      },
    },
    {
      image: Svg_rhinoceros,
      text: "rhinoceros",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_rhinoceros, "rhinoceros");
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
