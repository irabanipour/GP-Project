import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_jeans from "./images/clothes_general/jeans.svg";
import Svg_trousers from "./images/clothes_general/trousers.svg";
import Svg_tshirt from "./images/clothes_general/t-shirt.svg";
import Svg_jumper from "./images/clothes_general/jumper.svg";
import Svg_colours from "./images/art_colour/colour.svg";
import Svg_skirt from "./images/clothes_general/skirt.svg";
import Svg_dress from "./images/clothes_general/dress.svg";
import Svg_swimming_things from "./images/clothes_sport/swimming_costume.svg";
import Svg_bra from "./images/clothes_general/bra.svg";
import Svg_hat from "./images/clothes_general/bobble_hat.svg";
import Svg_coat from "./images/clothes_general/raincoat.svg";
import Svg_shoes from "./images/clothes_general/shoe_-_ladies.svg";
import Svg_socks from "./images/clothes_general/socks.svg";
import Svg_gloves from "./images/clothes_general/gloves.svg";
import Svg_dressing_gown from "./images/clothes_general/dressing_gown.svg";
import Svg_PJs from "./images/clothes_general/pyjamas.svg";
import Svg_slippers from "./images/clothes_general/slippers.svg";
import Svg_boxer_shorts from "./images/clothes_general/boxer_shorts.svg";
import Svg_pants from "./images/clothes_general/knickers.svg";
export default class Page_things_clothes_index extends Component {
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
      image: Svg_jeans,
      text: "jeans",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_jeans, "jeans");
      },
    },
    {
      image: Svg_trousers,
      text: "trousers",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_trousers, "trousers");
      },
    },
    {
      image: Svg_tshirt,
      text: "t-shirt",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tshirt, "t-shirt");
      },
    },
    {
      image: Svg_jumper,
      text: "jumper",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_jumper, "jumper");
      },
    },
    {
      image: Svg_colours,
      text: "colours",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_colours, "colours");
      },
    },
    {
      image: Svg_skirt,
      text: "skirt",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_skirt, "skirt");
      },
    },
    {
      image: Svg_dress,
      text: "dress",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dress, "dress");
      },
    },
    {
      image: Svg_swimming_things,
      text: "swimming things",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_swimming_things, "swimming things");
      },
    },
    {
      image: Svg_bra,
      text: "bra",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bra, "bra");
      },
    },
    {
      image: Svg_hat,
      text: "hat",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hat, "hat");
      },
    },
    {
      image: Svg_coat,
      text: "coat",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_coat, "coat");
      },
    },
    {
      image: Svg_shoes,
      text: "shoes",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_shoes, "shoes");
      },
    },
    {
      image: Svg_socks,
      text: "socks",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_socks, "socks");
      },
    },
    {
      image: Svg_gloves,
      text: "gloves",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_gloves, "gloves");
      },
    },
    {
      image: Svg_dressing_gown,
      text: "dressing gown",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dressing_gown, "dressing gown");
      },
    },
    {
      image: Svg_PJs,
      text: "PJ's",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_PJs, "PJ's");
      },
    },
    {
      image: Svg_slippers,
      text: "slippers",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_slippers, "slippers");
      },
    },
    {
      image: Svg_boxer_shorts,
      text: "boxer shorts",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_boxer_shorts, "boxer shorts");
      },
    },
    {
      image: Svg_pants,
      text: "pants",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pants, "pants");
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
