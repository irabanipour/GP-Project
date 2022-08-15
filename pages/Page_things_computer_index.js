import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_computer from "./images/electrical_computer/computer_2.svg";
import Svg_mouse from "./images/electrical_computer/computer_mouse_2.svg";
import Svg_keyboard from "./images/electrical_computer/computer_keyboard.svg";
import Svg_USB_stick from "./images/electrical_computer/usb_stick.svg";
import Svg_printer from "./images/electrical_computer/printer.svg";
import Svg_email from "./images/computer_icon/email.svg";
import Svg_iphone from "./images/electrical_phone/iPhone.svg";
import Svg_monitor from "./images/electrical_computer/computer_monitor.svg";
import Svg_website from "./images/web.svg";
import Svg_ipad from "./images/electrical_phone/iPhone.svg";
import Svg_speakers from "./images/electrical_computer/computer_speaker.svg";
import Svg_joystick from "./images/communication_aid/joystick_PennyGiles.svg";
import Svg_touch_screen from "./images/electrical_computer/touch_screen.svg";
import Svg_extension_lead from "./images/electrical_general/extension_lead.svg";
import Svg_charger from "./images/electrical_phone/charger_electric.svg";
export default class Page_things_computer_index extends Component {
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
      image: Svg_computer,
      text: "computer",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_computer, "computer");
      },
    },
    {
      image: Svg_mouse,
      text: "mouse",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mouse, "mouse");
      },
    },
    {
      image: Svg_keyboard,
      text: "keyboard",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_keyboard, "keyboard");
      },
    },
    {
      image: Svg_USB_stick,
      text: "USB stick",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_USB_stick, "USB stick");
      },
    },
    {
      image: Svg_printer,
      text: "printer",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_printer, "printer");
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
      image: Svg_iphone,
      text: "iphone",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_iphone, "iphone");
      },
    },
    {
      image: Svg_monitor,
      text: "monitor",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_monitor, "monitor");
      },
    },
    {
      image: Svg_website,
      text: "website",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_website, "website");
      },
    },
    {
      image: Svg_ipad,
      text: "ipad",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ipad, "ipad");
      },
    },
    {
      image: Svg_speakers,
      text: "speakers",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_speakers, "speakers");
      },
    },
    {
      image: Svg_joystick,
      text: "joystick",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_joystick, "joystick");
      },
    },
    {
      image: Svg_touch_screen,
      text: "touch screen",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_touch_screen, "touch screen");
      },
    },
    {
      image: Svg_extension_lead,
      text: "extension lead",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_extension_lead, "extension lead");
      },
    },
    {
      image: Svg_charger,
      text: "charger",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_charger, "charger");
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
