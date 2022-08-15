import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_Pets from "./images/animal_mammal/dog.svg";
import Svg_Farm_animals from "./images/animal_habitat/chicken_house.svg";
import Svg_Wild_animals from "./images/animal_mammal/lion.svg";
import Svg_Water_animals from "./images/animal_fish/dolphin.svg";
import Svg_Birds from "./images/animal_birds/parrot.svg";
import Svg_Insects from "./images/animal_insects/spider.svg";
import Svg_Pet_care from "./images/animal_activity/comb_animal_,_to.svg";
export default class Page_things_nature_animals_index extends Component {
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
      image: Svg_Pets,
      text: "Pets",
      onPress: () => {
        this.props.navigation.navigate("Things_nature_animals_pets");
      },
    },
    {
      image: Svg_Farm_animals,
      text: "Farm animals",
      onPress: () => {
        this.props.navigation.navigate("Things_nature_animals_farm");
      },
    },
    {
      image: Svg_Wild_animals,
      text: "Wild animals",
      onPress: () => {
        this.props.navigation.navigate("Things_nature_animals_wild");
      },
    },
    {
      image: Svg_Water_animals,
      text: "Water animals",
      onPress: () => {
        this.props.navigation.navigate("Things_nature_animals_water");
      },
    },
    {
      image: Svg_Birds,
      text: "Birds",
      onPress: () => {
        this.props.navigation.navigate("Things_nature_animals_birds");
      },
    },
    {
      image: Svg_Insects,
      text: "Insects",
      onPress: () => {
        this.props.navigation.navigate("Things_nature_animals_insects");
      },
    },
    {
      image: Svg_Pet_care,
      text: "Pet care",
      onPress: () => {
        this.props.navigation.navigate("Things_nature_animals_pet_care");
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
