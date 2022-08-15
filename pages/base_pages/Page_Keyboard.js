import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ScreenOrientation from "expo-screen-orientation";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
} from "react-native";
import { Ionicons, MaterialIcons, AntDesign, Zocial } from "@expo/vector-icons";
import * as Speech from "expo-speech";
class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBoxId: 10,
      secondSelectBoxId: 7,
      textTyped: "",
      boxId: 0,
      language: "",
      switchValue: false,
      abbreviation: [{ shorten: "", actual: "" }],
    };
    this.onPress = this.onPress.bind(this);
  }
  componentWillUnmount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }
  componentDidMount() {
    this.load();
  }

  load = async () => {
    try {
      let info = await AsyncStorage.getItem("Info");
      let per = JSON.parse(info);
      if (per !== null) {
        this.setState({
          language: per.language,
          switchValue: per.switch,
          abbreviation: per.abbreviation,
        });
      } else this.setState({ language: "en-GB-Standard-A" });
    } catch (err) {
      alert(err);
    }
  };
  onPress = (i) => {
    if (this.state.selectedBoxId == 10) {
      if (i <= 5) {
        this.setState({ selectedBoxId: i });
        this.setState({ secondSelectBoxId: 7 });
      } else if (i > 5) {
        switch (i) {
          case 6:
            this.onPressSpeech();
            break;
          case 7:
            this.onPressSpace();
            break;
          case 8:
            this.onPressBackSpace();
            break;
          case 9:
            this.onPressClear();
            break;
          default:
        }
        this.setState({ secondSelectBoxId: 7 });
      }
    } else if (this.state.secondSelectBoxId == 7) {
      this.setState({ secondSelectBoxId: i });
      arrayOfLetters.map((items, ids) => {
        if (ids == this.state.selectedBoxId) {
          items.map((item, id) => {
            if (id == i) {
              this.setState({ textTyped: this.state.textTyped + item });
              return;
            }
          });
        }
      });
      this.setState({ selectedBoxId: 10 });
    }
  };
  onPressBackSpace = () => {
    this.setState({ textTyped: this.state.textTyped.slice(0, -1) });
  };
  onPressSpace = () => {
    this.setState({ textTyped: this.state.textTyped + " " });
    if (this.state.switchValue) {
      let text = this.state.textTyped;
      let splited = text.split(" ");
      splited.forEach((part, index, theArray) => {
        this.state.abbreviation.forEach((d) => {
          if (part === d.shorten.toUpperCase()) {
            theArray[index] = d.actual.toUpperCase();
          }
        });
      });
      text = "";
      splited.forEach((part) => {
        text += part + " ";
      });
      this.setState({ textTyped: text });
    }
  };
  onPressClear = () => {
    this.setState({ textTyped: "" });
  };
  onPressSpeech = () => {
    Speech.speak(this.state.textTyped, {
      rate: 0.7,
      language: this.state.language,
    });
  };
  render() {
    ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={[{ flex: 1 }]}>
            <TouchableOpacity
              onPress={() => this.onPress(0)}
              style={styles.blueBox}
            >
              {ColorArray.map((items, i) => {
                return (
                  <Text key={i} style={items}>
                    {Blue.map((item, id) => {
                      if (i == id) return item;
                    })}
                  </Text>
                );
              })}
            </TouchableOpacity>
          </View>

          <View style={[{ flex: 1 }]}>
            <TouchableOpacity
              onPress={() => this.onPress(1)}
              style={styles.yellowBox}
            >
              {ColorArray.map((item, i) => {
                return (
                  <Text key={i} style={item}>
                    {Yellow.map((items, id) => {
                      if (i == id) return items;
                    })}
                  </Text>
                );
              })}
            </TouchableOpacity>
          </View>
          <View style={[{ flex: 1 }]}>
            <TouchableOpacity
              onPress={() => this.onPress(2)}
              style={styles.whiteBox}
            >
              {ColorArray.map((item, i) => {
                return (
                  <Text key={i} style={item}>
                    {White.map((items, id) => {
                      if (i == id) return items;
                    })}
                  </Text>
                );
              })}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={[{ flex: 1 }]}>
            <View style={styles.Icons}>
              <TouchableOpacity onPress={() => this.onPress(6)}>
                <AntDesign name="sound" size={50} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.Icons}>
              <TouchableOpacity onPress={() => this.onPress(7)}>
                <Zocial name="myspace" size={50} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              placeholder="Text Input"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
              editable={false}
              value={this.state.textTyped}
              fontSize={20}
              textcolor="black"
            />
          </View>
          <View style={[{ flex: 1 }]}>
            <View style={styles.Icons}>
              <TouchableOpacity onPress={() => this.onPress(8)}>
                <Ionicons
                  name="backspace"
                  size={50}
                  color="black"
                  backgroundColor="white"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.Icons}>
              <TouchableOpacity onPress={() => this.onPress(9)}>
                <MaterialIcons name="delete" size={50} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={[{ flex: 1 }]}>
            <TouchableOpacity
              onPress={() => this.onPress(3)}
              style={styles.greenBox}
            >
              {ColorArray.map((item, i) => {
                return (
                  <Text key={i} style={item}>
                    {Green.map((items, id) => {
                      if (i == id) return items;
                    })}
                  </Text>
                );
              })}
            </TouchableOpacity>
          </View>
          <View style={[{ flex: 1 }]}>
            <TouchableOpacity
              onPress={() => this.onPress(4)}
              style={styles.blackBox}
            >
              {ColorArray.map((item, i) => {
                return (
                  <Text key={i} style={item}>
                    {Black.map((items, id) => {
                      if (i == id) return items;
                    })}
                  </Text>
                );
              })}
            </TouchableOpacity>
          </View>
          <View style={[{ flex: 1 }]}>
            <TouchableOpacity
              onPress={() => this.onPress(5)}
              style={styles.redBox}
            >
              {ColorArray.map((item, i) => {
                return (
                  <Text key={i} style={item}>
                    {Red.map((items, id) => {
                      if (i == id) return items;
                    })}
                  </Text>
                );
              })}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const arrayOfLetters = [
  ["A", "B", "C", "D", "E", "F"],
  ["0", "1", "2", "3", "4", "5"],
  ["G", "H", "I", "J", "K", "L"],
  ["M", "P", "O", "N", "Q", "R"],
  ["6", "7", "8", "9", "Y", "Z"],
  ["S", "T", "U", "V", "W", "X"],
];
const Blue = ["A", "B", "C", "D", "E", "F"];
const Yellow = ["0", "1", "2", "3", "4", "5"];
const White = ["G", "H", "I", "J", "K", "L"];
const Green = ["M", "P", "O", "N", "Q", "R"];
const Black = ["6", "7", "8", "9", "Y", "Z"];
const Red = ["S", "T", "U", "V", "W", "X"];
const ColorArray = [
  {
    color: "#0f57f2",
    fontSize: 50,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,250.250)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  {
    color: "#f2ee0f",
    fontSize: 50,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,250.250)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  {
    color: "white",
    fontSize: 50,
    paddingLeft: 25,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,250.250)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  {
    color: "#13f20f",
    fontSize: 50,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,250.250)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  {
    color: "black",
    fontSize: 50,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: "bold",
    textShadowColor: "rgba(250,250,250,250.250)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  {
    color: "#f2310f",
    fontSize: 50,
    paddingLeft: 25,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,250.250)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
];
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-around",
    top: 0,
  },
  container2: {
    flex: 1,
    backgroundColor: "#bfe4ff",
    flexDirection: "row",
  },
  textAreaContainer: {
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 1,
    padding: 5,
    flex: 6,
    borderRadius: 20,
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    color: "black",
  },
  blueBox: {
    backgroundColor: "#0f57f2",
    flex: 1,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    opacity: 1,
  },
  yellowBox: {
    backgroundColor: "#f7f305",
    flex: 1,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  whiteBox: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  greenBox: {
    backgroundColor: "#13f20f",
    flex: 1,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  blackBox: {
    backgroundColor: "#343536",
    flex: 1,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  redBox: {
    backgroundColor: "#f2310f",
    flex: 1,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Icons: {
    backgroundColor: "#a1a1a1",
    flex: 1,
    borderRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Keyboard;