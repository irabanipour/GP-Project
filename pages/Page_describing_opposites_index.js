import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_dry from "./images/descriptive_state/dry.svg";
import Svg_wet from "./images/descriptive_state/wet_1.svg";
import Svg_long from "./images/descriptive_quantity/long.svg";
import Svg_short from "./images/descriptive_quantity/short_2.svg";
import Svg_all_done from "./images/descriptive_direction/finish.svg";
import Svg_fast from "./images/descriptive_quantity/fast_2.svg";
import Svg_slow from "./images/animal_crustacean/snail.svg";
import Svg_loud from "./images/descriptive_state/loud.svg";
import Svg_quiet from "./images/people_descriptive/quiet.svg";
import Svg_medium from "./images/drink_containers/drink_medium.svg";
import Svg_big from "./images/descriptive_quantity/large.svg";
import Svg_little from "./images/descriptive_quantity/little.svg";
import Svg_new from "./images/descriptive_state/shiny.svg";
import Svg_old from "./images/descriptive_state/old_object.svg";
import Svg_soft from "./images/descriptive_state/soft.svg";
import Svg_easy from "./images/leisure_toys/bricks.svg";
import Svg_hard from "./images/descriptive_state/hard.svg";
import Svg_clean from "./images/clothes_general/t-shirt.svg";
import Svg_dirty from "./images/descriptive_state/dirty.svg";
export default class Page_describing_opposites_index extends Component {
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
      image: Svg_dry,
      text: "dry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dry, "dry");
      },
    },
    {
      image: Svg_wet,
      text: "wet",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wet, "wet");
      },
    },
    {
      image: Svg_long,
      text: "long",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_long, "long");
      },
    },
    {
      image: Svg_short,
      text: "short",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_short, "short");
      },
    },
    {
      image: Svg_all_done,
      text: "all done",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_all_done, "all done");
      },
    },
    {
      image: Svg_fast,
      text: "fast",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fast, "fast");
      },
    },
    {
      image: Svg_slow,
      text: "slow",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_slow, "slow");
      },
    },
    {
      image: Svg_loud,
      text: "loud",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_loud, "loud");
      },
    },
    {
      image: Svg_quiet,
      text: "quiet",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_quiet, "quiet");
      },
    },
    {
      image: Svg_medium,
      text: "medium",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_medium, "medium");
      },
    },
    {
      image: Svg_big,
      text: "big",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_big, "big");
      },
    },
    {
      image: Svg_little,
      text: "little",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_little, "little");
      },
    },
    {
      image: Svg_new,
      text: "new",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_new, "new");
      },
    },
    {
      image: Svg_old,
      text: "old",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_old, "old");
      },
    },
    {
      image: Svg_soft,
      text: "soft",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_soft, "soft");
      },
    },
    {
      image: Svg_easy,
      text: "easy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_easy, "easy");
      },
    },
    {
      image: Svg_hard,
      text: "hard",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hard, "hard");
      },
    },
    {
      image: Svg_clean,
      text: "clean",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_clean, "clean");
      },
    },
    {
      image: Svg_dirty,
      text: "dirty",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dirty, "dirty");
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
