import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_tools from "./images/tools_workshop/drill_electric.svg";
import Svg_clamp from "./images/tools_workshop/clamp.svg";
import Svg_drill from "./images/tools_workshop/drill_electric.svg";
import Svg_torch from "./images/electrical_general/torch.svg";
import Svg_goggles from "./images/tools_workshop/safety_goggles.svg";
import Svg_hammer from "./images/tools_workshop/hammer.svg";
import Svg_hardhat from "./images/clothes_general/hard_hat.svg";
import Svg_drill_bit from "./images/tools_workshop/drill_bit.svg";
import Svg_pliers from "./images/tools_workshop/pliers.svg";
import Svg_sandpaper from "./images/tools_workshop/sandpaper.svg";
import Svg_wrench from "./images/tools_workshop/wrench.svg";
import Svg_screwdriver from "./images/tools_workshop/screwdriver.svg";
import Svg_chisel from "./images/tools_workshop/chisel.svg";
import Svg_extension_lead from "./images/electrical_general/extension_lead.svg";
import Svg_screw from "./images/tools_workshop/screw.svg";
import Svg_materials from "./images/science/plastic.svg";
export default class Page_things_tools_index extends Component {
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
      image: Svg_tools,
      text: "tools",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tools, "tools");
      },
    },
    {
      image: Svg_clamp,
      text: "clamp",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_clamp, "clamp");
      },
    },
    {
      image: Svg_drill,
      text: "drill",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_drill, "drill");
      },
    },
    {
      image: Svg_torch,
      text: "torch",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_torch, "torch");
      },
    },
    {
      image: Svg_goggles,
      text: "goggles",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_goggles, "goggles");
      },
    },
    {
      image: Svg_hammer,
      text: "hammer",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hammer, "hammer");
      },
    },
    {
      image: Svg_hardhat,
      text: "hardhat",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hardhat, "hardhat");
      },
    },
    {
      image: Svg_drill_bit,
      text: "drill bit",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_drill_bit, "drill bit");
      },
    },
    {
      image: Svg_pliers,
      text: "pliers",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pliers, "pliers");
      },
    },
    {
      image: Svg_sandpaper,
      text: "sandpaper",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sandpaper, "sandpaper");
      },
    },
    {
      image: Svg_wrench,
      text: "wrench",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wrench, "wrench");
      },
    },
    {
      image: Svg_screwdriver,
      text: "screwdriver",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_screwdriver, "screwdriver");
      },
    },
    {
      image: Svg_chisel,
      text: "chisel",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chisel, "chisel");
      },
    },
    {
      image: Svg_extension_lead,
      text: "extension lead",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_extension_lead, "extension lead");
      },
    },
    {
      image: Svg_screw,
      text: "screw",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_screw, "screw");
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
