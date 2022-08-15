import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_feeling from "./images/people_feelings/happy_lady.svg";
import Svg_afraid from "./images/people_feelings/afraid_lady.svg";
import Svg_safe from "./images/people_profession/care_assistant_1a.svg";
import Svg_busy from "./images/people_descriptive/busy.svg";
import Svg_It_is from "./images/descriptive_position/bottom.svg";
import Svg_board from "./images/leisure_games/armwrestle_,_to.svg";
import Svg_funny from "./images/people_descriptive/funny_laugh.svg";
import Svg_good from "./images/descriptive_state/good.svg";
import Svg_happy from "./images/people_feelings/happy_man.svg";
import Svg_I_am from "./images/people_descriptive/good_person.svg";
import Svg_tired from "./images/descriptive_time/bed_time.svg";
import Svg_angry from "./images/people_feelings/angry_man.svg";
import Svg_sad from "./images/people_feelings/sad_lady.svg";
import Svg_sick from "./images/medical_conditions/stomach_ache.svg";
import Svg_hot from "./images/people_descriptive/hot_person.svg";
import Svg_cold from "./images/cold.svg";
import Svg_bad from "./images/descriptive_state/bad.svg";
import Svg_scared from "./images/people_descriptive/scary.svg";
import Svg_confused from "./images/people_feelings/confused_man.svg";
export default class Page_describing_feelings_index extends Component {
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
      image: Svg_feeling,
      text: "feeling",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_feeling, "feeling");
      },
    },
    {
      image: Svg_afraid,
      text: "afraid",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_afraid, "afraid");
      },
    },
    {
      image: Svg_safe,
      text: "safe",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_safe, "safe");
      },
    },
    {
      image: Svg_busy,
      text: "busy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_busy, "busy");
      },
    },
    {
      image: Svg_It_is,
      text: "It is",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_It_is, "It is");
      },
    },
    {
      image: Svg_board,
      text: "board",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_board, "board");
      },
    },
    {
      image: Svg_funny,
      text: "funny",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_funny, "funny");
      },
    },
    {
      image: Svg_good,
      text: "good",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_good, "good");
      },
    },
    {
      image: Svg_happy,
      text: "happy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_happy, "happy");
      },
    },
    {
      image: Svg_I_am,
      text: "I am",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_I_am, "I am");
      },
    },
    {
      image: Svg_tired,
      text: "tired",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tired, "tired");
      },
    },
    {
      image: Svg_angry,
      text: "angry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_angry, "angry");
      },
    },
    {
      image: Svg_sad,
      text: "sad",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sad, "sad");
      },
    },
    {
      image: Svg_sick,
      text: "sick",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sick, "sick");
      },
    },
    {
      image: Svg_hot,
      text: "hot",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hot, "hot");
      },
    },
    {
      image: Svg_cold,
      text: "cold",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cold, "cold");
      },
    },
    {
      image: Svg_bad,
      text: "bad",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bad, "bad");
      },
    },
    {
      image: Svg_scared,
      text: "scared",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_scared, "scared");
      },
    },
    {
      image: Svg_confused,
      text: "confused",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_confused, "confused");
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
