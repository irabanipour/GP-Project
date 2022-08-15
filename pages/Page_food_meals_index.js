import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_meal from "./images/food_feeding/dinner.svg";
import Svg_pasty from "./images/food_meals/pastie.svg";
import Svg_spaghetti from "./images/food_meals/spaghetti_bolognaise.svg";
import Svg_pasta from "./images/food_pastas/pasta.svg";
import Svg_stew from "./images/food_meals/casserole_1.svg";
import Svg_pizza from "./images/food_meals/pizza.svg";
import Svg_roast_dinner from "./images/food_meals/roast_dinner.svg";
import Svg_chinese_food from "./images/food_meals/chinese_food.svg";
import Svg_curry from "./images/food_meals/curry.svg";
import Svg_rice from "./images/food_pastas/rice.svg";
import Svg_noodles from "./images/food_pastas/noodles.svg";
import Svg_pie from "./images/food_breads/pie.svg";
import Svg_lasgna from "./images/food_pastas/lasagne.svg";
import Svg_ravioli from "./images/food_pastas/ravioli.svg";
import Svg_macaroni_cheese from "./images/food_meals/macaroni_cheese.svg";
export default class Page_food_meals_index extends Component {
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
      image: Svg_meal,
      text: "meal",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_meal, "meal");
      },
    },
    {
      image: Svg_pasty,
      text: "pasty",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pasty, "pasty");
      },
    },
    {
      image: Svg_spaghetti,
      text: "spaghetti",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_spaghetti, "spaghetti");
      },
    },
    {
      image: Svg_pasta,
      text: "pasta",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pasta, "pasta");
      },
    },
    {
      image: Svg_stew,
      text: "stew",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_stew, "stew");
      },
    },
    {
      image: Svg_pizza,
      text: "pizza",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pizza, "pizza");
      },
    },
    {
      image: Svg_roast_dinner,
      text: "roast dinner",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_roast_dinner, "roast dinner");
      },
    },
    {
      image: Svg_chinese_food,
      text: "chinese food",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chinese_food, "chinese food");
      },
    },
    {
      image: Svg_curry,
      text: "curry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_curry, "curry");
      },
    },
    {
      image: Svg_rice,
      text: "rice",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_rice, "rice");
      },
    },
    {
      image: Svg_noodles,
      text: "noodles",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_noodles, "noodles");
      },
    },
    {
      image: Svg_pie,
      text: "pie",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pie, "pie");
      },
    },
    {
      image: Svg_lasgna,
      text: "lasgna",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lasgna, "lasgna");
      },
    },
    {
      image: Svg_ravioli,
      text: "ravioli",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ravioli, "ravioli");
      },
    },
    {
      image: Svg_macaroni_cheese,
      text: "macaroni cheese",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_macaroni_cheese, "macaroni cheese");
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
