import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_do from "./images/healthcare_body/fist.svg";
import Svg_help from "./images/people_profession/care_assistant_2b.svg";
import Svg_look from "./images/healthcare_body/eyes_green.svg";
import Svg_see from "./images/healthcare_body/eyes_blue.svg";
import Svg_stop from "./images/transport_road/traffic_lights.svg";
import Svg_come from "./images/come.svg";
import Svg_get from "./images/leisure_toys/car_toy.svg";
import Svg_give from "./images/kitchen_actions/sprinkle_,_to.svg";
import Svg_think from "./images/think.svg";
import Svg_like from "./images/descriptive_state/great.svg";
import Svg_listen from "./images/healthcare_body/ear.svg";
import Svg_make from "./images/tools_actions/work_,_to.svg";
import Svg_put from "./images/put.svg";
import Svg_tell from "./images/people_feelings/man_-_face.svg";
import Svg_take from "./images/science/smooth.svg";
import Svg_turn from "./images/descriptive_direction/around.svg";
import Svg_open from "./images/descriptive_position/open_2.svg";
import Svg_close from "./images/descriptive_position/closed.svg";
import Svg_More_action_words from "./images/tools_actions/work_,_to.svg";
export default class Page_action_words_index extends Component {
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
      image: Svg_do,
      text: "do",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_do, "do");
      },
    },
    {
      image: Svg_help,
      text: "help",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_help, "help");
      },
    },
    {
      image: Svg_look,
      text: "look",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_look, "look");
      },
    },
    {
      image: Svg_see,
      text: "see",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_see, "see");
      },
    },
    {
      image: Svg_stop,
      text: "stop",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_stop, "stop");
      },
    },
    {
      image: Svg_come,
      text: "come",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_come, "come");
      },
    },
    {
      image: Svg_get,
      text: "get",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_get, "get");
      },
    },
    {
      image: Svg_give,
      text: "give",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_give, "give");
      },
    },
    {
      image: Svg_think,
      text: "think",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_think, "think");
      },
    },
    {
      image: Svg_like,
      text: "like",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_like, "like");
      },
    },
    {
      image: Svg_listen,
      text: "listen",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_listen, "listen");
      },
    },
    {
      image: Svg_make,
      text: "make",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_make, "make");
      },
    },
    {
      image: Svg_put,
      text: "put",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_put, "put");
      },
    },
    {
      image: Svg_tell,
      text: "tell",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tell, "tell");
      },
    },
    {
      image: Svg_take,
      text: "take",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_take, "take");
      },
    },
    {
      image: Svg_turn,
      text: "turn",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_turn, "turn");
      },
    },
    {
      image: Svg_open,
      text: "open",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_open, "open");
      },
    },
    {
      image: Svg_close,
      text: "close",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_close, "close");
      },
    },
    {
      image: Svg_More_action_words,
      text: "More action words",
      onPress: () => {
        this.props.navigation.navigate("Action_words_more");
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
