import { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


export default class CustomButton extends Component {

    styles = StyleSheet.create({
        buttonStyle: {
            minWidth: 80,
            minHeight: 80,
            
            display:"flex",
            flexDirection: "column",
            flex: 1,

            alignItems:"center",
            justifyContent:"center",
            textAlign:"center",
        }
    });

    constructor(props) {
        super(props)

        this.state = {
            ButtonText: props.buttonText,
            SvgImage: props.image,
            OnPress: props.onPress,
        }

    }

    render() {
        if (this.state.SvgImage == null || this.state.SvgImage == undefined)
            return (
                <TouchableOpacity style={this.styles.buttonStyle} >
                    <Text >{this.state.ButtonText}</Text>
                </TouchableOpacity>
            )
        else
            return (

                <TouchableOpacity style={this.styles.buttonStyle} onPress={ this.state.OnPress ?? (()=>{}) }>

                    <this.state.SvgImage width={80} height={80}>
                    </this.state.SvgImage>
                    <Text style={this.styles.buttonTextStyle}>{this.state.ButtonText}</Text>
                </TouchableOpacity>

            )
    }
}