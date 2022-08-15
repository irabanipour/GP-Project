import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_fruit from "./images/food_fruit/fruit.svg";
import Svg_apple from "./images/food_fruit/apple.svg";
import Svg_banana from "./images/food_fruit/banana.svg";
import Svg_avocado from "./images/food_fruit/avocado.svg";
import Svg_cranberries from "./images/food_fruit/cranberries.svg";
import Svg_grapefruit from "./images/food_fruit/grapefruit.svg";
import Svg_grapes from "./images/food_fruit/grapes.svg";
import Svg_lime from "./images/food_fruit/lime.svg";
import Svg_lemon from "./images/food_fruit/lemon.svg";
import Svg_melon from "./images/food_fruit/melon.svg";
import Svg_mango from "./images/food_fruit/mango.svg";
import Svg_orange from "./images/food_fruit/orange.svg";
import Svg_plum from "./images/food_fruit/plum.svg";
import Svg_pineapple from "./images/food_fruit/pineapple.svg";
import Svg_pear from "./images/food_fruit/pear.svg";
import Svg_strawberry from "./images/food_fruit/strawberry.svg";
import Svg_kiwi from "./images/food_fruit/kiwi.svg";
import Svg_cherry from "./images/food_fruit/cherry.svg";
import Svg_blackberry from "./images/food_fruit/blackberry.svg";
export default class Page_food_fruit_index extends Component {
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
      image: Svg_fruit,
      text: "fruit",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fruit, "fruit");
      },
    },
    {
      image: Svg_apple,
      text: "apple",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_apple, "apple");
      },
    },
    {
      image: Svg_banana,
      text: "banana",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_banana, "banana");
      },
    },
    {
      image: Svg_avocado,
      text: "avocado",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_avocado, "avocado");
      },
    },
    {
      image: Svg_cranberries,
      text: "cranberries",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cranberries, "cranberries");
      },
    },
    {
      image: Svg_grapefruit,
      text: "grapefruit",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_grapefruit, "grapefruit");
      },
    },
    {
      image: Svg_grapes,
      text: "grapes",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_grapes, "grapes");
      },
    },
    {
      image: Svg_lime,
      text: "lime",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lime, "lime");
      },
    },
    {
      image: Svg_lemon,
      text: "lemon",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lemon, "lemon");
      },
    },
    {
      image: Svg_melon,
      text: "melon",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_melon, "melon");
      },
    },
    {
      image: Svg_mango,
      text: "mango",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mango, "mango");
      },
    },
    {
      image: Svg_orange,
      text: "orange",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_orange, "orange");
      },
    },
    {
      image: Svg_plum,
      text: "plum",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_plum, "plum");
      },
    },
    {
      image: Svg_pineapple,
      text: "pineapple",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pineapple, "pineapple");
      },
    },
    {
      image: Svg_pear,
      text: "pear",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pear, "pear");
      },
    },
    {
      image: Svg_strawberry,
      text: "strawberry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_strawberry, "strawberry");
      },
    },
    {
      image: Svg_kiwi,
      text: "kiwi",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_kiwi, "kiwi");
      },
    },
    {
      image: Svg_cherry,
      text: "cherry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cherry, "cherry");
      },
    },
    {
      image: Svg_blackberry,
      text: "blackberry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_blackberry, "blackberry");
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
