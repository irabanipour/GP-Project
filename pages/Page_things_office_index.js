import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_office from "./images/building_office/office_block.svg";
import Svg_chair from "./images/building_furniture/chair_computer.svg";
import Svg_filing_cabinet from "./images/building_furniture/filing_cabinet.svg";
import Svg_computer from "./images/electrical_computer/computer_2.svg";
import Svg_photocopier from "./images/building_equipment/photocopier.svg";
import Svg_bin from "./images/building_contents/waste_paper_bin.svg";
import Svg_desk from "./images/building_furniture/desk.svg";
import Svg_file from "./images/work_stationery/arch_lever_file.svg";
import Svg_fax from "./images/electrical_general/fax_machine.svg";
import Svg_pen from "./images/work_stationery/pen.svg";
import Svg_pencil from "./images/work_stationery/pencil.svg";
import Svg_scissors from "./images/healthcare_grooming/scissors.svg";
import Svg_envelope from "./images/work_stationery/envelope.svg";
import Svg_paper from "./images/work_stationery/paper.svg";
import Svg_paperclip from "./images/work_stationery/paperclip.svg";
import Svg_label from "./images/work_stationery/labels.svg";
export default class Page_things_office_index extends Component {
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
      image: Svg_office,
      text: "office",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_office, "office");
      },
    },
    {
      image: Svg_chair,
      text: "chair",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chair, "chair");
      },
    },
    {
      image: Svg_filing_cabinet,
      text: "filing cabinet",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_filing_cabinet, "filing cabinet");
      },
    },
    {
      image: Svg_computer,
      text: "computer",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_computer, "computer");
      },
    },
    {
      image: Svg_photocopier,
      text: "photocopier",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_photocopier, "photocopier");
      },
    },
    {
      image: Svg_bin,
      text: "bin",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bin, "bin");
      },
    },
    {
      image: Svg_desk,
      text: "desk",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_desk, "desk");
      },
    },
    {
      image: Svg_file,
      text: "file",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_file, "file");
      },
    },
    {
      image: Svg_fax,
      text: "fax",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fax, "fax");
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
      image: Svg_envelope,
      text: "envelope",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_envelope, "envelope");
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
      image: Svg_paperclip,
      text: "paperclip",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_paperclip, "paperclip");
      },
    },
    {
      image: Svg_label,
      text: "label",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_label, "label");
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
