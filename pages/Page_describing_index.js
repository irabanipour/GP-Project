import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_feelings from "./images/people_feelings/sad_man.svg";
import Svg_colours from "./images/art_colour/colour.svg";
import Svg_shapes from "./images/descriptive_shape/shapes.svg";
import Svg_opposites from "./images/descriptive_position/opposite.svg";
import Svg_all from "./images/descriptive_state/spotty.svg";
import Svg_more from "./images/descriptive_quantity/more.svg";
import Svg_nice from "./images/environment_weather/rainbow.svg";
import Svg_wrong from "./images/people_descriptive/wrong_thought.svg";
import Svg_right from "./images/people_descriptive/correct_thought.svg";
import Svg_finished from "./images/descriptive_direction/finish.svg";
import Svg_pretty from "./images/people_feelings/desiring_lady.svg";
import Svg_mean from "./images/people_feelings/jealous_man.svg";
import Svg_different from "./images/descriptive_position/beside_next_to.svg";
import Svg_same from "./images/descriptive_quantity/same.svg";
import Svg_problem from "./images/descriptive_state/hard.svg";
import Svg_important from "./images/science_astronomy/star.svg";
import Svg_because from "./images/because.svg";
import Svg_idea from "./images/electrical_general/lightbulb.svg";
import Svg_favorite from "./images/descriptive_quantity/favourite.svg";
export default class Page_describing_index extends Component {
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
      image: Svg_feelings,
      text: "feelings",
      onPress: () => {
        this.props.navigation.navigate("Describing_feelings");
      },
    },
    {
      image: Svg_colours,
      text: "colours",
      onPress: () => {
        this.props.navigation.navigate("Describing_colours");
      },
    },
    {
      image: Svg_shapes,
      text: "shapes",
      onPress: () => {
        this.props.navigation.navigate("Describing_shapes");
      },
    },
    {
      image: Svg_opposites,
      text: "opposites",
      onPress: () => {
        this.props.navigation.navigate("Describing_opposites");
      },
    },
    {
      image: Svg_all,
      text: "all",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_all, "all");
      },
    },
    {
      image: Svg_more,
      text: "more",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_more, "more");
      },
    },
    {
      image: Svg_nice,
      text: "nice",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_nice, "nice");
      },
    },
    {
      image: Svg_wrong,
      text: "wrong",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wrong, "wrong");
      },
    },
    {
      image: Svg_right,
      text: "right",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_right, "right");
      },
    },
    {
      image: Svg_finished,
      text: "finished",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_finished, "finished");
      },
    },
    {
      image: Svg_pretty,
      text: "pretty",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pretty, "pretty");
      },
    },
    {
      image: Svg_mean,
      text: "mean",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mean, "mean");
      },
    },
    {
      image: Svg_different,
      text: "different",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_different, "different");
      },
    },
    {
      image: Svg_same,
      text: "same",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_same, "same");
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
      image: Svg_important,
      text: "important",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_important, "important");
      },
    },
    {
      image: Svg_because,
      text: "because",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_because, "because");
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
      image: Svg_favorite,
      text: "favorite",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_favorite, "favorite");
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
