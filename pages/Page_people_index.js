import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_people from "./images/work_timetable/assembly.svg";
import Svg_friends from "./images/people_profession/care_assistant_1a.svg";
import Svg_Schoolcollegework_mates from "./images/building_school/class_room.svg";
import Svg_Support_staff from "./images/people_profession/care_assistant_2a.svg";
import Svg_Im from "./images/people_descriptive/good_person.svg";
import Svg_me from "./images/people_descriptive/good_person.svg";
import Svg_my from "./images/people_descriptive/good_person.svg";
import Svg_mine from "./images/people_descriptive/good_person.svg";
import Svg_Education_staff from "./images/people_profession/teacher_2a.svg";
import Svg_we from "./images/work_timetable/assembly.svg";
import Svg_they from "./images/work_timetable/assembly.svg";
import Svg_boy from "./images/people_descriptive/handsome.svg";
import Svg_girl from "./images/people_descriptive/hair_ponytail.svg";
import Svg_Job from "./images/people_relationship/family_2.svg";
import Svg_it from "./images/descriptive_position/bottom.svg";
import Svg_you from "./images/descriptive_direction/point_,_to.svg";
import Svg_he from "./images/people_descriptive/handsome.svg";
import Svg_she from "./images/people_descriptive/hair_ponytail.svg";
import Svg_Family from "./images/people_relationship/family.svg";
export default class Page_people_index extends Component {
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
      image: Svg_people,
      text: "people",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_people, "people");
      },
    },
    {
      image: Svg_friends,
      text: "friends",
      onPress: () => {
        this.props.navigation.navigate("People_friends");
      },
    },
    {
      image: Svg_Schoolcollegework_mates,
      text: "School/college/work mates",
      onPress: () => {
        this.props.navigation.navigate("People_work_mates");
      },
    },
    {
      image: Svg_Support_staff,
      text: "Support staff",
      onPress: () => {
        this.props.navigation.navigate("People_support_staff");
      },
    },
    {
      image: Svg_Im,
      text: "I'm",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Im, "I'm");
      },
    },
    {
      image: Svg_me,
      text: "me",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_me, "me");
      },
    },
    {
      image: Svg_my,
      text: "my",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_my, "my");
      },
    },
    {
      image: Svg_mine,
      text: "mine",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mine, "mine");
      },
    },
    {
      image: Svg_Education_staff,
      text: "Education staff",
      onPress: () => {
        this.props.navigation.navigate("People_education_staff");
      },
    },
    {
      image: Svg_we,
      text: "we",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_we, "we");
      },
    },
    {
      image: Svg_they,
      text: "they",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_they, "they");
      },
    },
    {
      image: Svg_boy,
      text: "boy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_boy, "boy");
      },
    },
    {
      image: Svg_girl,
      text: "girl",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_girl, "girl");
      },
    },
    {
      image: Svg_Job,
      text: "Job",
      onPress: () => {
        this.props.navigation.navigate("People_job");
      },
    },
    {
      image: Svg_it,
      text: "it",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_it, "it");
      },
    },
    {
      image: Svg_you,
      text: "you",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_you, "you");
      },
    },
    {
      image: Svg_he,
      text: "he",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_he, "he");
      },
    },
    {
      image: Svg_she,
      text: "she",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_she, "she");
      },
    },
    {
      image: Svg_Family,
      text: "Family",
      onPress: () => {
        this.props.navigation.navigate("People_family");
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
