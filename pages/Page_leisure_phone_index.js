import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_Hello from "./images/hand.svg";
import Svg_Chatting from "./images/communication_conversation/hello.svg";
import Svg_I_want_to_ask_you_something from "./images/question/how.svg";
import Svg_Call_me from "./images/electrical_phone/mobile_phone.svg";
import Svg_I_need_to_check_my_credit from "./images/money/money.svg";
import Svg_Id_like_to_call from "./images/work_timetable/assembly.svg";
import Svg_speak_soon from "./images/communication_conversation/hello.svg";
import Svg_Take_care from "./images/healthcare_body/thumbs.svg";
import Svg_I_need_to_charge_my_phone from "./images/electrical_phone/charger_electric.svg";
import Svg_When_will_I_see_you from "./images/healthcare_body/eyes_blue.svg";
import Svg_Tell_me_your_news from "./images/work_education/newspaper.svg";
import Svg_I_miss_you from "./images/people_descriptive/wrong_thought.svg";
import Svg_Happy_Birthday from "./images/celebration_event/celebrate_birthday.svg";
import Svg_Get_well_soon from "./images/medical_conditions/stomach_ache.svg";
import Svg_congratulations from "./images/celebration_event/celebration.svg";
export default class Page_leisure_phone_index extends Component {
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
      image: Svg_Hello,
      text: "Hello",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Hello, "Hello");
      },
    },
    {
      image: Svg_Chatting,
      text: "Chatting",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Chatting, "Chatting");
      },
    },
    {
      image: Svg_I_want_to_ask_you_something,
      text: "I want to ask you something",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_I_want_to_ask_you_something,
          "I want to ask you something"
        );
      },
    },
    {
      image: Svg_Call_me,
      text: "Call me",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Call_me, "Call me");
      },
    },
    {
      image: Svg_I_need_to_check_my_credit,
      text: "I need to check my credit",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_I_need_to_check_my_credit,
          "I need to check my credit"
        );
      },
    },
    {
      image: Svg_Id_like_to_call,
      text: "I'd like to call",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Id_like_to_call, "I'd like to call");
      },
    },
    {
      image: Svg_speak_soon,
      text: "speak soon",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_speak_soon, "speak soon");
      },
    },
    {
      image: Svg_Take_care,
      text: "Take care",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Take_care, "Take care");
      },
    },
    {
      image: Svg_I_need_to_charge_my_phone,
      text: "I need to charge my phone...",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_I_need_to_charge_my_phone,
          "I need to charge my phone..."
        );
      },
    },
    {
      image: Svg_When_will_I_see_you,
      text: "When will I see you?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_When_will_I_see_you,
          "When will I see you?"
        );
      },
    },
    {
      image: Svg_Tell_me_your_news,
      text: "Tell me your news",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Tell_me_your_news,
          "Tell me your news"
        );
      },
    },
    {
      image: Svg_I_miss_you,
      text: "I miss you",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_I_miss_you, "I miss you");
      },
    },
    {
      image: Svg_Happy_Birthday,
      text: "Happy Birthday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Happy_Birthday, "Happy Birthday");
      },
    },
    {
      image: Svg_Get_well_soon,
      text: "Get well soon",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Get_well_soon, "Get well soon");
      },
    },
    {
      image: Svg_congratulations,
      text: "congratulations",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_congratulations, "congratulations");
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
