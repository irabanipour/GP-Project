import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_home from "./images/building_residential/house.svg";
import Svg_cellar from "./images/animal_habitat/spiders_web.svg";
import Svg_dining_room from "./images/building_furniture/dining_table.svg";
import Svg_hall from "./images/hall.svg";
import Svg_attic from "./images/holiday_travel/suitcase_2.svg";
import Svg_bathroom from "./images/healthcare_grooming/toilet.svg";
import Svg_lounge from "./images/building_furniture/settee_1.svg";
import Svg_study from "./images/building_furniture/book_shelf.svg";
import Svg_bedroom from "./images/building_furniture/single_bed.svg";
import Svg_kitchen from "./images/kitchen_actions/cook_,_to.svg";
import Svg_my_room from "./images/people_descriptive/good_person.svg";
import Svg_utility_room from "./images/building_household/wash_clothes_,_to.svg";
import Svg_play_room from "./images/leisure_toys/toy_box.svg";
import Svg_up_stairs from "./images/building_structure/stairs.svg";
import Svg_down_stairs from "./images/building_structure/stairs.svg";
import Svg_stairs from "./images/building_structure/stairs.svg";
import Svg_office from "./images/building_furniture/chair_computer.svg";
export default class Page_places_home_index extends Component {
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
      image: Svg_home,
      text: "home",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_home, "home");
      },
    },
    {
      image: Svg_cellar,
      text: "cellar",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cellar, "cellar");
      },
    },
    {
      image: Svg_dining_room,
      text: "dining room",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dining_room, "dining room");
      },
    },
    {
      image: Svg_hall,
      text: "hall",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hall, "hall");
      },
    },
    {
      image: Svg_attic,
      text: "attic",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_attic, "attic");
      },
    },
    {
      image: Svg_bathroom,
      text: "bathroom",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bathroom, "bathroom");
      },
    },
    {
      image: Svg_lounge,
      text: "lounge",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lounge, "lounge");
      },
    },
    {
      image: Svg_study,
      text: "study",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_study, "study");
      },
    },
    {
      image: Svg_bedroom,
      text: "bedroom",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bedroom, "bedroom");
      },
    },
    {
      image: Svg_kitchen,
      text: "kitchen",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_kitchen, "kitchen");
      },
    },
    {
      image: Svg_my_room,
      text: "my room",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_my_room, "my room");
      },
    },
    {
      image: Svg_utility_room,
      text: "utility room",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_utility_room, "utility room");
      },
    },
    {
      image: Svg_play_room,
      text: "play room",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_play_room, "play room");
      },
    },
    {
      image: Svg_up_stairs,
      text: "up stairs",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_up_stairs, "up stairs");
      },
    },
    {
      image: Svg_down_stairs,
      text: "down stairs",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_down_stairs, "down stairs");
      },
    },
    {
      image: Svg_stairs,
      text: "stairs",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_stairs, "stairs");
      },
    },
    {
      image: Svg_office,
      text: "office",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_office, "office");
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
