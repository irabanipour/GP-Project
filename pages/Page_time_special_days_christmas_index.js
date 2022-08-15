
import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
import Svg_Yes from "./images/descriptive_state/correct.svg"
import Svg_Speak from "./images/speaker.svg";
import Svg_No from "./images/descriptive_state/mistake_no_wrong.svg"
import Svg_Top_Page from "./images/communication_aid/communication_aid_2.svg"
import Svg_Christmas from "./images/religion_festival/Christmas.svg"
import Svg_Christmas_day from "./images/descriptive_time/day.svg"
import Svg_Christmas_eve from "./images/descriptive_time/yesterday.svg"
import Svg_Father_Christmas from "./images/celebration_item/Father_Christmas.svg"
import Svg_Christmas_pudding from "./images/food_breads/Christmas_pudding.svg"
import Svg_lights from "./images/celebration_item/Christmas_lights.svg"
import Svg_Christmas_cake from "./images/food_breads/Christmas_cake.svg"
import Svg_Christmas_sack from "./images/celebration_item/Father_Christmas_sack.svg"
import Svg_stocking from "./images/celebration_item/Christmas_sock.svg"
import Svg_decorations from "./images/celebration_item/Christmas_decorations.svg"
import Svg_Christmas_tree from "./images/celebration_item/Christmas_tree.svg"
import Svg_Christmas_hat from "./images/celebration_item/hat_Christmas.svg"
import Svg_gift from "./images/celebration_item/present.svg"
export default class Page_time_special_days_christmas_index extends Component
{

  constructor(props)
  {
    super(props)
  }
  
  styles = StyleSheet.create({
    container: {


    },

  })

  buttonData=[
{
            image: Svg_Yes ,
            text : "Yes",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_Yes, "Yes") }
        },{
            image: Svg_Speak ,
            text : "Speak",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_Speak, "Speak") }
        },{
            image: Svg_No ,
            text : "No",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_No, "No") }
        },{
            image: Svg_Top_Page ,
            text : "Top Page",
                  onPress: () => {
        this.props.navigation.navigate("Home");
      },
        },{
            image: Svg_Christmas ,
            text : "Christmas",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_Christmas, "Christmas") }
        },{
            image: Svg_Christmas_day ,
            text : "Christmas day",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_Christmas_day, "Christmas day") }
        },{
            image: Svg_Christmas_eve ,
            text : "Christmas eve",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_Christmas_eve, "Christmas eve") }
        },{
            image: Svg_Father_Christmas ,
            text : "Father Christmas",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_Father_Christmas, "Father Christmas") }
        },{
            image: Svg_Christmas_pudding ,
            text : "Christmas pudding",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_Christmas_pudding, "Christmas pudding") }
        },{
            image: Svg_lights ,
            text : "lights",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_lights, "lights") }
        },{
            image: Svg_Christmas_cake ,
            text : "Christmas cake",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_Christmas_cake, "Christmas cake") }
        },{
            image: Svg_Christmas_sack ,
            text : "Christmas sack",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_Christmas_sack, "Christmas sack") }
        },{
            image: Svg_stocking ,
            text : "stocking",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_stocking, "stocking") }
        },{
            image: Svg_decorations ,
            text : "decorations",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_decorations, "decorations") }
        },{
            image: Svg_Christmas_tree ,
            text : "Christmas tree",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_Christmas_tree, "Christmas tree") }
        },{
            image: Svg_Christmas_hat ,
            text : "Christmas hat",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_Christmas_hat, "Christmas hat") }
        },{
            image: Svg_gift ,
            text : "gift",
            onPress: ()=>{ PhraseBarController.AddPhrase(Svg_gift, "gift") }
        }
]

render()
  {
    return(
    <FlatList 
    contentContainerStyle={ this.styles.container } 
    data = { this.buttonData }
    keyExtractor = { item=> item.text }
    renderItem = { CustomButtonRenderItem }
    numColumns = {3}
    
    />
    )
  }
}

const CustomButtonRenderItem = ({item}) => (
  <CustomButton image={item.image} buttonText={item.text} onPress={item.onPress}></CustomButton>
);
