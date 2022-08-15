import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_Spelling from "./images/spelling.svg";
import Svg_Numbers from "./images/numbers.svg";
import Svg_Timetable from "./images/work_timetable/calendar.svg";
import Svg_Computer_control from "./images/electrical_computer/computer_monitor.svg";
export default class Page_my_day_index extends Component {
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
      image: Svg_Spelling,
      text: "Spelling",
      onPress: () => {
        this.props.navigation.navigate("My_day_spelling");
      },
    },
    {
      image: Svg_Numbers,
      text: "Numbers",
      onPress: () => {
        // Onpress not working becuase of not having picture
        this.props.navigation.navigate("My_day_numbers");
      },
    },
    {
      image: Svg_Timetable,
      text: "Timetable",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Timetable, "Timetable");
      },
    },
    {
      image: Svg_Computer_control,
      text: "Computer control",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Computer_control, "Computer control");
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
