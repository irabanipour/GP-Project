import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_Name from "./images/people_descriptive/good_person.svg";
import Svg_I_live_in from "./images/building_residential/house.svg";
import Svg_Birthday from "./images/celebration_event/celebrate_birthday.svg";
import Svg_age from "./images/people_descriptive/old_person_3.svg";
import Svg_I_live_with from "./images/building_residential/house.svg";
import Svg_pet from "./images/animal_habitat/goldfish_bowl.svg";
import Svg_School__college from "./images/building_school/school.svg";
import Svg_email from "./images/computer_icon/email.svg";
import Svg_work from "./images/work_subjects/group_work.svg";
import Svg_Communication_aid from "./images/communication_aid/communication_aid_techspeak_32.svg";
import Svg_music from "./images/work_subjects/music.svg";
import Svg_film from "./images/electrical_tv/comedy_tv.svg";
import Svg_hobby from "./images/leisure_toys/ball_beach.svg";
import Svg_TV from "./images/electrical_tv/change_tv_channel_,_to.svg";
import Svg_disability from "./images/communication_signs/disabled_sign.svg";
import Svg_mobile from "./images/electrical_phone/mobile_phone.svg";
import Svg_Tell_me_about_you from "./images/people_feelings/serene_man.svg";
export default class Page_chatting_about_me_index extends Component {
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
      image: Svg_Name,
      text: "Name",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Name, "Name");
      },
    },
    {
      image: Svg_I_live_in,
      text: "I live in",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_I_live_in, "I live in");
      },
    },
    {
      image: Svg_Birthday,
      text: "Birthday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Birthday, "Birthday");
      },
    },
    {
      image: Svg_age,
      text: "age",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_age, "age");
      },
    },
    {
      image: Svg_I_live_with,
      text: "I live with",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_I_live_with, "I live with");
      },
    },
    {
      image: Svg_pet,
      text: "pet",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pet, "pet");
      },
    },
    {
      image: Svg_School__college,
      text: "School / college",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_School__college, "School / college");
      },
    },
    {
      image: Svg_email,
      text: "email",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_email, "email");
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
      image: Svg_Communication_aid,
      text: "Communication aid",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Communication_aid,
          "Communication aid"
        );
      },
    },
    {
      image: Svg_music,
      text: "music",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_music, "music");
      },
    },
    {
      image: Svg_film,
      text: "film",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_film, "film");
      },
    },
    {
      image: Svg_hobby,
      text: "hobby",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hobby, "hobby");
      },
    },
    {
      image: Svg_TV,
      text: "TV",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_TV, "TV");
      },
    },
    {
      image: Svg_disability,
      text: "disability",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_disability, "disability");
      },
    },
    {
      image: Svg_mobile,
      text: "mobile",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mobile, "mobile");
      },
    },
    {
      image: Svg_Tell_me_about_you,
      text: "Tell me about you",
      onPress: () => {
        this.props.navigation.navigate("ChattingAboutYou");
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
