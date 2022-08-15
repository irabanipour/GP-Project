import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_pet_care from "./images/animal_activity/comb_animal_,_to.svg";
import Svg_dog_food from "./images/animal_activity/dog_food.svg";
import Svg_cat_food from "./images/animal_activity/cat_food.svg";
import Svg_fish_food from "./images/animal_activity/fish_food.svg";
import Svg_collar from "./images/animal_activity/collar_pet.svg";
import Svg_pet_comb from "./images/animal_activity/pet_brush.svg";
import Svg_pet_blanket from "./images/animal_activity/pet_blanket.svg";
import Svg_pet_bed from "./images/animal_habitat/cat_bed.svg";
import Svg_fish_tank from "./images/animal_habitat/fish_tank.svg";
import Svg_treat from "./images/animal_activity/dog_chew.svg";
import Svg_lead from "./images/animal_activity/lead.svg";
import Svg_kennel from "./images/animal_habitat/dog_kennel.svg";
import Svg_pet_carrier from "./images/animal_habitat/pet_carrier.svg";
import Svg_pet_food from "./images/animal_activity/food_bowl_dog.svg";
import Svg_bird_feeder from "./images/animal_habitat/bird_feeder.svg";
import Svg_care_for_pet from "./images/animal_activity/comb_animal_,_to.svg";
import Svg_feed_pet from "./images/animal_activity/feed_cat_,_to.svg";
import Svg_walk_the_dog from "./images/animal_activity/walk_dog_,_to.svg";
import Svg_cage from "./images/animal_habitat/cage.svg";
export default class Page_things_nature_animals_pet_care_index extends Component {
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
      image: Svg_pet_care,
      text: "pet care",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pet_care, "pet care");
      },
    },
    {
      image: Svg_dog_food,
      text: "dog food",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dog_food, "dog food");
      },
    },
    {
      image: Svg_cat_food,
      text: "cat food",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cat_food, "cat food");
      },
    },
    {
      image: Svg_fish_food,
      text: "fish food",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fish_food, "fish food");
      },
    },
    {
      image: Svg_collar,
      text: "collar",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_collar, "collar");
      },
    },
    {
      image: Svg_pet_comb,
      text: "pet comb",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pet_comb, "pet comb");
      },
    },
    {
      image: Svg_pet_blanket,
      text: "pet blanket",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pet_blanket, "pet blanket");
      },
    },
    {
      image: Svg_pet_bed,
      text: "pet bed",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pet_bed, "pet bed");
      },
    },
    {
      image: Svg_fish_tank,
      text: "fish tank",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fish_tank, "fish tank");
      },
    },
    {
      image: Svg_treat,
      text: "treat",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_treat, "treat");
      },
    },
    {
      image: Svg_lead,
      text: "lead",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lead, "lead");
      },
    },
    {
      image: Svg_kennel,
      text: "kennel",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_kennel, "kennel");
      },
    },
    {
      image: Svg_pet_carrier,
      text: "pet carrier",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pet_carrier, "pet carrier");
      },
    },
    {
      image: Svg_pet_food,
      text: "pet food",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pet_food, "pet food");
      },
    },
    {
      image: Svg_bird_feeder,
      text: "bird feeder",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bird_feeder, "bird feeder");
      },
    },
    {
      image: Svg_care_for_pet,
      text: "care for pet",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_care_for_pet, "care for pet");
      },
    },
    {
      image: Svg_feed_pet,
      text: "feed pet",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_feed_pet, "feed pet");
      },
    },
    {
      image: Svg_walk_the_dog,
      text: "walk the dog",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_walk_the_dog, "walk the dog");
      },
    },
    {
      image: Svg_cage,
      text: "cage",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cage, "cage");
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
