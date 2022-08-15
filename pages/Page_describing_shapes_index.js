import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg";
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg";
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg";
import Svg_shape from "./images/descriptive_shape/shapes.svg";
import Svg_star from "./images/descriptive_shape/star_2.svg";
import Svg_triangle from "./images/descriptive_shape/triangle_equilateral.svg";
import Svg_square from "./images/descriptive_shape/square.svg";
import Svg_rectangle from "./images/descriptive_shape/rectangle.svg";
import Svg_circle from "./images/descriptive_shape/circle.svg";
import Svg_hexagon from "./images/descriptive_shape/hexagon.svg";
import Svg_pentagon from "./images/descriptive_shape/pentagon.svg";
import Svg_oval from "./images/descriptive_shape/oval.svg";
import Svg_diamond from "./images/descriptive_shape/diamond.svg";
import Svg_heart from "./images/descriptive_shape/heart_shape.svg";
import Svg_line from "./images/descriptive_shape/line_diagonal.svg";
import Svg_curve from "./images/curve.svg";
import Svg_sphere from "./images/sphere.svg";
import Svg_cube from "./images/cube.svg";
import Svg_cylinder from "./images/cylinder.svg";
export default class Page_describing_shapes_index extends Component {
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
      image: Svg_shape,
      text: "shape",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_shape, "shape");
      },
    },
    {
      image: Svg_star,
      text: "star",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_star, "star");
      },
    },
    {
      image: Svg_triangle,
      text: "triangle",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_triangle, "triangle");
      },
    },
    {
      image: Svg_square,
      text: "square",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_square, "square");
      },
    },
    {
      image: Svg_rectangle,
      text: "rectangle",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_rectangle, "rectangle");
      },
    },
    {
      image: Svg_circle,
      text: "circle",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_circle, "circle");
      },
    },
    {
      image: Svg_hexagon,
      text: "hexagon",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_hexagon, "hexagon");
      },
    },
    {
      image: Svg_pentagon,
      text: "pentagon",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_pentagon, "pentagon");
      },
    },
    {
      image: Svg_oval,
      text: "oval",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_oval, "oval");
      },
    },
    {
      image: Svg_diamond,
      text: "diamond",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_diamond, "diamond");
      },
    },
    {
      image: Svg_heart,
      text: "heart",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_heart, "heart");
      },
    },
    {
      image: Svg_line,
      text: "line",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_line, "line");
      },
    },
    {
      image: Svg_curve,
      text: "curve",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_curve, "curve");
      },
    },
    {
      image: Svg_sphere,
      text: "sphere",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_sphere, "sphere");
      },
    },
    {
      image: Svg_cube,
      text: "cube",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cube, "cube");
      },
    },
    {
      image: Svg_cylinder,
      text: "cylinder",
      onPress: () => {
        PhraseBarController.AddPhrase(Svg_cylinder, "cylinder");
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
