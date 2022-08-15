import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_material from "./images/science/plastic.svg";
import Svg_wood from "./images/tools_workshop/wood.svg";
import Svg_plastic from "./images/science/plastic.svg";
import Svg_fabric from "./images/science/fabric.svg";
import Svg_metal from "./images/money/gold_bar.svg";
import Svg_sponge from "./images/healthcare_grooming/sponge.svg";
import Svg_glass from "./images/science/glass.svg";
import Svg_stone from "./images/plants_trees/stone.svg";
import Svg_string from "./images/building_contents/string.svg";
import Svg_paper from "./images/work_stationery/paper.svg";
export default class Page_things_materials_index extends Component {
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
      image: Svg_material,
      text: "material",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_material, "material");
      },
    },
    {
      image: Svg_wood,
      text: "wood",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wood, "wood");
      },
    },
    {
      image: Svg_plastic,
      text: "plastic",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_plastic, "plastic");
      },
    },
    {
      image: Svg_fabric,
      text: "fabric",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fabric, "fabric");
      },
    },
    {
      image: Svg_metal,
      text: "metal",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_metal, "metal");
      },
    },
    {
      image: Svg_sponge,
      text: "sponge",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sponge, "sponge");
      },
    },
    {
      image: Svg_glass,
      text: "glass",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_glass, "glass");
      },
    },
    {
      image: Svg_stone,
      text: "stone",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_stone, "stone");
      },
    },
    {
      image: Svg_string,
      text: "string",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_string, "string");
      },
    },
    {
      image: Svg_paper,
      text: "paper",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_paper, "paper");
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
