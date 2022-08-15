import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_private_parts from "./images/healthcare_body/male_body.svg";
import Svg_bottom from "./images/healthcare_body/bottom_3.svg";
import Svg_breasts from "./images/healthcare_body/chest_female.svg";
import Svg_vagina from "./images/healthcare_body/vagina.svg";
import Svg_penis from "./images/healthcare_body/penis.svg";
import Svg_under_arm_hair from "./images/healthcare_body/underarm_hair.svg";
import Svg_horny from "./images/healthcare_body/chest_female.svg";
import Svg_love from "./images/love.svg";
import Svg_shared_pleasure from "./images/healthcare_body/female_body.svg";
import Svg_self_pleasure from "./images/healthcare_body/male_body.svg";
import Svg_kiss from "./images/healthcare_body/lips_1.svg";
export default class Page_personal_care_private_parts_index extends Component {
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
      image: Svg_private_parts,
      text: "private parts",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_private_parts, "private parts");
      },
    },
    {
      image: Svg_bottom,
      text: "bottom",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bottom, "bottom");
      },
    },
    {
      image: Svg_breasts,
      text: "breasts",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_breasts, "breasts");
      },
    },
    {
      image: Svg_vagina,
      text: "vagina",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_vagina, "vagina");
      },
    },
    {
      image: Svg_penis,
      text: "penis",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_penis, "penis");
      },
    },
    {
      image: Svg_under_arm_hair,
      text: "under arm hair",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_under_arm_hair, "under arm hair");
      },
    },
    {
      image: Svg_horny,
      text: "horny",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_horny, "horny");
      },
    },
    { 
      image: Svg_love,
      text: "love",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_love, "love");
      },
    },
    {
      image: Svg_shared_pleasure,
      text: "shared pleasure",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_shared_pleasure, "shared pleasure");
      },
    },
    {
      image: Svg_self_pleasure,
      text: "self pleasure",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_self_pleasure, "self pleasure");
      },
    },
    {
      image: Svg_kiss,
      text: "kiss",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_kiss, "kiss");
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
