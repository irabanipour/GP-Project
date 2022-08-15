import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_money from "./images/money/money.svg";
import Svg_cheque_book from "./images/money/cheque_book.svg";
import Svg_wallet from "./images/clothes_accessories/wallet.svg";
import Svg_purse from "./images/clothes_accessories/purse.svg";
export default class Page_things_money_index extends Component {
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
      image: Svg_money,
      text: "money",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_money, "money");
      },
    },
    {
      image: Svg_cheque_book,
      text: "cheque book",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cheque_book, "cheque book");
      },
    },
    {
      image: Svg_wallet,
      text: "wallet",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_wallet, "wallet");
      },
    },
    {
      image: Svg_purse,
      text: "purse",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_purse, "purse");
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
