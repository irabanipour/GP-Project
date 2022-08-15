import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg"
import Svg_Speak from "./images/speaker.svg"
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg"
import Svg_thing from "./images/building_furniture/dining_table.svg";
import Svg_bag from "./images/clothes_accessories/school_bag.svg";
import Svg_battery from "./images/electrical_general/battery_1.svg";
import Svg_candle from "./images/celebration_item/candle_2.svg";
import Svg_fire from "./images/descriptive_state/fire.svg";
import Svg_book from "./images/work_education/work_book.svg";
import Svg_ipad from "./images/electrical_phone/iPhone.svg";
import Svg_camera from "./images/electrical_media/camera_compact.svg";
import Svg_stuff from "./images/electrical_computer/laptop.svg";
import Svg_part from "./images/descriptive_quantity/part.svg";
import Svg_lot from "./images/descriptive_quantity/lots_more.svg";
import Svg_idea from "./images/electrical_general/lightbulb.svg";
import Svg_problem from "./images/people_feelings/face_neutral_3.svg";
import Svg_charger from "./images/electrical_phone/charger_electric.svg";
export default class Page_things_things_index extends Component {
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
      image: Svg_thing,
      text: "thing",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_thing, "thing");
      },
    },
    {
      image: Svg_bag,
      text: "bag",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bag, "bag");
      },
    },
    {
      image: Svg_battery,
      text: "battery",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_battery, "battery");
      },
    },
    {
      image: Svg_candle,
      text: "candle",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_candle, "candle");
      },
    },
    {
      image: Svg_fire,
      text: "fire",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fire, "fire");
      },
    },
    {
      image: Svg_book,
      text: "book",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_book, "book");
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
      image: Svg_camera,
      text: "camera",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_camera, "camera");
      },
    },
    {
      image: Svg_stuff,
      text: "stuff",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_stuff, "stuff");
      },
    },
    {
      image: Svg_part,
      text: "part",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_part, "part");
      },
    },
    {
      image: Svg_lot,
      text: "lot",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lot, "lot");
      },
    },
    {
      image: Svg_idea,
      text: "idea",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_idea, "idea");
      },
    },
    {
      image: Svg_problem,
      text: "problem",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_problem, "problem");
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
