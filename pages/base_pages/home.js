import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Component } from "react";
import { View } from "react-native";
import ButtonsPage from "../ButtonsPage";
import Page_Recent from "../general/RecentPhrasesPage";
import ControlsBar from "../../components/ControlsBar";
import PhraseBar from "../../components/PhraseBar";
const TabNav = createMaterialTopTabNavigator();

export default class HomePage extends Component {

    //Props has "navigation"
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <PhraseBar />
                <ControlsBar navigation={this.props.navigation} />
                <TabNav.Navigator style={{ flex: 4 }}>

                    <TabNav.Screen name="Buttons" component={
                        ButtonsPage
                    } />
                    <TabNav.Screen name="Recent" component={Page_Recent} />

                </TabNav.Navigator>
            </View>

        )
    }
}