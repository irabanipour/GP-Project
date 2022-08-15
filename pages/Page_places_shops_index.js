import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_shop from "./images/building_shop/shop_2.svg";
import Svg_supermarket from "./images/food_vegetables/vegetables.svg";
import Svg_butchers from "./images/food_meat/meat.svg";
import Svg_shopping_centre from "./images/holiday_travel/road.svg";
import Svg_bakers from "./images/food_breads/bread_sliced.svg";
import Svg_Veg_shop from "./images/food_vegetables/vegetables.svg";
import Svg_department_store from "./images/electrical_media/iPod.svg";
import Svg_clothes_shop from "./images/clothes_general/clothes_generic.svg";
import Svg_music_shop from "./images/work_subjects/music.svg";
import Svg_market from "./images/art_making/craft_table.svg";
import Svg_coffee_shop from "./images/drink_type/coffee.svg";
import Svg_drive_through from "./images/food_meals/takeaway_burger_and_chips.svg";
import Svg_pharmacy from "./images/medical_items/medicine.svg";
export default class Page_places_shops_index extends Component {
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
      image: Svg_shop,
      text: "shop",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_shop, "shop");
      },
    },
    {
      image: Svg_supermarket,
      text: "supermarket",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_supermarket, "supermarket");
      },
    },
    {
      image: Svg_butchers,
      text: "butchers",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_butchers, "butchers");
      },
    },
    {
      image: Svg_shopping_centre,
      text: "shopping centre",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_shopping_centre, "shopping centre");
      },
    },
    {
      image: Svg_bakers,
      text: "bakers",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bakers, "bakers");
      },
    },
    {
      image: Svg_Veg_shop,
      text: "Veg shop",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Veg_shop, "Veg shop");
      },
    },
    {
      image: Svg_department_store,
      text: "department store",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_department_store, "department store");
      },
    },
    {
      image: Svg_clothes_shop,
      text: "clothes shop",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_clothes_shop, "clothes shop");
      },
    },
    {
      image: Svg_music_shop,
      text: "music shop",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_music_shop, "music shop");
      },
    },
    {
      image: Svg_market,
      text: "market",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_market, "market");
      },
    },
    {
      image: Svg_coffee_shop,
      text: "coffee shop",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_coffee_shop, "coffee shop");
      },
    },
    {
      image: Svg_drive_through,
      text: "drive through",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_drive_through, "drive through");
      },
    },
    {
      image: Svg_pharmacy,
      text: "pharmacy",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pharmacy, "pharmacy");
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
