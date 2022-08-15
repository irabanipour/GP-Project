import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_Dad from "./images/people_relationship/dad_parent.svg";
import Svg_Mum from "./images/people_relationship/mum_parent.svg";
import Svg_lady from "./images/people_feelings/lady_-_face.svg";
import Svg_man from "./images/people_feelings/man_-_face.svg";
import Svg_family from "./images/people_relationship/family.svg";
import Svg_brother from "./images/people_relationship/brother.svg";
import Svg_sister from "./images/people_relationship/sister.svg";
import Svg_baby from "./images/people_descriptive/baby.svg";
import Svg_child from "./images/people_descriptive/hair_ponytail.svg";
import Svg_Grandad from "./images/people_relationship/grandfather.svg";
import Svg_Granma from "./images/people_relationship/grandmother.svg";
export default class Page_people_family_index extends Component {
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
      image: Svg_Dad,
      text: "Dad",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Dad, "Dad");
      },
    },
    {
      image: Svg_Mum,
      text: "Mum",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Mum, "Mum");
      },
    },
    {
      image: Svg_lady,
      text: "lady",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lady, "lady");
      },
    },
    {
      image: Svg_man,
      text: "man",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_man, "man");
      },
    },
    {
      image: Svg_family,
      text: "family",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_family, "family");
      },
    },
    {
      image: Svg_brother,
      text: "brother",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_brother, "brother");
      },
    },
    {
      image: Svg_sister,
      text: "sister",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sister, "sister");
      },
    },
    {
      image: Svg_baby,
      text: "baby",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_baby, "baby");
      },
    },
    {
      image: Svg_child,
      text: "child",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_child, "child");
      },
    },
    {
      image: Svg_Grandad,
      text: "Grandad",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Grandad, "Grandad");
      },
    },
    {
      image: Svg_Granma,
      text: "Granma",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Granma, "Granma");
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
