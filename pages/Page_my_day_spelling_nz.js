import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_n from "./images/n.svg";
import Svg_o from "./images/o.svg";
import Svg_p from "./images/p.svg";
import Svg_q from "./images/q.svg";
import Svg_Backspace from "./images/backspace.svg";
import Svg_r from "./images/r.svg";
import Svg_s from "./images/s.svg";
import Svg_t from "./images/t.svg";
import Svg_u from "./images/u.svg";
import Svg_A__M from "./images/spelling.svg";
import Svg_v from "./images/v.svg";
import Svg_w from "./images/w.svg";
import Svg_x from "./images/x.svg";
import Svg_y from "./images/y.svg";
import Svg_Clear from "./images/clear.svg";
import Svg_z from "./images/z.svg";
import Svg_Space from "./images/electrical_computer/computer_keyboard.svg";
import Svg_Shift from "./images/shift.svg";
//import Svg_ from "."
export default class Page_my_day_spelling_nz extends Component {
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
      image: Svg_n,
      text: "n",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_n, "n");
      },
    },
    {
      image: Svg_o,
      text: "o",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_o, "o");
      },
    },
    {
      image: Svg_p,
      text: "p",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_p, "p");
      },
    },
    {
      image: Svg_q,
      text: "q",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_q, "q");
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
      image: Svg_r,
      text: "r",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_r, "r");
      },
    },
    {
      image: Svg_s,
      text: "s",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_s, "s");
      },
    },
    {
      image: Svg_t,
      text: "t",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_t, "t");
      },
    },
    {
      image: Svg_u,
      text: "u",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_u, "u");
      },
    },
    {
      image: Svg_A__M,
      text: "A - M",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_A__M, "A - M");
      },
    },
    {
      image: Svg_v,
      text: "v",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_v, "v");
      },
    },
    {
      image: Svg_w,
      text: "w",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_w, "w");
      },
    },
    {
      image: Svg_x,
      text: "x",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_x, "x");
      },
    },
    {
      image: Svg_y,
      text: "y",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_y, "y");
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
      image: Svg_z,
      text: "z",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_z, "z");
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
      image: undefined,
      text: "!",
      onPress: () => {
        PhraseBarController.AddPhrase(undefined, "!");
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
