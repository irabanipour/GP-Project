import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_job from "./images/people_relationship/family_2.svg";
import Svg_driver from "./images/people_profession/taxi_driver_1a.svg";
import Svg_PA from "./images/people_profession/care_assistant_4b.svg";
import Svg_cleaner from "./images/people_profession/cleaner_1b.svg";
import Svg_doctor from "./images/people_profession/doctor_1a.svg";
import Svg_SLT from "./images/people_profession/speech_language_therapist_1a.svg";
import Svg_dentist from "./images/people_profession/dentist_1a.svg";
import Svg_nurse from "./images/people_profession/nurse_2b.svg";
import Svg_police_officer from "./images/people_profession/police_1b.svg";
import Svg_post_person from "./images/people_profession/post_person_1b.svg";
import Svg_pilot from "./images/people_profession/air_person_2b.svg";
import Svg_handy_person from "./images/people_profession/carpenter_1a.svg";
import Svg_OT from "./images/people_profession/occupational_therapist_1a.svg";
import Svg_physio from "./images/people_profession/physio_therapist_2a.svg";
import Svg_machanic from "./images/people_profession/car_mechanic_2b.svg";
import Svg_caretaker from "./images/people_profession/caretaker_1b.svg";
export default class Page_people_job_index extends Component {
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
      image: Svg_job,
      text: "job",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_job, "job");
      },
    },
    {
      image: Svg_driver,
      text: "driver",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_driver, "driver");
      },
    },
    {
      image: Svg_PA,
      text: "PA",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_PA, "PA");
      },
    },
    {
      image: Svg_cleaner,
      text: "cleaner",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cleaner, "cleaner");
      },
    },
    {
      image: Svg_doctor,
      text: "doctor",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_doctor, "doctor");
      },
    },
    {
      image: Svg_SLT,
      text: "SLT",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_SLT, "SLT");
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
      image: Svg_nurse,
      text: "nurse",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_nurse, "nurse");
      },
    },
    {
      image: Svg_police_officer,
      text: "police officer",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_police_officer, "police officer");
      },
    },
    {
      image: Svg_post_person,
      text: "post person",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_post_person, "post person");
      },
    },
    {
      image: Svg_pilot,
      text: "pilot",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pilot, "pilot");
      },
    },
    {
      image: Svg_handy_person,
      text: "handy person",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_handy_person, "handy person");
      },
    },
    {
      image: Svg_OT,
      text: "OT",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_OT, "OT");
      },
    },
    {
      image: Svg_physio,
      text: "physio",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_physio, "physio");
      },
    },
    {
      image: Svg_machanic,
      text: "machanic",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_machanic, "machanic");
      },
    },
    {
      image: Svg_caretaker,
      text: "caretaker",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_caretaker, "caretaker");
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
