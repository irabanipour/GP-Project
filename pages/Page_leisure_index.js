import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_My_pictures from "./images/electrical_media/camera_compact.svg";
import Svg_Phone from "./images/electrical_phone/mobile_phone.svg";
import Svg_MP3_player from "./images/electrical_media/iPod.svg";
import Svg_Computer_control from "./images/electrical_computer/computer_monitor.svg";
import Svg_I_want from "./images/people_descriptive/good_person.svg";
import Svg_DVD from "./images/dvd.svg";
import Svg_TV from "./images/electrical_tv/switch_on_television_,_to.svg";
import Svg_Volume_Up from "./images/volume-up.svg";
import Svg_ECU from "./images/electrical_media/remote_control.svg";
import Svg_Volume_Down from "./images/volume-down.svg";
import Svg_My_stories from "./images/people_descriptive/funny_laugh.svg";
import Svg_Google from "./images/google.svg";
import Svg_Youtube from "./images/youtube.svg";
import Svg_Twitter from "./images/twitter.svg";
export default class Page_leisure_index extends Component {
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
      image: Svg_My_pictures,
      text: "My pictures",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_My_pictures, "My pictures");
      },
    },
    {
      image: Svg_Phone,
      text: "Phone",
      onPress: () => {
        this.props.navigation.navigate("Leisure_phone");
      },
    },
    {
      image: Svg_MP3_player,
      text: "MP3 player",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_MP3_player, "MP3 player");
      },
    },
    {
      image: Svg_Computer_control,
      text: "Computer control",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Computer_control, "Computer control");
      },
    },
    {
      image: Svg_I_want,
      text: "I want",
      onPress: () => {
        this.props.navigation.navigate("Leisure_want");
      },
    },
    {
      image: Svg_DVD,
      text: "DVD",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_DVD, "DVD");
      },
    },
    {
      image: Svg_TV,
      text: "TV",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_TV, "TV");
      },
    },
    {
      image: Svg_Volume_Up,
      text: "Volume Up",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Volume_Up, "Volume Up");
      },
    },
    {
      image: Svg_ECU,
      text: "ECU",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ECU, "ECU");
      },
    },
    {
      image: Svg_Volume_Down,
      text: "Volume Down",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Volume_Down, "Volume Down");
      },
    },
    {
      image: Svg_My_stories,
      text: "My stories",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_My_stories, "My stories");
      },
    },
    {
      image: Svg_Google,
      text: "Google",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Google, "Google");
      },
    },
    {
      image: Svg_Youtube,
      text: "Youtube",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Youtube, "Youtube");
      },
    },
    {
      image: Svg_Twitter,
      text: "Twitter",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_Twitter, "Twitter");
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
