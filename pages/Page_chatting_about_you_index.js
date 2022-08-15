import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_Whats_your_name from "./images/question/who.svg";
import Svg_Where_do_you_live from "./images/question/where_1.svg";
import Svg_Whens_your_Birthday from "./images/celebration_event/celebrate_birthday.svg";
import Svg_How_old_are_you from "./images/people_descriptive/old_person_3.svg";
import Svg_Who_do_you_live_with from "./images/building_residential/house.svg";
import Svg_Do_you_have_a_pet from "./images/animal_habitat/goldfish_bowl.svg";
import Svg_Tell_me_about_your_day from "./images/building_school/school.svg";
import Svg_Whats_your_email from "./images/computer_icon/email.svg";
import Svg_Where_do_you_work from "./images/work_subjects/group_work.svg";
import Svg_Whats_your_mobile_number from "./images/electrical_phone/mobile_phone.svg";
import Svg_What_music_do_you_like from "./images/work_subjects/music.svg";
import Svg_What_films_do_you_like from "./images/electrical_tv/comedy_tv.svg";
import Svg_Whats_your_hobby from "./images/leisure_toys/ball_beach.svg";
import Svg_What_TV_do_you_like from "./images/electrical_tv/change_tv_channel_,_to.svg";
import Svg_Do_you_have_a_disability from "./images/communication_signs/disabled_sign.svg";
export default class Page_chatting_about_you_index extends Component {
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
      image: Svg_Whats_your_name,
      text: "What's your name?",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Whats_your_name, "What's your name?");
      },
    },
    {
      image: Svg_Where_do_you_live,
      text: "Where do you live?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Where_do_you_live,
          "Where do you live?"
        );
      },
    },
    {
      image: Svg_Whens_your_Birthday,
      text: "When's your Birthday?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Whens_your_Birthday,
          "When's your Birthday?"
        );
      },
    },
    {
      image: Svg_How_old_are_you,
      text: "How old are you?",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_How_old_are_you, "How old are you?");
      },
    },
    {
      image: Svg_Who_do_you_live_with,
      text: "Who do you live with?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Who_do_you_live_with,
          "Who do you live with?"
        );
      },
    },
    {
      image: Svg_Do_you_have_a_pet,
      text: "Do you have a pet?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Do_you_have_a_pet,
          "Do you have a pet?"
        );
      },
    },
    {
      image: Svg_Tell_me_about_your_day,
      text: "Tell me about your day?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Tell_me_about_your_day,
          "Tell me about your day?"
        );
      },
    },
    {
      image: Svg_Whats_your_email,
      text: "What's your email?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Whats_your_email,
          "What's your email?"
        );
      },
    },
    {
      image: Svg_Where_do_you_work,
      text: "Where do you work?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Where_do_you_work,
          "Where do you work?"
        );
      },
    },
    {
      image: Svg_Whats_your_mobile_number,
      text: "What's your mobile number?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Whats_your_mobile_number,
          "What's your mobile number?"
        );
      },
    },
    {
      image: Svg_What_music_do_you_like,
      text: "What music do you like?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_What_music_do_you_like,
          "What music do you like?"
        );
      },
    },
    {
      image: Svg_What_films_do_you_like,
      text: "What films do you like?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_What_films_do_you_like,
          "What films do you like?"
        );
      },
    },
    {
      image: Svg_Whats_your_hobby,
      text: "What's your hobby?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Whats_your_hobby,
          "What's your hobby?"
        );
      },
    },
    {
      image: Svg_What_TV_do_you_like,
      text: "What TV do you like?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_What_TV_do_you_like,
          "What TV do you like?"
        );
      },
    },
    {
      image: Svg_Do_you_have_a_disability,
      text: "Do you have a disability?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Do_you_have_a_disability,
          "Do you have a disability?"
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
