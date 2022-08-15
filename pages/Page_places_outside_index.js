import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_outside_place from "./images/descriptive_position/outside.svg";
import Svg_street from "./images/holiday_travel/road.svg";
import Svg_car_park from "./images/holiday_travel/road.svg";
import Svg_beach from "./images/holiday_travel/beach.svg";
import Svg_countryside from "./images/holiday_travel/mountains.svg";
import Svg_lake from "./images/building_garden/pond.svg";
import Svg_woods from "./images/plants_trees/tree.svg";
import Svg_field from "./images/building_garden/field.svg";
import Svg_garden from "./images/building_garden/back_garden.svg";
export default class Page_places_outside_index extends Component {
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
      image: Svg_outside_place,
      text: "outside place",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_outside_place, "outside place");
      },
    },
    {
      image: Svg_street,
      text: "street",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_street, "street");
      },
    },
    {
      image: Svg_car_park,
      text: "car park",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_car_park, "car park");
      },
    },
    {
      image: Svg_beach,
      text: "beach",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_beach, "beach");
      },
    },
    {
      image: Svg_countryside,
      text: "countryside",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_countryside, "countryside");
      },
    },
    {
      image: Svg_lake,
      text: "lake",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lake, "lake");
      },
    },
    {
      image: Svg_woods,
      text: "woods",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_woods, "woods");
      },
    },
    {
      image: Svg_field,
      text: "field",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_field, "field");
      },
    },
    {
      image: Svg_garden,
      text: "garden",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_garden, "garden");
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
