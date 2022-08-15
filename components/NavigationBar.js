import { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton";
import Svg_Time from "../pages/images/electrical_general/clock.svg";


export default class NavigationBar extends Component
{

    constructor(props){
        super(props)
    }

    styles = StyleSheet.create({
        barStyle:{
            minHeight:100,
            backgroundColor:"darkgray"            
        }
    })

    render()
    {
        return(
            <View style={this.styles.barStyle} >

            </View>
        )
    }
}

