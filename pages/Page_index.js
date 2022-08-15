import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Hello from "./images/communication_conversation/hello.svg";
import Svg_I_want_to_talk_to_you from "./images/people_feelings/serene_man.svg";
import Svg_Chatting from "./images/people_feelings/excited_lady.svg";
import Svg_Questions from "./images/question/how.svg";
import Svg_Food from "./images/food_breads/food.svg";
import Svg_I from "./images/people_descriptive/good_person.svg";
import Svg_People from "./images/work_timetable/assembly.svg";
import Svg_Personal_Care from "./images/healthcare_grooming/shower_1_,_to.svg";
import Svg_Little_Words from "./images/descriptive_quantity/little.svg";
import Svg_My_Day from "./images/building_school/school.svg";
import Svg_Action_Words from "./images/tools_actions/work_,_to.svg";
import Svg_go from "./images/transport_road/traffic_lights.svg";
import Svg_want from "./images/healthcare_body/fist.svg";
import Svg_Describing from "./images/leisure_toys/shapesorter.svg";
import Svg_Things from "./images/building_furniture/dining_table.svg";
import Svg_Clear from "./images/clear.svg";
import Svg_Time from "./images/electrical_general/clock.svg";
import Svg_Places from "./images/science_astronomy/Earth.svg";
import Svg_Leisure from "./images/leisure_toys/ball_beach.svg";
import Svg_Delete_Word from "./images/descriptive_direction/backwards.svg";
export default class Page_index extends Component {
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
      image: Svg_Hello,
      text: "Hello",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Hello, "Hello");
      },
    },
    {
      image: Svg_I_want_to_talk_to_you,
      text: "I want to talk to you",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_I_want_to_talk_to_you,
          "I want to talk to you"
        );
      },
    },
    {
      image: Svg_Chatting,
      text: "Chatting",
      onPress: () => {
        this.props.navigation.navigate("Chatting");
      },
    },
    {
      image: Svg_Questions,
      text: "Questions",
      onPress: () => {
        this.props.navigation.navigate("Questions");
      },
    },
    {
      image: Svg_Food,
      text: "Food",
      onPress: () => {
        this.props.navigation.navigate("Food");
      },
    },
    {
      image: Svg_I,
      text: "I",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_I, "I");
      },
    },
    {
      image: Svg_People,
      text: "People",
      onPress: () => {
        this.props.navigation.navigate("People");
      },
    },
    {
      image: Svg_Personal_Care,
      text: "Personal Care",
      onPress: () => {
        this.props.navigation.navigate("PersonalCare");
      },
    },
    {
      image: Svg_Little_Words,
      text: "Little Words",
      onPress: () => {
        this.props.navigation.navigate("Little_words");
      },
    },
    {
      image: Svg_My_Day,
      text: "My Day",
      onPress: () => {
        this.props.navigation.navigate("My_day");
      },
    },
    {
      image: Svg_Action_Words,
      text: "Action Words",
      onPress: () => {
        this.props.navigation.navigate("Action_words");
      },
    },
    {
      image: Svg_go,
      text: "go",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_go, "go");
      },
    },
    {
      image: Svg_want,
      text: "want",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_want, "want");
      },
    },
    {
      image: Svg_Describing,
      text: "Describing",
      onPress: () => {
        this.props.navigation.navigate("Describing");
      },
    },
    {
      image: Svg_Things,
      text: "Things",
      onPress: () => {
        this.props.navigation.navigate("Thing");
      },
    },
    {
      image: Svg_Clear,
      text: "Clear",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Clear, "Clear");
      },
    },
    {
      image: Svg_Time,
      text: "Time",
      onPress: () => {
        this.props.navigation.navigate("Time");
      },
    },
    {
      image: Svg_Places,
      text: "Places",
      onPress: () => {
        this.props.navigation.navigate("Places");
      },
    },
    {
      image: Svg_Leisure,
      text: "Leisure",
      onPress: () => {
        this.props.navigation.navigate("Leisure");
      },
    },
    {
      image: Svg_Delete_Word,
      text: "Delete Word",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Delete_Word, "Delete Word");
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
