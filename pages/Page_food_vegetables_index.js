import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_vegetables from "./images/food_vegetables/vegetables.svg";
import Svg_potato from "./images/food_vegetables/potato.svg";
import Svg_aubergine from "./images/food_vegetables/aubergine.svg";
import Svg_broccoli from "./images/food_vegetables/broccoli.svg";
import Svg_butternut_squash from "./images/food_vegetables/butternut_squash.svg";
import Svg_cabbage from "./images/food_vegetables/cabbage.svg";
import Svg_cauliflower from "./images/food_vegetables/cauliflower.svg";
import Svg_courgette from "./images/food_vegetables/courgette.svg";
import Svg_carrot from "./images/food_vegetables/carrot.svg";
import Svg_leek from "./images/food_vegetables/leek.svg";
import Svg_asparagus from "./images/food_vegetables/asparagus.svg";
import Svg_peas from "./images/food_vegetables/peas.svg";
import Svg_onion from "./images/food_vegetables/onion.svg";
import Svg_green_beans from "./images/food_vegetables/green_beans.svg";
import Svg_pumpkin from "./images/food_vegetables/pumpkin.svg";
import Svg_mushroom from "./images/food_vegetables/mushroom.svg";
import Svg_turnip from "./images/food_vegetables/turnip.svg";
import Svg_sweetcorn from "./images/food_vegetables/sweetcorn.svg";
export default class Page_food_vegetables_index extends Component {
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
      image: Svg_vegetables,
      text: "vegetables",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_vegetables, "vegetables");
      },
    },
    {
      image: Svg_potato,
      text: "potato",
      onPress: () => {
        this.props.navigation.navigate("Food_vegetables_potato");
      },
    },
    {
      image: Svg_aubergine,
      text: "aubergine",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_aubergine, "aubergine");
      },
    },
    {
      image: Svg_broccoli,
      text: "broccoli",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_broccoli, "broccoli");
      },
    },
    {
      image: Svg_butternut_squash,
      text: "butternut squash",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_butternut_squash, "butternut squash");
      },
    },
    {
      image: Svg_cabbage,
      text: "cabbage",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cabbage, "cabbage");
      },
    },
    {
      image: Svg_cauliflower,
      text: "cauliflower",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cauliflower, "cauliflower");
      },
    },
    {
      image: Svg_courgette,
      text: "courgette",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_courgette, "courgette");
      },
    },
    {
      image: Svg_carrot,
      text: "carrot",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_carrot, "carrot");
      },
    },
    {
      image: Svg_leek,
      text: "leek",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_leek, "leek");
      },
    },
    {
      image: Svg_asparagus,
      text: "asparagus",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_asparagus, "asparagus");
      },
    },
    {
      image: Svg_peas,
      text: "peas",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_peas, "peas");
      },
    },
    {
      image: Svg_onion,
      text: "onion",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_onion, "onion");
      },
    },
    {
      image: Svg_green_beans,
      text: "green beans",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_green_beans, "green beans");
      },
    },
    {
      image: Svg_pumpkin,
      text: "pumpkin",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pumpkin, "pumpkin");
      },
    },
    {
      image: Svg_mushroom,
      text: "mushroom",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_mushroom, "mushroom");
      },
    },
    {
      image: Svg_turnip,
      text: "turnip",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_turnip, "turnip");
      },
    },
    {
      image: Svg_sweetcorn,
      text: "sweetcorn",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sweetcorn, "sweetcorn");
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
