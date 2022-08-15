import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_art from "./images/art_making/craft_table.svg";
import Svg_paint from "./images/work_stationery/paint_childs.svg";
import Svg_glitter from "./images/work_stationery/glitter.svg";
import Svg_sponge from "./images/healthcare_grooming/sponge.svg";
import Svg_tape from "./images/work_stationery/masking_tape.svg";
import Svg_eraser from "./images/work_stationery/pencil_case.svg";
import Svg_glue from "./images/work_stationery/glue_stick.svg";
import Svg_paintbrush from "./images/work_stationery/paint_brush.svg";
import Svg_paper from "./images/work_stationery/paper.svg";
import Svg_pen from "./images/work_stationery/pen.svg";
import Svg_pencil from "./images/work_stationery/pencil.svg";
import Svg_scissors from "./images/healthcare_grooming/scissors.svg";
import Svg_wrapping_paper from "./images/celebration_item/wrapping_paper.svg";
import Svg_materials from "./images/science/plastic.svg";
export default class Page_things_art_things_index extends Component {
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
      image: Svg_art,
      text: "art",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_art, "art");
      },
    },
    {
      image: Svg_paint,
      text: "paint",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_paint, "paint");
      },
    },
    {
      image: Svg_glitter,
      text: "glitter",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_glitter, "glitter");
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
      image: Svg_tape,
      text: "tape",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tape, "tape");
      },
    },
    {
      image: Svg_eraser,
      text: "eraser",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_eraser, "eraser");
      },
    },
    {
      image: Svg_glue,
      text: "glue",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_glue, "glue");
      },
    },
    {
      image: Svg_paintbrush,
      text: "paintbrush",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_paintbrush, "paintbrush");
      },
    },
    {
      image: Svg_paper,
      text: "paper",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_paper, "paper");
      },
    },
    {
      image: Svg_pen,
      text: "pen",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pen, "pen");
      },
    },
    {
      image: Svg_pencil,
      text: "pencil",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pencil, "pencil");
      },
    },
    {
      image: Svg_scissors,
      text: "scissors",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_scissors, "scissors");
      },
    },
    {
      image: Svg_wrapping_paper,
      text: "wrapping paper",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wrapping_paper, "wrapping paper");
      },
    },
    {
      image: Svg_materials,
      text: "materials",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_materials, "materials");
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
