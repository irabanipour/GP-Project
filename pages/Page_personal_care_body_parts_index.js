import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_body from "./images/healthcare_body/body_outline.svg";
import Svg_hand from "./images/healthcare_body/fist.svg";
import Svg_head from "./images/healthcare_body/head.svg";
import Svg_finger from "./images/healthcare_body/finger.svg";
import Svg_chest from "./images/healthcare_body/chest_male.svg";
import Svg_ear from "./images/healthcare_body/ear.svg";
import Svg_face from "./images/people_feelings/face_neutral_3.svg";
import Svg_hair from "./images/people_descriptive/hair_bunches.svg";
import Svg_mouth from "./images/healthcare_body/mouth.svg";
import Svg_back from "./images/healthcare_body/spine.svg";
import Svg_nose from "./images/healthcare_body/nostril.svg";
import Svg_arm from "./images/healthcare_body/arm.svg";
import Svg_foot from "./images/healthcare_body/foot.svg";
import Svg_eye from "./images/healthcare_body/eye.svg";
import Svg_stomach from "./images/healthcare_body/stomach_1.svg";
import Svg_neck from "./images/healthcare_body/neck.svg";
import Svg_leg from "./images/healthcare_body/leg.svg";
import Svg_toes from "./images/healthcare_body/toe_nail.svg";
import Svg_private_parts from "./images/healthcare_body/male_body.svg";
export default class Page_personal_care_body_parts_index extends Component {
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
      image: Svg_body,
      text: "body",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_body, "body");
      },
    },
    {
      image: Svg_hand,
      text: "hand",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hand, "hand");
      },
    },
    {
      image: Svg_head,
      text: "head",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_head, "head");
      },
    },
    {
      image: Svg_finger,
      text: "finger",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_finger, "finger");
      },
    },
    {
      image: Svg_chest,
      text: "chest",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chest, "chest");
      },
    },
    {
      image: Svg_ear,
      text: "ear",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ear, "ear");
      },
    },
    {
      image: Svg_face,
      text: "face",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_face, "face");
      },
    },
    {
      image: Svg_hair,
      text: "hair",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hair, "hair");
      },
    },
    {
      image: Svg_mouth,
      text: "mouth",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mouth, "mouth");
      },
    },
    {
      image: Svg_back,
      text: "back",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_back, "back");
      },
    },
    {
      image: Svg_nose,
      text: "nose",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_nose, "nose");
      },
    },
    {
      image: Svg_arm,
      text: "arm",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_arm, "arm");
      },
    },
    {
      image: Svg_foot,
      text: "foot",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_foot, "foot");
      },
    },
    {
      image: Svg_eye,
      text: "eye",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_eye, "eye");
      },
    },
    {
      image: Svg_stomach,
      text: "stomach",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_stomach, "stomach");
      },
    },
    {
      image: Svg_neck,
      text: "neck",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_neck, "neck");
      },
    },
    {
      image: Svg_leg,
      text: "leg",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_leg, "leg");
      },
    },
    {
      image: Svg_toes,
      text: "toes",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toes, "toes");
      },
    },
    {
      image: Svg_private_parts,
      text: "private parts",
      onPress: () => {
        this.props.navigation.navigate("Personal_care_private_parts");
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
