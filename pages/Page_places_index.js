import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_place from "./images/science_astronomy/Earth.svg";
import Svg_My_day_places from "./images/building_school/school.svg";
import Svg_shops from "./images/building_shop/shop_2.svg";
import Svg_places_outside from "./images/descriptive_position/outside.svg";
import Svg_work from "./images/tools_actions/work_,_to.svg";
import Svg_School__college from "./images/building_school/school_1.svg";
import Svg_town from "./images/building_residential/house.svg";
import Svg_hospital from "./images/medical_items/medicine.svg";
import Svg_airport from "./images/people_profession/pilot_1b.svg";
import Svg_dentist from "./images/people_profession/dentist_1a.svg";
import Svg_bank from "./images/money/money.svg";
import Svg_doctors from "./images/people_profession/doctor_1a.svg";
import Svg_pool from "./images/sport/swim_,_to.svg";
import Svg_restaurant from "./images/food_feeding/dinner_2_people.svg";
import Svg_library from "./images/building_furniture/bookcase.svg";
import Svg_pub from "./images/drink_type/beer.svg";
import Svg_post_office from "./images/people_profession/post_person_1a.svg";
import Svg_cinema from "./images/electrical_tv/childrens_tv.svg";
import Svg_home from "./images/building_residential/house.svg";
export default class Page_places_index extends Component {
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
      image: Svg_place,
      text: "place",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_place, "place");
      },
    },
    {
      image: Svg_My_day_places,
      text: "My day places",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_My_day_places, "My day places");
      },
    },
    {
      image: Svg_shops,
      text: "shops",
      onPress: () => {
        this.props.navigation.navigate("Places_shops");
      },
    },
    {
      image: Svg_places_outside,
      text: "places outside",
      onPress: () => {
        this.props.navigation.navigate("Places_outside");
      },
    },
    {
      image: Svg_work,
      text: "work",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_work, "work");
      },
    },
    {
      image: Svg_School__college,
      text: "School / college",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_School__college, "School / college");
      },
    },
    {
      image: Svg_town,
      text: "town",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_town, "town");
      },
    },
    {
      image: Svg_hospital,
      text: "hospital",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hospital, "hospital");
      },
    },
    {
      image: Svg_airport,
      text: "airport",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_airport, "airport");
      },
    },
    {
      image: Svg_dentist,
      text: "dentist",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dentist, "dentist");
      },
    },
    {
      image: Svg_bank,
      text: "bank",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bank, "bank");
      },
    },
    {
      image: Svg_doctors,
      text: "doctors",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_doctors, "doctors");
      },
    },
    {
      image: Svg_pool,
      text: "pool",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pool, "pool");
      },
    },
    {
      image: Svg_restaurant,
      text: "restaurant",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_restaurant, "restaurant");
      },
    },
    {
      image: Svg_library,
      text: "library",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_library, "library");
      },
    },
    {
      image: Svg_pub,
      text: "pub",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pub, "pub");
      },
    },
    {
      image: Svg_post_office,
      text: "post office",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_post_office, "post office");
      },
    },
    {
      image: Svg_cinema,
      text: "cinema",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cinema, "cinema");
      },
    },
    {
      image: Svg_home,
      text: "home",
      onPress: () => {
        this.props.navigation.navigate("Places_home");
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
