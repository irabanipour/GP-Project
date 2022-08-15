import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_spoon from "./images/kitchen_items/spoon.svg";
import Svg_knife from "./images/kitchen_items/knife.svg";
import Svg_fork from "./images/kitchen_items/fork.svg";
import Svg_pan from "./images/kitchen_items/saucepan.svg";
import Svg_bowl from "./images/kitchen_items/bowl.svg";
import Svg_dish_cloth from "./images/kitchen_items/dish_cloth.svg";
import Svg_tea_towel from "./images/kitchen_items/tea_towel.svg";
import Svg_apron from "./images/tools_workshop/apron.svg";
import Svg_sink from "./images/building_contents/sink_2.svg";
import Svg_fridge from "./images/kitchen_items/fridge.svg";
import Svg_frying_pan from "./images/kitchen_items/frying_pan.svg";
import Svg_plate from "./images/kitchen_items/plate.svg";
import Svg_cooker from "./images/kitchen_items/cooker.svg";
import Svg_measuring_jug from "./images/kitchen_items/measuring_jug.svg";
import Svg_cup from "./images/drink_containers/mug_2.svg";
import Svg_chopping_board from "./images/kitchen_items/chopping_board.svg";
import Svg_collander from "./images/kitchen_items/colander.svg";
import Svg_grater from "./images/kitchen_items/grater.svg";
export default class Page_things_kitchen_things_index extends Component {
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
      image: Svg_spoon,
      text: "spoon",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_spoon, "spoon");
      },
    },
    {
      image: Svg_knife,
      text: "knife",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_knife, "knife");
      },
    },
    {
      image: Svg_fork,
      text: "fork",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fork, "fork");
      },
    },
    {
      image: Svg_pan,
      text: "pan",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pan, "pan");
      },
    },
    {
      image: Svg_bowl,
      text: "bowl",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bowl, "bowl");
      },
    },
    {
      image: Svg_dish_cloth,
      text: "dish cloth",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dish_cloth, "dish cloth");
      },
    },
    {
      image: Svg_tea_towel,
      text: "tea towel",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tea_towel, "tea towel");
      },
    },
    {
      image: Svg_apron,
      text: "apron",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_apron, "apron");
      },
    },
    {
      image: Svg_sink,
      text: "sink",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sink, "sink");
      },
    },
    {
      image: Svg_fridge,
      text: "fridge",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fridge, "fridge");
      },
    },
    {
      image: Svg_frying_pan,
      text: "frying pan",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_frying_pan, "frying pan");
      },
    },
    {
      image: Svg_plate,
      text: "plate",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_plate, "plate");
      },
    },
    {
      image: Svg_cooker,
      text: "cooker",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cooker, "cooker");
      },
    },
    {
      image: Svg_measuring_jug,
      text: "measuring jug",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_measuring_jug, "measuring jug");
      },
    },
    {
      image: Svg_cup,
      text: "cup",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cup, "cup");
      },
    },
    {
      image: Svg_chopping_board,
      text: "chopping board",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chopping_board, "chopping board");
      },
    },
    {
      image: Svg_collander,
      text: "collander",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_collander, "collander");
      },
    },
    {
      image: Svg_grater,
      text: "grater",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_grater, "grater");
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
