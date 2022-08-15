import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_a from "./images/a1.svg";
import Svg_b from "./images/b.svg";
import Svg_c from "./images/c.svg";
import Svg_d from "./images/d.svg";
import Svg_Backspace from "./images/backspace.svg";
import Svg_e from "./images/e.svg";
import Svg_f from "./images/f.svg";
import Svg_g from "./images/g.svg";
import Svg_h from "./images/h.svg";
import Svg_N__Z from "./images/spelling.svg";
import Svg_i from "./images/i.svg";
import Svg_j from "./images/j.svg";
import Svg_k from "./images/k.svg";
import Svg_l from "./images/l.svg";
import Svg_Clear from "./images/clear.svg";
import Svg_m from "./images/m.svg";
import Svg_Space from "./images/electrical_computer/computer_keyboard.svg";
import Svg_Shift from "./images/shift.svg";
import Svg_Question_Mark from "./images/question/how.svg";
export default class Page_my_day_spelling_index extends Component {
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
      image: Svg_a,
      text: "a",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_a, "a");
      },
    },
    {
      image: Svg_b,
      text: "b",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_b, "b");
      },
    },
    {
      image: Svg_c,
      text: "c",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_c, "c");
      },
    },
    {
      image: Svg_d,
      text: "d",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_d, "d");
      },
    },
    {
      image: Svg_Backspace,
      text: "Backspace",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Backspace, "Backspace");
      },
    },
    {
      image: Svg_e,
      text: "e",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_e, "e");
      },
    },
    {
      image: Svg_f,
      text: "f",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_f, "f");
      },
    },
    {
      image: Svg_g,
      text: "g",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_g, "g");
      },
    },
    {
      image: Svg_h,
      text: "h",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_h, "h");
      },
    },
    {
      image: Svg_N__Z,
      text: "N - Z",
      onPress: () => {
        this.props.navigation.navigate("My_day_spelling_nz");
      },
    },
    {
      image: Svg_i,
      text: "i",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_i, "i");
      },
    },
    {
      image: Svg_j,
      text: "j",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_j, "j");
      },
    },
    {
      image: Svg_k,
      text: "k",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_k, "k");
      },
    },
    {
      image: Svg_l,
      text: "l",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_l, "l");
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
      image: Svg_m,
      text: "m",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_m, "m");
      },
    },
    {
      image: Svg_Space,
      text: "Space",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Space, "Space");
      },
    },
    {
      image: Svg_Shift,
      text: "Shift",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Shift, "Shift");
      },
    },
    {
      image: Svg_Question_Mark,
      text: "?",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Question_Mark, "?");
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
