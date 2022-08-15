import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_fizzy_drink from "./images/drink_type/drink.svg";
import Svg_orangeade from "./images/drink_type/orange_fizzy_drink.svg";
import Svg_lemonade from "./images/drink_type/lemonade_2.svg";
import Svg_coke from "./images/coke.svg";
export default class Page_food_drinks_fizzy_index extends Component {
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
      image: Svg_fizzy_drink,
      text: "fizzy drink",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fizzy_drink, "fizzy drink");
      },
    },
    {
      image: Svg_orangeade,
      text: "orangeade",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_orangeade, "orangeade");
      },
    },
    {
      image: Svg_lemonade,
      text: "lemonade",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lemonade, "lemonade");
      },
    },
    {
      image: Svg_coke,
      text: "coke",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_coke, "coke");
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
