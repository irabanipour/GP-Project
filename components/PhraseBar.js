import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import * as Speech from "expo-speech";
import PhraseBarController from "./PhraseBarController"

import CustomButton from "./CustomButton";
import PhraseWord from "./PhraseWord";
import { SaveRecentPhrase } from "./RecentPhrases";

export default class PhraseBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }

    this.handleRemove = this.handleRemove.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleClear = this.handleClear.bind(this);

  }


  handleRemove = (index) => {

    let temp = this.state.items; //Copy the array.

    temp.splice(index, 1); //Remove the PhraseWord object.

    this.setState({ items: temp }); //Save the new array.
  };

  handlePlay = () => {
    let fullPhrase = [];

    if (this.state.items.length > 0) {

      this.state.items.map((word) =>
        fullPhrase.push(word.text)
      )

      
      Speech.speak(fullPhrase.join(" "));

      //SaveRecentPhrase(this.state.items);

      this.handleClear();
    }
  };

  handleAdd = (image, text) => {
    
    let temp = this.state.items; //Copy the array.

    temp.push({ image:image, text:text }); //Add the PhraseWord.

    this.setState({ items: temp }) //Save the new array.

    console.log(this.state.items)
  };

  handleClear = () => {
    this.setState({ items: [] });
  };


  componentDidMount = () => {
    PhraseBarController.setPhraseBar(this);
  }

  render() {
    return (
        <ScrollView horizontal={true} style={styles.barStyle}>
          {
            this.state.items.map((PWord,i)=>(
              <PhraseWord text={PWord.text} image={PWord.image} key={i}/>
            ))
          }
        </ScrollView>
    );
  };
}

const styles = StyleSheet.create({

  barStyle:{
      display:"flex",
      flex: 5,
      backgroundColor:"gray",
  }
});