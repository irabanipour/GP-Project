import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_transport from "./images/transport_rail/train.svg";
import Svg_car from "./images/transport_road/car_2.svg";
import Svg_train from "./images/transport_rail/train.svg";
import Svg_bus from "./images/transport_road/bus_single_decker.svg";
import Svg_caravan from "./images/transport_road/caravan.svg";
import Svg_fire_engine from "./images/transport_road/fire_engine.svg";
import Svg_ambulance from "./images/ambulance.svg";
import Svg_ship from "./images/transport_water/ferry.svg";
import Svg_airplane from "./images/transport_air/aeroplane.svg";
import Svg_tractor from "./images/transport_road/tractor.svg";
import Svg_lorry from "./images/transport_road/lorry.svg";
import Svg_motor_home from "./images/transport_road/mini_bus.svg";
import Svg_bike from "./images/transport_road/bicycle.svg";
import Svg_police_car from "./images/transport_road/police_car.svg";
import Svg_boat from "./images/transport_water/boat.svg";
import Svg_bin_lorry from "./images/transport_road/refuse_lorry.svg";
import Svg_taxi from "./images/transport_road/taxi.svg";
import Svg_underground from "./images/transport_rail/underground_sign.svg";
export default class Page_things_transport_index extends Component {
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
      image: Svg_transport,
      text: "transport",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_transport, "transport");
      },
    },
    {
      image: Svg_car,
      text: "car",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_car, "car");
      },
    },
    {
      image: Svg_train,
      text: "train",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_train, "train");
      },
    },
    {
      image: Svg_bus,
      text: "bus",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bus, "bus");
      },
    },
    {
      image: Svg_caravan,
      text: "caravan",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_caravan, "caravan");
      },
    },
    {
      image: Svg_fire_engine,
      text: "fire engine",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_fire_engine, "fire engine");
      },
    },
    {
      image: Svg_ambulance,
      text: "ambulance",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ambulance, "ambulance");
      },
    },
    {
      image: Svg_ship,
      text: "ship",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_ship, "ship");
      },
    },
    {
      image: Svg_airplane,
      text: "airplane",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_airplane, "airplane");
      },
    },
    {
      image: Svg_tractor,
      text: "tractor",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tractor, "tractor");
      },
    },
    {
      image: Svg_lorry,
      text: "lorry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lorry, "lorry");
      },
    },
    {
      image: Svg_motor_home,
      text: "motor home",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_motor_home, "motor home");
      },
    },
    {
      image: Svg_bike,
      text: "bike",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bike, "bike");
      },
    },
    {
      image: Svg_police_car,
      text: "police car",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_police_car, "police car");
      },
    },
    {
      image: Svg_boat,
      text: "boat",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_boat, "boat");
      },
    },
    {
      image: Svg_bin_lorry,
      text: "bin lorry",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bin_lorry, "bin lorry");
      },
    },
    {
      image: Svg_taxi,
      text: "taxi",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_taxi, "taxi");
      },
    },
    {
      image: Svg_underground,
      text: "underground",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_underground, "underground");
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
