import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_to_go_outside from "./images/descriptive_position/outside.svg";
import Svg_to_call_someone from "./images/electrical_phone/mobile_phone.svg";
import Svg_to_sit_down from "./images/electrical_computer/sit_at_computer_,_to_2.svg";
import Svg_to_stand_up from "./images/people_descriptive/good_person.svg";
import Svg_to_do_something_else from "./images/healthcare_body/fist.svg";
import Svg_to_watch_something from "./images/people_feelings/face_neutral_3.svg";
import Svg_to_go_on_holiday from "./images/people_actions/relax_3_,_to.svg";
import Svg_to_have_a_go from "./images/transport_road/traffic_lights.svg";
import Svg_to_play from "./images/leisure_toys/toys.svg";
import Svg_to_listen_to_something from "./images/healthcare_body/ear.svg";
import Svg_to_go_swimming from "./images/sport/swim_,_to.svg";
import Svg_to_cook_something from "./images/kitchen_actions/cook_,_to.svg";
import Svg_My_stories from "./images/people_descriptive/funny_laugh.svg";
import Svg_to_go_Home from "./images/building_residential/house.svg";
export default class Page_leisure_want_index extends Component {
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
      image: Svg_to_go_outside,
      text: "to go outside",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_to_go_outside, "to go outside");
      },
    },
    {
      image: Svg_to_call_someone,
      text: "to call someone",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_to_call_someone, "to call someone");
      },
    },
    {
      image: Svg_to_sit_down,
      text: "to sit down",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_to_sit_down, "to sit down");
      },
    },
    {
      image: Svg_to_stand_up,
      text: "to stand up",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_to_stand_up, "to stand up");
      },
    },
    {
      image: Svg_to_do_something_else,
      text: "to do something else",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_to_do_something_else,
          "to do something else"
        );
      },
    },
    {
      image: Svg_to_watch_something,
      text: "to watch something",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_to_watch_something,
          "to watch something"
        );
      },
    },
    {
      image: Svg_to_go_on_holiday,
      text: "to go on holiday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_to_go_on_holiday, "to go on holiday");
      },
    },
    {
      image: Svg_to_have_a_go,
      text: "to have a go",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_to_have_a_go, "to have a go");
      },
    },
    {
      image: Svg_to_play,
      text: "to play",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_to_play, "to play");
      },
    },
    {
      image: Svg_to_listen_to_something,
      text: "to listen to something",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_to_listen_to_something,
          "to listen to something"
        );
      },
    },
    {
      image: Svg_to_go_swimming,
      text: "to go swimming",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_to_go_swimming, "to go swimming");
      },
    },
    {
      image: Svg_to_cook_something,
      text: "to cook something",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_to_cook_something,
          "to cook something"
        );
      },
    },
    {
      image: Svg_My_stories,
      text: "My stories",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_My_stories, "My stories");
      },
    },
    {
      image: Svg_to_go_Home,
      text: "to go Home",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_to_go_Home, "to go Home");
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
