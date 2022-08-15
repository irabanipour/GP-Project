import { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


export default class PhraseWord extends Component {

    styles = StyleSheet.create({
        buttonStyle: {
            display:"flex",
            width: 120,
            height: 120
        },
        buttonTextStyle: {
            textAlign: "center",
        }
    });

    constructor(props) {
        super(props)

        this.state = {
            text: props.text,
            image: props.image,
        }

    }

    render() {
        if (this.state.image == null || this.state.image == undefined)
            return (
                <TouchableOpacity style={this.styles.buttonStyle} >
                    <Text style={this.styles.buttonTextStyle}>{this.state.text}</Text>
                </TouchableOpacity>
            )
        else
            return (

                <TouchableOpacity style={this.styles.buttonStyle}>

                    <this.state.image width={80} height={80}>
                    </this.state.image>
                    <Text style={this.styles.buttonTextStyle}>{this.state.text}</Text>
                </TouchableOpacity>

            )
    }
}