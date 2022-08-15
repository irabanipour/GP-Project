import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_insect from "./images/animal_insects/spider.svg";
import Svg_caterpillar from "./images/animal_insects/caterpillar.svg";
import Svg_slug from "./images/animal_crustacean/slug.svg";
import Svg_snail from "./images/animal_crustacean/snail.svg";
import Svg_bee from "./images/animal_insects/wasp.svg";
import Svg_fly from "./images/animal_insects/fly.svg";
import Svg_spider from "./images/animal_insects/spider.svg";
export default class Page_things_nature_animals_insects_index extends Component {
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
      image: Svg_insect,
      text: "insect",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_insect, "insect");
      },
    },
    {
      image: Svg_caterpillar,
      text: "caterpillar",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_caterpillar, "caterpillar");
      },
    },
    {
      image: Svg_slug,
      text: "slug",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_slug, "slug");
      },
    },
    {
      image: Svg_snail,
      text: "snail",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_snail, "snail");
      },
    },
    {
      image: Svg_bee,
      text: "bee",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bee, "bee");
      },
    },
    {
      image: Svg_fly,
      text: "fly",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fly, "fly");
      },
    },
    {
      image: Svg_spider,
      text: "spider",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_spider, "spider");
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
