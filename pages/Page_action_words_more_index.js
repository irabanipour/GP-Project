import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_feel from "./images/science/smooth.svg";
import Svg_read from "./images/work_education/work_book.svg";
import Svg_sit from "./images/electrical_computer/sit_at_computer_,_to_2.svg";
import Svg_stand from "./images/sport/exercise_,_to.svg";
import Svg_wait from "./images/healthcare_body/left_hand.svg";
import Svg_watch from "./images/healthcare_body/pupil.svg";
import Svg_work from "./images/work_subjects/group_work.svg";
import Svg_have from "./images/healthcare_body/fist.svg";
import Svg_know from "./images/descriptive_state/good.svg";
import Svg_play from "./images/leisure_toys/shape_puzzle.svg";
import Svg_sing from "./images/people_profession/singer_1a.svg";
import Svg_sleep from "./images/building_furniture/single_bed.svg";
import Svg_talk from "./images/people_feelings/laughing_lady.svg";
import Svg_try from "./images/descriptive_direction/point_,_to.svg";
import Svg_win from "./images/sport/winner.svg";
import Svg_lose from "./images/descriptive_position/last_2.svg";
import Svg_finish from "./images/descriptive_direction/finish.svg";
import Svg_need from "./images/healthcare_body/fist.svg";
import Svg_More_action_words from "./images/tools_actions/work_,_to.svg";
export default class Page_action_words_more_index extends Component {
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
      image: Svg_feel,
      text: "feel",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_feel, "feel");
      },
    },
    {
      image: Svg_read,
      text: "read",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_read, "read");
      },
    },
    {
      image: Svg_sit,
      text: "sit",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sit, "sit");
      },
    },
    {
      image: Svg_stand,
      text: "stand",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_stand, "stand");
      },
    },
    {
      image: Svg_wait,
      text: "wait",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wait, "wait");
      },
    },
    {
      image: Svg_watch,
      text: "watch",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_watch, "watch");
      },
    },
    {
      image: Svg_work,
      text: "work",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_work, "work");
      },
    },
    {
      image: Svg_have,
      text: "have",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_have, "have");
      },
    },
    {
      image: Svg_know,
      text: "know",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_know, "know");
      },
    },
    {
      image: Svg_play,
      text: "play",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_play, "play");
      },
    },
    {
      image: Svg_sing,
      text: "sing",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sing, "sing");
      },
    },
    {
      image: Svg_sleep,
      text: "sleep",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sleep, "sleep");
      },
    },
    {
      image: Svg_talk,
      text: "talk",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_talk, "talk");
      },
    },
    {
      image: Svg_try,
      text: "try",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_try, "try");
      },
    },
    {
      image: Svg_win,
      text: "win",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_win, "win");
      },
    },
    {
      image: Svg_lose,
      text: "lose",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lose, "lose");
      },
    },
    {
      image: Svg_finish,
      text: "finish",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_finish, "finish");
      },
    },
    {
      image: Svg_need,
      text: "need",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_need, "need");
      },
    },
    {
      image: Svg_More_action_words,
      text: "More action words",
      onPress: () => {
        this.props.navigation.navigate("Action_words_more_more");

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
