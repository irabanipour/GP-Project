import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_sports from "./images/sport/swim_,_to.svg";
import Svg_football from "./images/sport_accessories/football.svg";
import Svg_rugby from "./images/sport_accessories/rugby_ball.svg";
import Svg_cycling from "./images/sport/cycle_,_to.svg";
import Svg_boccia from "./images/sport/boccia.svg";
import Svg_motor_sport from "./images/transport_road/motorcycle.svg";
import Svg_golf from "./images/sport/golf.svg";
import Svg_fishing from "./images/sport/fish_,_to.svg";
import Svg_pool from "./images/leisure_games/pool_snooker.svg";
import Svg_bowling from "./images/sport/bowling.svg";
import Svg_tennis from "./images/sport/tennis.svg";
import Svg_horse_riding from "./images/sport/ride_horse_,_to.svg";
import Svg_skiing from "./images/sport/ski_,_to.svg";
import Svg_dancing from "./images/sport/exercise_,_to.svg";
import Svg_gymnastics from "./images/sport/gym_1.svg";
import Svg_athletics from "./images/sport/race_athletics.svg";
import Svg_outdoor_sport from "./images/sport_accessories/climbing_rock.svg";
import Svg_judo from "./images/sport/judo.svg";
export default class Page_things_sports_index extends Component {
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
      image: Svg_sports,
      text: "sports",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sports, "sports");
      },
    },
    {
      image: Svg_football,
      text: "football",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_football, "football");
      },
    },
    {
      image: Svg_rugby,
      text: "rugby",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_rugby, "rugby");
      },
    },
    {
      image: Svg_cycling,
      text: "cycling",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cycling, "cycling");
      },
    },
    {
      image: Svg_boccia,
      text: "boccia",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_boccia, "boccia");
      },
    },
    {
      image: Svg_motor_sport,
      text: "motor sport",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_motor_sport, "motor sport");
      },
    },
    {
      image: Svg_golf,
      text: "golf",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_golf, "golf");
      },
    },
    {
      image: Svg_fishing,
      text: "fishing",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fishing, "fishing");
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
      image: Svg_bowling,
      text: "bowling",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bowling, "bowling");
      },
    },
    {
      image: Svg_tennis,
      text: "tennis",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tennis, "tennis");
      },
    },
    {
      image: Svg_horse_riding,
      text: "horse riding",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_horse_riding, "horse riding");
      },
    },
    {
      image: Svg_skiing,
      text: "skiing",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_skiing, "skiing");
      },
    },
    {
      image: Svg_dancing,
      text: "dancing",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_dancing, "dancing");
      },
    },
    {
      image: Svg_gymnastics,
      text: "gymnastics",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_gymnastics, "gymnastics");
      },
    },
    {
      image: Svg_athletics,
      text: "athletics",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_athletics, "athletics");
      },
    },
    {
      image: Svg_outdoor_sport,
      text: "outdoor sport",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_outdoor_sport, "outdoor sport");
      },
    },
    {
      image: Svg_judo,
      text: "judo",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_judo, "judo");
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
