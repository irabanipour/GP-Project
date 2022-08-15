import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_salad from "./images/food_vegetables/salad.svg";
import Svg_olives from "./images/food_vegetables/olives.svg";
import Svg_tomato from "./images/food_vegetables/tomato.svg";
import Svg_spring_onion from "./images/food_vegetables/spring_onions.svg";
import Svg_celery from "./images/food_vegetables/celery.svg";
import Svg_cucumber from "./images/food_vegetables/cucumber.svg";
import Svg_pepper from "./images/food_vegetables/pepper.svg";
import Svg_radish from "./images/food_vegetables/radish.svg";
import Svg_lettuce from "./images/food_vegetables/lettuce.svg";
import Svg_beetroot from "./images/food_vegetables/beetroot.svg";
import Svg_chili_pepper from "./images/food_vegetables/chilli_pepper.svg";
export default class Page_food_salad_index extends Component {
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
      image: Svg_salad,
      text: "salad",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_salad, "salad");
      },
    },
    {
      image: Svg_olives,
      text: "olives",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_olives, "olives");
      },
    },
    {
      image: Svg_tomato,
      text: "tomato",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tomato, "tomato");
      },
    },
    {
      image: Svg_spring_onion,
      text: "spring onion",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_spring_onion, "spring onion");
      },
    },
    {
      image: Svg_celery,
      text: "celery",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_celery, "celery");
      },
    },
    {
      image: Svg_cucumber,
      text: "cucumber",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cucumber, "cucumber");
      },
    },
    {
      image: Svg_pepper,
      text: "pepper",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pepper, "pepper");
      },
    },
    {
      image: Svg_radish,
      text: "radish",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_radish, "radish");
      },
    },
    {
      image: Svg_lettuce,
      text: "lettuce",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lettuce, "lettuce");
      },
    },
    {
      image: Svg_beetroot,
      text: "beetroot",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_beetroot, "beetroot");
      },
    },
    {
      image: Svg_chili_pepper,
      text: "chili pepper",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chili_pepper, "chili pepper");
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
