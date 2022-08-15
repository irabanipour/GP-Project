import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_gardening from "./images/plants_trees/tree.svg";
import Svg_flowers from "./images/plants_trees/flower.svg";
import Svg_grass from "./images/plants_trees/grass.svg";
import Svg_bud from "./images/plants_trees/bud.svg";
import Svg_lawn_mower from "./images/tools_garden/lawnmower.svg";
import Svg_leaves from "./images/plants_trees/leaves.svg";
import Svg_petal from "./images/plants_trees/petal.svg";
import Svg_branch from "./images/plants_trees/branch.svg";
import Svg_tree from "./images/plants_trees/tree.svg";
import Svg_hose from "./images/tools_garden/hose.svg";
import Svg_seeds from "./images/plants_trees/seeds.svg";
import Svg_hedge_cutters from "./images/tools_garden/hedge_cutters.svg";
import Svg_plant from "./images/plants_trees/plant.svg";
import Svg_hedge from "./images/plants_trees/hedge.svg";
import Svg_clippers from "./images/tools_garden/garden_clippers.svg";
import Svg_shovel from "./images/leisure_toys/spade.svg";
import Svg_pot from "./images/tools_garden/pot.svg";
import Svg_rake from "./images/tools_garden/rake.svg";
import Svg_trowel from "./images/tools_garden/trowel.svg";
export default class Page_things_nature_gardening_index extends Component {
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
      image: Svg_gardening,
      text: "gardening",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_gardening, "gardening");
      },
    },
    {
      image: Svg_flowers,
      text: "flowers",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_flowers, "flowers");
      },
    },
    {
      image: Svg_grass,
      text: "grass",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_grass, "grass");
      },
    },
    {
      image: Svg_bud,
      text: "bud",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_bud, "bud");
      },
    },
    {
      image: Svg_lawn_mower,
      text: "lawn mower",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_lawn_mower, "lawn mower");
      },
    },
    {
      image: Svg_leaves,
      text: "leaves",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_leaves, "leaves");
      },
    },
    {
      image: Svg_petal,
      text: "petal",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_petal, "petal");
      },
    },
    {
      image: Svg_branch,
      text: "branch",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_branch, "branch");
      },
    },
    {
      image: Svg_tree,
      text: "tree",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_tree, "tree");
      },
    },
    {
      image: Svg_hose,
      text: "hose",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hose, "hose");
      },
    },
    {
      image: Svg_seeds,
      text: "seeds",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_seeds, "seeds");
      },
    },
    {
      image: Svg_hedge_cutters,
      text: "hedge cutters",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hedge_cutters, "hedge cutters");
      },
    },
    {
      image: Svg_plant,
      text: "plant",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_plant, "plant");
      },
    },
    {
      image: Svg_hedge,
      text: "hedge",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hedge, "hedge");
      },
    },
    {
      image: Svg_clippers,
      text: "clippers",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_clippers, "clippers");
      },
    },
    {
      image: Svg_shovel,
      text: "shovel",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_shovel, "shovel");
      },
    },
    {
      image: Svg_pot,
      text: "pot",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pot, "pot");
      },
    },
    {
      image: Svg_rake,
      text: "rake",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_rake, "rake");
      },
    },
    {
      image: Svg_trowel,
      text: "trowel",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_trowel, "trowel");
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
