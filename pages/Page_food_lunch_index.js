import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_lunch from "./images/food_meals/lunch_1.svg";
import Svg_sandwich from "./images/food_meals/sandwich.svg";
import Svg_crackers from "./images/food_meals/crisp_bread.svg";
import Svg_tuna from "./images/food_meals/lunch_1.svg";
import Svg_cheese from "./images/food_dairy/cheese.svg";
import Svg_ham from "./images/food_meat/ham.svg";
import Svg_chicken from "./images/food_poultry/chicken_breast.svg";
import Svg_cheese_on_toast from "./images/food_meals/cheese_on_toast_,_melted.svg";
import Svg_beans_on_toast from "./images/food_meals/beans_on_toast.svg";
import Svg_soup from "./images/food_meals/soup.svg";
import Svg_chicken_soup from "./images/food_meals/soup_chicken.svg";
import Svg_tomato_soup from "./images/food_meals/soup_tomato.svg";
import Svg_salad from "./images/food_vegetables/salad.svg";
import Svg_carrot_soup from "./images/food_meals/soup_carrot.svg";
import Svg_mushroom_soup from "./images/food_meals/soup_mushroom.svg";
import Svg_vegetable_soup from "./images/food_meals/soup_vegetable.svg";
export default class Page_food_lunch_index extends Component {
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
      image: Svg_lunch,
      text: "lunch",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lunch, "lunch");
      },
    },
    {
      image: Svg_sandwich,
      text: "sandwich",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sandwich, "sandwich");
      },
    },
    {
      image: Svg_crackers,
      text: "crackers",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_crackers, "crackers");
      },
    },
    {
      image: Svg_tuna,
      text: "tuna",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tuna, "tuna");
      },
    },
    {
      image: Svg_cheese,
      text: "cheese",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cheese, "cheese");
      },
    },
    {
      image: Svg_ham,
      text: "ham",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ham, "ham");
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
      image: Svg_cheese_on_toast,
      text: "cheese on toast",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cheese_on_toast, "cheese on toast");
      },
    },
    {
      image: Svg_beans_on_toast,
      text: "beans on toast",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_beans_on_toast, "beans on toast");
      },
    },
    {
      image: Svg_soup,
      text: "soup",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_soup, "soup");
      },
    },
    {
      image: Svg_chicken_soup,
      text: "chicken soup",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chicken_soup, "chicken soup");
      },
    },
    {
      image: Svg_tomato_soup,
      text: "tomato soup",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tomato_soup, "tomato soup");
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
      image: Svg_carrot_soup,
      text: "carrot soup",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_carrot_soup, "carrot soup");
      },
    },
    {
      image: Svg_mushroom_soup,
      text: "mushroom soup",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mushroom_soup, "mushroom soup");
      },
    },
    {
      image: Svg_vegetable_soup,
      text: "vegetable soup",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_vegetable_soup, "vegetable soup");
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
