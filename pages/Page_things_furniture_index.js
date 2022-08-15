import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_furniture from "./images/building_furniture/furniture.svg";
import Svg_bean_bag from "./images/leisure_toys/beanbag.svg";
import Svg_table from "./images/building_furniture/table_2.svg";
import Svg_pillow from "./images/building_furniture/double_bed.svg";
import Svg_wardrobe from "./images/building_furniture/wardrobe.svg";
import Svg_toilet from "./images/healthcare_grooming/toilet.svg";
import Svg_TV from "./images/electrical_tv/switch_on_television_,_to.svg";
import Svg_shelf from "./images/building_furniture/book_shelf.svg";
import Svg_bed from "./images/building_furniture/single_bed.svg";
import Svg_cupboard from "./images/building_furniture/cupboard.svg";
import Svg_sink from "./images/kitchen_items/sink.svg";
import Svg_drawer from "./images/building_furniture/drawer.svg";
import Svg_couch from "./images/building_furniture/settee_1.svg";
import Svg_picture from "./images/building_furniture/picture.svg";
import Svg_blanket from "./images/building_contents/blanket.svg";
import Svg_bath from "./images/building_contents/bath.svg";
import Svg_lamp from "./images/electrical_general/lamp.svg";
import Svg_chair from "./images/building_furniture/chair_dining.svg";
import Svg_sheets from "./images/building_household/make_the_bed_,_to.svg";
export default class Page_things_furniture_index extends Component {
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
      image: Svg_furniture,
      text: "furniture",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_furniture, "furniture");
      },
    },
    {
      image: Svg_bean_bag,
      text: "bean bag",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bean_bag, "bean bag");
      },
    },
    {
      image: Svg_table,
      text: "table",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_table, "table");
      },
    },
    {
      image: Svg_pillow,
      text: "pillow",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pillow, "pillow");
      },
    },
    {
      image: Svg_wardrobe,
      text: "wardrobe",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wardrobe, "wardrobe");
      },
    },
    {
      image: Svg_toilet,
      text: "toilet",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toilet, "toilet");
      },
    },
    {
      image: Svg_TV,
      text: "TV",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_TV, "TV");
      },
    },
    {
      image: Svg_shelf,
      text: "shelf",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_shelf, "shelf");
      },
    },
    {
      image: Svg_bed,
      text: "bed",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bed, "bed");
      },
    },
    {
      image: Svg_cupboard,
      text: "cupboard",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cupboard, "cupboard");
      },
    },
    {
      image: Svg_sink,
      text: "sink",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sink, "sink");
      },
    },
    {
      image: Svg_drawer,
      text: "drawer",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_drawer, "drawer");
      },
    },
    {
      image: Svg_couch,
      text: "couch",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_couch, "couch");
      },
    },
    {
      image: Svg_picture,
      text: "picture",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_picture, "picture");
      },
    },
    {
      image: Svg_blanket,
      text: "blanket",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_blanket, "blanket");
      },
    },
    {
      image: Svg_bath,
      text: "bath",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bath, "bath");
      },
    },
    {
      image: Svg_lamp,
      text: "lamp",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lamp, "lamp");
      },
    },
    {
      image: Svg_chair,
      text: "chair",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chair, "chair");
      },
    },
    {
      image: Svg_sheets,
      text: "sheets",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sheets, "sheets");
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
