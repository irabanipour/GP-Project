import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomePage from "./pages/base_pages/home";
import KeyboardPage from "./pages/base_pages/Page_Keyboard";

const OverlayNav = createNativeStackNavigator();

class App extends React.Component {

  componentDidMount(){
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <NavigationContainer>

        <OverlayNav.Navigator screenOptions={{headerShown:false}}>
          <OverlayNav.Screen name="Home" component={ HomePage }  />
          <OverlayNav.Screen name="Keyboard" component={ KeyboardPage } />
        </OverlayNav.Navigator>

      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "dodgerblue",
    justifyContent: "space-around",
  },
});

export default App;
