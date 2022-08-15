import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_disabilities from "./images/communication_signs/disabled_sign.svg";
import Svg_communication_book from "./images/communication_aid/communication_book.svg";
import Svg_communication_aid from "./images/communication_aid/communication_aid_techspeak_32.svg";
import Svg_touch_screen from "./images/electrical_computer/touch_screen.svg";
import Svg_wheelchair from "./images/transport_road/wheelchair.svg";
import Svg_power_wheelchair from "./images/transport_road/wheelchair.svg";
import Svg_communication_aid_mount from "./images/communication_aid/wheelchair_communication_aid.svg";
import Svg_switch_mount from "./images/communication_aid/switch_mount.svg";
import Svg_switch from "./images/communication_aid/big_mac_switch.svg";
import Svg_hoist from "./images/medical_items/hoist.svg";
import Svg_hearing_aid from "./images/medical_items/hearing_aid_1.svg";
import Svg_glasses from "./images/medical_items/glasses.svg";
import Svg_medicine from "./images/medical_items/medicine.svg";
import Svg_appointment from "./images/descriptive_time/date.svg";
import Svg_toilet_chair from "./images/building_public/disabled_toilet.svg";
import Svg_ecu from "./images/electrical_media/remote_control.svg";
import Svg_charger from "./images/electrical_phone/charger_electric.svg";
export default class Page_things_help_index extends Component {
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
      image: Svg_disabilities,
      text: "disabilities",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_disabilities, "disabilities");
      },
    },
    {
      image: Svg_communication_book,
      text: "communication book",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_communication_book,
          "communication book"
        );
      },
    },
    {
      image: Svg_communication_aid,
      text: "communication aid",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_communication_aid,
          "communication aid"
        );
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
      image: Svg_wheelchair,
      text: "wheelchair",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wheelchair, "wheelchair");
      },
    },
    {
      image: Svg_power_wheelchair,
      text: "power wheelchair",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_power_wheelchair, "power wheelchair");
      },
    },
    {
      image: Svg_communication_aid_mount,
      text: "communication aid mount",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_communication_aid_mount,
          "communication aid mount"
        );
      },
    },
    {
      image: Svg_switch_mount,
      text: "switch mount",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_switch_mount, "switch mount");
      },
    },
    {
      image: Svg_switch,
      text: "switch",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_switch, "switch");
      },
    },
    {
      image: Svg_hoist,
      text: "hoist",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hoist, "hoist");
      },
    },
    {
      image: Svg_hearing_aid,
      text: "hearing aid",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hearing_aid, "hearing aid");
      },
    },
    {
      image: Svg_glasses,
      text: "glasses",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_glasses, "glasses");
      },
    },
    {
      image: Svg_medicine,
      text: "medicine",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_medicine, "medicine");
      },
    },
    {
      image: Svg_appointment,
      text: "appointment",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_appointment, "appointment");
      },
    },
    {
      image: Svg_toilet_chair,
      text: "toilet chair",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toilet_chair, "toilet chair");
      },
    },
    {
      image: Svg_ecu,
      text: "ecu",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ecu, "ecu");
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
