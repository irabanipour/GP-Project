import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_breakfast from "./images/food_meals/breakfast_5.svg";
import Svg_lunch from "./images/food_meals/lunch_1.svg";
import Svg_meals from "./images/food_feeding/dinner.svg";
import Svg_meat_and_fish from "./images/food_meat/meat.svg";
import Svg_Im_hungry from "./images/food_feeding/hungry.svg";
import Svg_vegetables from "./images/food_vegetables/vegetables.svg";
import Svg_fruit from "./images/food_fruit/fruit.svg";
import Svg_drinks from "./images/drink_description/drinks.svg";
import Svg_fast_food from "./images/food_meals/takeaway_burger_and_chips.svg";
import Svg_Im_thirsty from "./images/food_feeding/thirsty.svg";
import Svg_snackspudding from "./images/food_sweets/ice_cream_2.svg";
import Svg_Saucesingredients from "./images/food_ingredients/sauce_tomato.svg";
import Svg_salad from "./images/food_vegetables/salad.svg";
import Svg_cooking_words from "./images/kitchen_actions/cook_,_to.svg";
import Svg_some from "./images/descriptive_state/spotty.svg";
import Svg_with from "./images/descriptive_quantity/some.svg";
import Svg_and from "./images/plus.svg";
import Svg_Food_chat from "./images/food_meals/ready_meal.svg";
import Svg_favorite_food from "./images/food_feeding/delicious_food.svg";
export default class Page_food_index extends Component {
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
      image: Svg_breakfast,
      text: "breakfast",
      onPress: () => {
        this.props.navigation.navigate("Food_breakfast");
      },
    },
    {
      image: Svg_lunch,
      text: "lunch",
      onPress: () => {
        this.props.navigation.navigate("Food_lunch");
      },
    },
    {
      image: Svg_meals,
      text: "meals",
      onPress: () => {
        this.props.navigation.navigate("Food_meals");
      },
    },
    {
      image: Svg_meat_and_fish,
      text: "meat and fish",
      onPress: () => {
        this.props.navigation.navigate("Food_meat_fish");
      },
    },
    {
      image: Svg_Im_hungry,
      text: "I'm hungry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Im_hungry, "I'm hungry");
      },
    },
    {
      image: Svg_vegetables,
      text: "vegetables",
      onPress: () => {
        this.props.navigation.navigate("Food_vegetables");
      },
    },
    {
      image: Svg_fruit,
      text: "fruit",
      onPress: () => {
        this.props.navigation.navigate("Food_fruit");
      },
    },
    {
      image: Svg_drinks,
      text: "drinks",
      onPress: () => {
        this.props.navigation.navigate("Food_drinks");
      },
    },
    {
      image: Svg_fast_food,
      text: "fast food",
      onPress: () => {
        this.props.navigation.navigate("Food_fast_food");
      },
    },
    {
      image: Svg_Im_thirsty,
      text: "I'm thirsty",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Im_thirsty, "I'm thirsty");
      },
    },
    {
      image: Svg_snackspudding,
      text: "snacks/pudding",
      onPress: () => {
        this.props.navigation.navigate("Food_snacks");
      },
    },
    {
      image: Svg_Saucesingredients,
      text: "Sauces/ingredients",
      onPress: () => {
        this.props.navigation.navigate("Food_sauces");

      },
    },
    {
      image: Svg_salad,
      text: "salad",
      onPress: () => {
        this.props.navigation.navigate("Food_salad");
      },
    },
    {
      image: Svg_cooking_words,
      text: "cooking words",
      onPress: () => {
        this.props.navigation.navigate("Food_cooking");
      },
    },
    {
      image: Svg_some,
      text: "some",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_some, "some");
      },
    },
    {
      image: Svg_with,
      text: "with",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_with, "with");
      },
    },
    {
      image: Svg_and,
      text: "and",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_and, "and");
      },
    },
    {
      image: Svg_Food_chat,
      text: "Food chat",
      onPress: () => {
        this.props.navigation.navigate("Food_food_chat");
      },
    },
    {
      image: Svg_favorite_food,
      text: "favorite food",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_favorite_food, "favorite food");
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
