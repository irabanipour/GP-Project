import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_I_have_pain_in_my from "./images/healthcare_body/body_outline.svg";
import Svg_I_feel from "./images/people_feelings/sad_man.svg";
import Svg_headache from "./images/medical_conditions/headache.svg";
import Svg_ouch from "./images/medical_conditions/cut.svg";
import Svg_chest_pain from "./images/healthcare_body/chest_male.svg";
import Svg_earache from "./images/healthcare_body/ear.svg";
import Svg_sick from "./images/medical_conditions/vomit_,_to.svg";
import Svg_toothache from "./images/healthcare_body/teeth.svg";
import Svg_back_pain from "./images/medical_conditions/back_ache.svg";
import Svg_a_cold from "./images/medical_conditions/sneeze_cold.svg";
import Svg_itch from "./images/medical_conditions/itch.svg";
import Svg_stomach_ache from "./images/medical_conditions/stomach_ache.svg";
import Svg_a_sore_throat from "./images/healthcare_body/windpipe.svg";
import Svg_cramp from "./images/healthcare_body/leg.svg";
export default class Page_things_health_index extends Component {
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
      image: Svg_I_have_pain_in_my,
      text: "I have pain in my",
      onPress: () => {
        PhraseBarController.AddPhrase(
          Svg_I_have_pain_in_my,
          "I have pain in my"
        );
      },
    },
    {
      image: Svg_I_feel,
      text: "I feel",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_I_feel, "I feel");
      },
    },
    {
      image: Svg_headache,
      text: "headache",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_headache, "headache");
      },
    },
    {
      image: Svg_ouch,
      text: "ouch",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ouch, "ouch");
      },
    },
    {
      image: Svg_chest_pain,
      text: "chest pain",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_chest_pain, "chest pain");
      },
    },
    {
      image: Svg_earache,
      text: "earache",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_earache, "earache");
      },
    },
    {
      image: Svg_sick,
      text: "sick",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sick, "sick");
      },
    },
    {
      image: Svg_toothache,
      text: "toothache",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_toothache, "toothache");
      },
    },
    {
      image: Svg_back_pain,
      text: "back pain",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_back_pain, "back pain");
      },
    },
    {
      image: Svg_a_cold,
      text: "a cold",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_a_cold, "a cold");
      },
    },
    {
      image: Svg_itch,
      text: "itch",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_itch, "itch");
      },
    },
    {
      image: Svg_stomach_ache,
      text: "stomach ache",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_stomach_ache, "stomach ache");
      },
    },
    {
      image: Svg_a_sore_throat,
      text: "a sore throat",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_a_sore_throat, "a sore throat");
      },
    },
    {
      image: Svg_cramp,
      text: "cramp",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cramp, "cramp");
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
