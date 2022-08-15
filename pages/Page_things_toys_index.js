import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_toys from "./images/leisure_toys/toys.svg";
import Svg_trains from "./images/transport_rail/steam_train.svg";
import Svg_cars from "./images/leisure_toys/car_toy.svg";
import Svg_dolls from "./images/leisure_toys/doll.svg";
import Svg_bricks from "./images/leisure_toys/bricks.svg";
import Svg_lego from "./images/leisure_toys/lego.svg";
import Svg_paint from "./images/work_stationery/paint_childs.svg";
import Svg_stacker_ring from "./images/leisure_toys/star_stacker.svg";
import Svg_colouring_book from "./images/leisure_toys/colouring_book.svg";
import Svg_book from "./images/work_education/work_book.svg";
import Svg_sticker_book from "./images/leisure_toys/stickers.svg";
import Svg_kite from "./images/leisure_toys/kite.svg";
import Svg_teddy from "./images/leisure_toys/teddy_bear.svg";
import Svg_puppet from "./images/leisure_toys/puppet.svg";
import Svg_shape_puzzle from "./images/leisure_toys/shape_puzzle.svg";
import Svg_jigsaw from "./images/leisure_games/jigsaw_puzzle.svg";
import Svg_toy_box from "./images/leisure_toys/toy_box.svg";
export default class Page_things_toys_index extends Component {
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
      image: Svg_toys,
      text: "toys",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toys, "toys");
      },
    },
    {
      image: Svg_trains,
      text: "trains",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_trains, "trains");
      },
    },
    {
      image: Svg_cars,
      text: "cars",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cars, "cars");
      },
    },
    {
      image: Svg_dolls,
      text: "dolls",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dolls, "dolls");
      },
    },
    {
      image: Svg_bricks,
      text: "bricks",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bricks, "bricks");
      },
    },
    {
      image: Svg_lego,
      text: "lego",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lego, "lego");
      },
    },
    {
      image: Svg_paint,
      text: "paint",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_paint, "paint");
      },
    },
    {
      image: Svg_stacker_ring,
      text: "stacker ring",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_stacker_ring, "stacker ring");
      },
    },
    {
      image: Svg_colouring_book,
      text: "colouring book",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_colouring_book, "colouring book");
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
      image: Svg_sticker_book,
      text: "sticker book",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sticker_book, "sticker book");
      },
    },
    {
      image: Svg_kite,
      text: "kite",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_kite, "kite");
      },
    },
    {
      image: Svg_teddy,
      text: "teddy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_teddy, "teddy");
      },
    },
    {
      image: Svg_puppet,
      text: "puppet",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_puppet, "puppet");
      },
    },
    {
      image: Svg_shape_puzzle,
      text: "shape puzzle",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_shape_puzzle, "shape puzzle");
      },
    },
    {
      image: Svg_jigsaw,
      text: "jigsaw",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_jigsaw, "jigsaw");
      },
    },
    {
      image: Svg_toy_box,
      text: "toy box",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toy_box, "toy box");
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
