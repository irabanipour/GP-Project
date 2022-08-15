import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_I_like_it from "./images/food_feeding/good_to_eat.svg";
import Svg_Its_gross from "./images/food_feeding/yucky.svg";
import Svg_Its_spicy from "./images/food_feeding/spicy.svg";
import Svg_Cut_up_food from "./images/kitchen_actions/chop_,_to.svg";
import Svg_Can_I_have_some_more from "./images/descriptive_quantity/more.svg";
import Svg_Can_I_have_a_drink from "./images/food_feeding/thirsty.svg";
import Svg_wipe_my_face from "./images/healthcare_grooming/wash_face_,_to.svg";
import Svg_please from "./images/descriptive_state/good.svg";
import Svg_thank_you from "./images/descriptive_state/great.svg";
import Svg_Whats_for_dinner from "./images/food_feeding/dinner.svg";
import Svg_What_have_you_been_doing from "./images/descriptive_direction/point_,_to.svg";
import Svg_Ive_had_enough from "./images/descriptive_quantity/enough.svg";
import Svg_eat from "./images/food_feeding/good_to_eat_2.svg";
import Svg_drink from "./images/food_feeding/good_to_drink.svg";
import Svg_Its_too_hot from "./images/descriptive_quantity/hot.svg";
import Svg_Its_too_cold from "./images/food_meals/dinner_cold.svg";
export default class Page_food_food_chat_index extends Component {
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
      image: Svg_I_like_it,
      text: "I like it",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_I_like_it, "I like it");
      },
    },
    {
      image: Svg_Its_gross,
      text: "It's gross",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Its_gross, "It's gross");
      },
    },
    {
      image: Svg_Its_spicy,
      text: "It's spicy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Its_spicy, "It's spicy");
      },
    },
    {
      image: Svg_Cut_up_food,
      text: "Cut up food",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Cut_up_food, "Cut up food");
      },
    },
    {
      image: Svg_Can_I_have_some_more,
      text: "Can I have some more?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Can_I_have_some_more,
          "Can I have some more?"
        );
      },
    },
    {
      image: Svg_Can_I_have_a_drink,
      text: "Can I have a drink",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Can_I_have_a_drink,
          "Can I have a drink"
        );
      },
    },
    {
      image: Svg_wipe_my_face,
      text: "wipe my face",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wipe_my_face, "wipe my face");
      },
    },
    {
      image: Svg_please,
      text: "please",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_please, "please");
      },
    },
    {
      image: Svg_thank_you,
      text: "thank you",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_thank_you, "thank you");
      },
    },
    {
      image: Svg_Whats_for_dinner,
      text: "What's for dinner?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_Whats_for_dinner,
          "What's for dinner?"
        );
      },
    },
    {
      image: Svg_What_have_you_been_doing,
      text: "What have you been doing?",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_What_have_you_been_doing,
          "What have you been doing?"
        );
      },
    },
    {
      image: Svg_Ive_had_enough,
      text: "I've had enough",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Ive_had_enough, "I've had enough");
      },
    },
    {
      image: Svg_eat,
      text: "eat",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_eat, "eat");
      },
    },
    {
      image: Svg_drink,
      text: "drink",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_drink, "drink");
      },
    },
    {
      image: Svg_Its_too_hot,
      text: "It's too hot",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Its_too_hot, "It's too hot");
      },
    },
    {
      image: Svg_Its_too_cold,
      text: "It's too cold",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Its_too_cold, "It's too cold");
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
