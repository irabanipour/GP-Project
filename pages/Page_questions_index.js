import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_Questions from "./images/question/how.svg";
import Svg_why from "./images/question/why.svg";
import Svg_when from "./images/question/when.svg";
import Svg_could from "./images/could.svg";
import Svg_what from "./images/question/what.svg";
import Svg_who from "./images/question/who.svg";
import Svg_where from "./images/question/where.svg";
import Svg_which from "./images/question/which.svg";
import Svg_would from "./images/could.svg";
import Svg_how from "./images/question/how.svg";
import Svg_Can_I_see_that from "./images/people_descriptive/good_person.svg";
import Svg_How_much from "./images/money/money.svg";
import Svg_should from "./images/could.svg";
import Svg_How_are_you from "./images/people_descriptive/funny_laugh.svg";
import Svg_What_have_you_been_doing from "./images/work_subjects/group_work.svg";
import Svg_What_do_you_think from "./images/descriptive_direction/point_,_to.svg";
import Svg_Whats_next from "./images/descriptive_position/next.svg";
import Svg_Whats_that from "./images/descriptive_shape/triangle_equilateral.svg";
export default class Page_questions_index extends Component {
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
      image: Svg_Questions,
      text: "Questions",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Questions, "Questions");
      },
    },
    {
      image: Svg_why,
      text: "why",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_why, "why");
      },
    },
    {
      image: Svg_when,
      text: "when",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_when, "when");
      },
    },
    {
      image: Svg_could,
      text: "could",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_could, "could");
      },
    },
    {
      image: Svg_what,
      text: "what",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_what, "what");
      },
    },
    {
      image: Svg_who,
      text: "who",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_who, "who");
      },
    },
    {
      image: Svg_where,
      text: "where",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_where, "where");
      },
    },
    {
      image: Svg_which,
      text: "which",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_which, "which");
      },
    },
    {
      image: Svg_would,
      text: "would",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_would, "would");
      },
    },
    {
      image: Svg_how,
      text: "how",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_how, "how");
      },
    },
    {
      image: Svg_Can_I_see_that,
      text: "Can I see that?",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Can_I_see_that, "Can I see that?");
      },
    },
    {
      image: Svg_How_much,
      text: "How much?",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_How_much, "How much?");
      },
    },
    {
      image: Svg_should,
      text: "should",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_should, "should");
      },
    },
    {
      image: Svg_How_are_you,
      text: "How are you?",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_How_are_you, "How are you?");
      },
    },
    {
      image: Svg_What_have_you_been_doing,
      text: "What have you been doing?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_What_have_you_been_doing,
          "What have you been doing?"
        );
      },
    },
    {
      image: Svg_What_do_you_think,
      text: "What do you think?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_What_do_you_think,
          "What do you think?"
        );
      },
    },
    {
      image: Svg_Whats_next,
      text: "What's next?",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Whats_next, "What's next?");
      },
    },
    {
      image: Svg_Whats_that,
      text: "What's that?",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Whats_that, "What's that?");
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
