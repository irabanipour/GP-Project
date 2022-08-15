import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_Special_day from "./images/descriptive_time/calendar_month.svg";
import Svg_New_year from "./images/celebration_item/fireworks_2.svg";
import Svg_Valentines_day from "./images/descriptive_shape/heart_shape.svg";
import Svg_Bank_holiday from "./images/people_actions/relax_3_,_to.svg";
import Svg_Easter from "./images/celebration_event/Easter_egg_hunt.svg";
import Svg_birthday from "./images/celebration_event/celebrate_birthday.svg";
import Svg_holiday from "./images/people_actions/relax_3_,_to.svg";
import Svg_wedding from "./images/people_relationship/married.svg";
import Svg_Bonfire_night from "./images/celebration_event/Bonfire_Night.svg";
import Svg_Halloween from "./images/celebration_event/Halloween.svg";
import Svg_Christmas from "./images/religion_festival/Christmas.svg";
import Svg_party from "./images/celebration_event/party_celebration.svg";
export default class Page_time_special_days_index extends Component {
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
        PhraseBarController.AddPhrase(Svg_Top_Page, "Top Page");
      },
    },
    {
      image: Svg_Special_day,
      text: "Special day",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Special_day, "Special day");
      },
    },
    {
      image: Svg_New_year,
      text: "New year",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_New_year, "New year");
      },
    },
    {
      image: Svg_Valentines_day,
      text: "Valentines day",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Valentines_day, "Valentines day");
      },
    },
    {
      image: Svg_Bank_holiday,
      text: "Bank holiday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Bank_holiday, "Bank holiday");
      },
    },
    {
      image: Svg_Easter,
      text: "Easter",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Easter, "Easter");
      },
    },
    {
      image: Svg_birthday,
      text: "birthday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_birthday, "birthday");
      },
    },
    {
      image: Svg_holiday,
      text: "holiday",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_holiday, "holiday");
      },
    },
    {
      image: Svg_wedding,
      text: "wedding",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wedding, "wedding");
      },
    },
    {
      image: Svg_Bonfire_night,
      text: "Bonfire night",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Bonfire_night, "Bonfire night");
      },
    },
    {
      image: Svg_Halloween,
      text: "Halloween",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Halloween, "Halloween");
      },
    },
    {
      image: Svg_Christmas,
      text: "Christmas",
      onPress: () => {
        this.props.navigation.navigate("Time_special_days_christmas");
      },
    },
    {
      image: Svg_party,
      text: "party",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_party, "party");
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
