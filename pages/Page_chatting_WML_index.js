import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_cool from "./images/clothes_accessories/sunglasses.svg";
import Svg_Are_you_ignoring_me from "./images/people_feelings/jealous_man.svg";
import Svg_leave_me_alone from "./images/descriptive_direction/go_through_door_,_to.svg";
import Svg_lucky from "./images/descriptive_state/lucky.svg";
import Svg_chill_out from "./images/people_actions/relax_3_,_to.svg";
import Svg_go_away from "./images/sport/race_athletics.svg";
import Svg_loser from "./images/descriptive_position/last_2.svg";
import Svg_wow from "./images/wow.svg";
import Svg_minga from "./images/people_descriptive/ugly.svg";
import Svg_Your_doing_my_head_in from "./images/medical_conditions/headache.svg";
import Svg_whatever from "./images/hand.svg";
import Svg_no_way from "./images/descriptive_state/bad.svg";
import Svg_shut_up from "./images/people_descriptive/quiet.svg";
import Svg_Were_you_put_on_this_earth_to_annoy_me from "./images/science_astronomy/Earth.svg";
import Svg_dont from "./images/healthcare_body/finger.svg";
import Svg_not from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_well from "./images/healthcare_body/fist.svg";
export default class Page_chatting_WML_index extends Component {
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
      image: Svg_cool,
      text: "cool",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cool, "cool");
      },
    },
    {
      image: Svg_Are_you_ignoring_me,
      text: "Are you ignoring me?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Are_you_ignoring_me,
          "Are you ignoring me?"
        );
      },
    },
    {
      image: Svg_leave_me_alone,
      text: "leave me alone",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_leave_me_alone, "leave me alone");
      },
    },
    {
      image: Svg_lucky,
      text: "lucky",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lucky, "lucky");
      },
    },
    {
      image: Svg_chill_out,
      text: "chill out",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chill_out, "chill out");
      },
    },
    {
      image: Svg_go_away,
      text: "go away",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_go_away, "go away");
      },
    },
    {
      image: Svg_loser,
      text: "loser",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_loser, "loser");
      },
    },
    {
      image: Svg_wow,
      text: "wow",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wow, "wow");
      },
    },
    {
      image: Svg_minga,
      text: "minga",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_minga, "minga");
      },
    },
    {
      image: Svg_Your_doing_my_head_in,
      text: "Your doing my head in",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Your_doing_my_head_in,
          "Your doing my head in"
        );
      },
    },
    {
      image: Svg_whatever,
      text: "whatever",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_whatever, "whatever");
      },
    },
    {
      image: Svg_no_way,
      text: "no way",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_no_way, "no way");
      },
    },
    {
      image: Svg_shut_up,
      text: "shut up",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_shut_up, "shut up");
      },
    },
    {
      image: Svg_Were_you_put_on_this_earth_to_annoy_me,
      text: "Were you put on this earth to annoy me?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Were_you_put_on_this_earth_to_annoy_me,
          "Were you put on this earth to annoy me?"
        );
      },
    },
    {
      image: Svg_dont,
      text: "dont",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dont, "dont");
      },
    },
    {
      image: Svg_not,
      text: "not",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_not, "not");
      },
    },
    {
      image: Svg_well,
      text: "well",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_well, "well");
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
