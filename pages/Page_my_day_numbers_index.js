import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_number from "./images/numbers.svg";
import Svg_1 from "./images/1.svg";
import Svg_2 from "./images/2.svg";
import Svg_3 from "./images/3.svg";
import Svg_4 from "./images/4.svg";
import Svg_5 from "./images/5.svg";
import Svg_6 from "./images/6.svg";
import Svg_7 from "./images/7.svg";
import Svg_8 from "./images/8.svg";
import Svg_9 from "./images/9.svg";
import Svg_10 from "./images/10.svg";
import Svg_0 from "./images/0.svg";
import Svg_Calculator from "./images/work_stationery/calculator.svg";
export default class Page_my_day_numbers_index extends Component {
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
      image: Svg_number,
      text: "number",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_number, "number");
      },
    },
    {
      image: Svg_1,
      text: "1",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_1, "1");
      },
    },
    {
      image: Svg_2,
      text: "2",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_2, "2");
      },
    },
    {
      image: Svg_3,
      text: "3",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_3, "3");
      },
    },
    {
      image: Svg_4,
      text: "4",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_4, "4");
      },
    },
    {
      image: Svg_5,
      text: "5",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_5, "5");
      },
    },
    {
      image: Svg_6,
      text: "6",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_6, "6");
      },
    },
    {
      image: Svg_7,
      text: "7",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_7, "7");
      },
    },
    {
      image: Svg_8,
      text: "8",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_8, "8");
      },
    },
    {
      image: Svg_9,
      text: "9",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_9, "9");
      },
    },
    {
      image: Svg_10,
      text: "10",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_10, "10");
      },
    },
    {
      image: Svg_0,
      text: "0",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_0, "0");
      },
    },
    {
      image: Svg_Calculator,
      text: "Calculator",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Calculator, "Calculator");
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
