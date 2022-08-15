import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_I_need_the_toilet from "./images/communication_conversation/need_toilet.svg";
import Svg_I_need_some_help from "./images/people_profession/care_assistant_2b.svg";
import Svg_I_dont_feel_well from "./images/medical_conditions/stomach_ache.svg";
import Svg_body_parts from "./images/healthcare_body/body_outline.svg";
import Svg_clothes from "./images/clothes_general/clothes_generic.svg";
import Svg_I_want_to_chill_out_on_my_bed from "./images/building_furniture/single_bed.svg";
import Svg_Id_like_a_shave from "./images/healthcare_grooming/shave_,_to.svg";
import Svg_I_need_my_medication from "./images/medical_items/medicine.svg";
import Svg_Please_can_you_clean_my_glasses from "./images/medical_items/glasses.svg";
import Svg_Can_you_do_my_nails_please from "./images/healthcare_grooming/nail_care.svg";
import Svg_Id_like_a_shower from "./images/healthcare_grooming/shower_1_,_to.svg";
import Svg_Id_love_a_bath from "./images/clothes_general/clothes_generic.svg";
import Svg_Ive_got_a_problem_with_my from "./images/communication_aid/wheelchair_and_switch_mount.svg";
import Svg_toiletries from "./images/healthcare_grooming/toilet_roll.svg";
import Svg_I_need_to_get_changed from "./images/healthcare_grooming/undress_,_to.svg";
import Svg_Can_you_do_my_hair_please from "./images/healthcare_grooming/dry_hair_2_,_to.svg";
export default class Page_personal_care_index extends Component {
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
      image: Svg_I_need_the_toilet,
      text: "I need the toilet",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_I_need_the_toilet,
          "I need the toilet"
        );
      },
    },
    {
      image: Svg_I_need_some_help,
      text: "I need some help",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_I_need_some_help, "I need some help");
      },
    },
    {
      image: Svg_I_dont_feel_well,
      text: "I don't feel well",
      onPress: () => {
        this.props.navigation.navigate("Personal_care_not_well");
      },
    },
    {
      image: Svg_body_parts,
      text: "body parts",
      onPress: () => {
        this.props.navigation.navigate("Personal_care_body_parts");
      },
    },
    {
      image: Svg_clothes,
      text: "clothes",
      onPress: () => {
        this.props.navigation.navigate("Personal_care_clothes");
      },
    },
    {
      image: Svg_I_want_to_chill_out_on_my_bed,
      text: "I want to chill out on my bed",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_I_want_to_chill_out_on_my_bed,
          "I want to chill out on my bed"
        );
      },
    },
    {
      image: Svg_Id_like_a_shave,
      text: "I'd like a shave",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Id_like_a_shave, "I'd like a shave");
      },
    },
    {
      image: Svg_I_need_my_medication,
      text: "I need my medication",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_I_need_my_medication,
          "I need my medication"
        );
      },
    },
    {
      image: Svg_Please_can_you_clean_my_glasses,
      text: "Please can you clean my glasses",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Please_can_you_clean_my_glasses,
          "Please can you clean my glasses"
        );
      },
    },
    {
      image: Svg_Can_you_do_my_nails_please,
      text: "Can you do my nails please",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Can_you_do_my_nails_please,
          "Can you do my nails please"
        );
      },
    },
    {
      image: Svg_Id_like_a_shower,
      text: "I'd like a shower",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Id_like_a_shower,
          "I'd like a shower"
        );
      },
    },
    {
      image: Svg_Id_love_a_bath,
      text: "I'd love a bath",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Id_love_a_bath, "I'd love a bath");
      },
    },
    {
      image: Svg_Ive_got_a_problem_with_my,
      text: "I've got a problem with my",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Ive_got_a_problem_with_my,
          "I've got a problem with my"
        );
      },
    },
    {
      image: Svg_toiletries,
      text: "toiletries",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toiletries, "toiletries");
      },
    },
    {
      image: Svg_I_need_to_get_changed,
      text: "I need to get changed",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_I_need_to_get_changed,
          "I need to get changed"
        );
      },
    },
    {
      image: Svg_Can_you_do_my_hair_please,
      text: "Can you do my hair please",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Can_you_do_my_hair_please,
          "Can you do my hair please"
        );
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
