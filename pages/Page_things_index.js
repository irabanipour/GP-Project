import { Component } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_Things from "./images/building_furniture/dining_table.svg";
import Svg_art_things from "./images/art_making/craft_table.svg";
import Svg_health from "./images/medical_conditions/stomach_ache.svg";
import Svg_body_parts from "./images/healthcare_body/body_outline.svg";
import Svg_clothes from "./images/clothes_general/clothes_generic.svg";
import Svg_computer from "./images/electrical_computer/computer_2.svg";
import Svg_furniture from "./images/building_furniture/furniture.svg";
import Svg_toys from "./images/leisure_toys/toys.svg";
import Svg_kitchen_things from "./images/kitchen_items/place_setting.svg";
import Svg_money from "./images/money/money.svg";
import Svg_office from "./images/building_office/office_block.svg";
import Svg_sports from "./images/sport/swim_,_to.svg";
import Svg_Things_that_help from "./images/medical_items/hoist.svg";
import Svg_toiletries from "./images/healthcare_grooming/toilet_roll.svg";
import Svg_tools from "./images/tools_workshop/drill_electric.svg";
import Svg_transport from "./images/transport_rail/train.svg";
import Svg_nature from "./images/plants_trees/tree.svg";
import NavigationBar from "../components/NavigationBar";

export default class Page_things_index extends Component {
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
      image: Svg_Things,
      text: "Things",
      onPress: () => {
        this.props.navigation.navigate("Things_things");
      },
    },
    {
      image: Svg_art_things,
      text: "art things",
      onPress: () => {
        this.props.navigation.navigate("Things_art_things");
      },
    },
    {
      image: Svg_health,
      text: "health",
      onPress: () => {
        this.props.navigation.navigate("Things_health");
      },
    },
    {
      image: Svg_body_parts,
      text: "body parts",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_body_parts, "body parts");
      },
    },
    {
      image: Svg_clothes,
      text: "clothes",
      onPress: () => {
        this.props.navigation.navigate("Things_clothes");
      },
    },
    {
      image: Svg_computer,
      text: "computer",
      onPress: () => {
        this.props.navigation.navigate("Things_computer");
      },
    },
    {
      image: Svg_furniture,
      text: "furniture",
      onPress: () => {
        this.props.navigation.navigate("Things_furniture");
      },
    },
    {
      image: Svg_toys,
      text: "toys",
      onPress: () => {
        this.props.navigation.navigate("Things_toys");
      },
    },
    {
      image: Svg_kitchen_things,
      text: "kitchen things",
      onPress: () => {
        this.props.navigation.navigate("Things_kitchen_things");
      },
    },
    {
      image: Svg_money,
      text: "money",
      onPress: () => {
        this.props.navigation.navigate("Things_money");
      },
    },
    {
      image: Svg_office,
      text: "office",
      onPress: () => {
        this.props.navigation.navigate("Things_office");
      },
    },
    {
      image: Svg_sports,
      text: "sports",
      onPress: () => {
        this.props.navigation.navigate("Things_sports");
      },
    },
    {
      image: Svg_Things_that_help,
      text: "Things that help",
      onPress: () => {
        this.props.navigation.navigate("Things_help");
      },
    },
    {
      image: Svg_toiletries,
      text: "toiletries",
      onPress: () => {
        this.props.navigation.navigate("Things_toiletries");
      },
    },
    {
      image: Svg_tools,
      text: "tools",
      onPress: () => {
        this.props.navigation.navigate("Things_tools");
      },
    },
    {
      image: Svg_transport,
      text: "transport",
      onPress: () => {
        this.props.navigation.navigate("Things_transport");
      },
    },
    {
      image: Svg_nature,
      text: "nature",
      onPress: () => {
        this.props.navigation.navigate("Things_nature");
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
