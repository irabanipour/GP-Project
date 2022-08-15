import { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import CustomButton from "./CustomButton";
import Svg_Keyboard from "../pages/images/keyboard.svg";
import Svg_Delete from "../pages/images/descriptive_direction/backwards.svg";
import Svg_Speaker from "../pages/images/speaker.svg";
import Svg_No from "../pages/images/descriptive_state/mistake_no_wrong.svg";

import PhraseBarController from "./PhraseBarController";


export default class ControlsBar extends Component
{

    constructor(props){
        super(props);
    }

    styles = StyleSheet.create({
        controlBarStyle:{
            backgroundColor:"darkgray",
            display:"flex",
            flex: 1,
            justifyContent:"space-evenly",
            flexDirection:"row"
        },
    })

    render()
    {
        return(
            <View style={this.styles.controlBarStyle}  horizontal={true} >
                <CustomButton image={Svg_Keyboard} onPress={ ()=>{ this.props.navigation.navigate("Keyboard"); } } buttonText="Keyboard" />
                <CustomButton image={Svg_No} onPress={ ()=>{ PhraseBarController.ClearBar(); } } buttonText="Clear" />
                <CustomButton image={Svg_Delete} onPress={ ()=>{ PhraseBarController.RemoveLastItem(); } } buttonText="Remove" />
                <CustomButton image={Svg_Speaker} onPress={ ()=>{ PhraseBarController.PlayPhrase(); } } buttonText="Speak" />
            </View>
        )
    }
}

