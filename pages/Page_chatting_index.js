import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_About_Me from "./images/people_descriptive/good_person.svg";
import Svg_WML from "./images/descriptive_position/second_3.svg";
import Svg_I_cant_find_what_I_want_to_say from "./images/search.svg";
import Svg_bye from "./images/people_actions/exit_door_,_to.svg";
import Svg_Im_fine from "./images/people_profession/visitor_1a.svg";
import Svg_ok from "./images/descriptive_state/good.svg";
import Svg_Im_not_so_good from "./images/medical_conditions/stomach_ache.svg";
import Svg_please from "./images/hands.svg";
import Svg_thank_you from "./images/descriptive_state/great.svg";
import Svg_sorry from "./images/sorry.svg";
import Svg_excuse_me from "./images/medical_conditions/sneeze_cold.svg";
import Svg_maybe from "./images/maybe.svg";
import Svg_really from "./images/people_feelings/laughing_man.svg";
import Svg_I_dont_know from "./images/question/why.svg";
import Svg_My_stories from "./images/people_descriptive/funny_laugh.svg";
import Svg_I_love_you from "./images/love.svg";
import Svg_but from "./images/but.svg";
import Svg_Ouch from "./images/medical_conditions/cut.svg";
import Svg_so from "./images/so.svg";
export default class Page_chatting_index extends Component {
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
      image: Svg_About_Me,
      text: "About Me",
      onPress: () => {
        this.props.navigation.navigate("ChattingAboutMe");
      },
    },
    {
      image: Svg_WML,
      text: "WML",
      onPress: () => {
        this.props.navigation.navigate("ChattingWML");
      },
    },
    {
      image: Svg_I_cant_find_what_I_want_to_say,
      text: "I can't find what I want to say",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_I_cant_find_what_I_want_to_say,
          "I can't find what I want to say"
        );
      },
    },
    {
      image: Svg_bye,
      text: "bye",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bye, "bye");
      },
    },
    {
      image: Svg_Im_fine,
      text: "I'm fine",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Im_fine, "I'm fine");
      },
    },
    {
      image: Svg_ok,
      text: "ok",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ok, "ok");
      },
    },
    {
      image: Svg_Im_not_so_good,
      text: "I'm not so good",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Im_not_so_good, "I'm not so good");
      },
    },
    {
      image: Svg_please,
      text: "please",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_please, "please");
      },
    },
    {
      image: Svg_thank_you,
      text: "thank you",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_thank_you, "thank you");
      },
    },
    {
      image: Svg_sorry,
      text: "sorry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sorry, "sorry");
      },
    },
    {
      image: Svg_excuse_me,
      text: "excuse me",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_excuse_me, "excuse me");
      },
    },
    {
      image: Svg_maybe,
      text: "maybe",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_maybe, "maybe");
      },
    },
    {
      image: Svg_really,
      text: "really",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_really, "really");
      },
    },
    {
      image: Svg_I_dont_know,
      text: "I don't know",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_I_dont_know, "I don't know");
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
      image: Svg_I_love_you,
      text: "I love you",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_I_love_you, "I love you");
      },
    },
    {
      image: Svg_but,
      text: "but",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_but, "but");
      },
    },
    {
      image: Svg_Ouch,
      text: "Ouch",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Ouch, "Ouch");
      },
    },
    {
      image: Svg_so,
      text: "so",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_so, "so");
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
