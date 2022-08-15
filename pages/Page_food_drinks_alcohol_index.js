import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_alcohol from "./images/drink_type/lager.svg";
import Svg_beer from "./images/drink_type/beer.svg";
import Svg_white_wine from "./images/drink_type/wine.svg";
import Svg_red_wine from "./images/drink_type/wine.svg";
export default class Page_food_drinks_alcohol_index extends Component {
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
      image: Svg_alcohol,
      text: "alcohol",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_alcohol, "alcohol");
      },
    },
    {
      image: Svg_beer,
      text: "beer",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_beer, "beer");
      },
    },
    {
      image: Svg_white_wine,
      text: "white wine",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_white_wine, "white wine");
      },
    },
    {
      image: Svg_red_wine,
      text: "red wine",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_red_wine, "red wine");
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
