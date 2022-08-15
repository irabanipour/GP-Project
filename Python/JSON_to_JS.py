import os
from posixpath import basename
import re
import json
#Vars
path = "C:\\Users\\Dylan\\Documents\\VS Code Projects\\gp-assignment-2022\\communikate20-raw"

preImports="""
import { Component } from "react";
import { StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton";
import PhraseBarController from "../components/PhraseBarController";
"""
postImport = "export default class {page_name} extends Component"

preLoop="""
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
"""
postLoop = """
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
"""
def CleanString(stringToClean):
  cleanedString = stringToClean.replace(" ", "_").replace(",","_").replace("'","").replace("/","").replace("!","").replace("?","")
  cleanedString = cleanedString.replace("&", "and").replace("...","").replace("-","")
  return cleanedString

directory = os.walk(path)

jsonFiles = [os.path.join(root, name)
             for root, dirs, files in directory
             for name in files
             if name.endswith(".json")]

for fName in jsonFiles:

    newFileText = preImports

    #Load file
    file = open(fName, 'r')
    #Read json into dictionary
    dictionary = json.loads(file.read())
    #cleanup as its not needed once loaded
    file.close()

    #for every key in the dictionary, Import the SVG
    for key in dictionary:
        if (len(dictionary[key]) > 0):
          newFileText = newFileText + "import Svg_{import_name} from \".{source}\"\n".format(source=dictionary[key], import_name = CleanString(key))
        else:
          newFileText = newFileText + "//import Svg_{import_name} from \".{source}\"\n".format(source=dictionary[key], import_name = CleanString(key))


    #Make file name
    baseName = "Page"

    extendedNameStartIndex = fName.find("-raw") + 4
    extendedName = fName[extendedNameStartIndex : len(fName)-5 ].replace("\\", "_")

    newClassName = baseName + extendedName

    print(newClassName)

    #Add Class start and name
    newFileText = newFileText + postImport.format(page_name=newClassName)

    #Add pre-loop
    newFileText = newFileText + preLoop

    #for every key in the dictionary, add a new TouchableOpacity
    for key in dictionary:
        newFileText = newFileText + "{" 
        
        newFileText = newFileText + """
            image: Svg_{import_name} ,
            text : "{text}",
            onPress: ()=>{{ PhraseBarController.AddPhrase(Svg_{import_name}, "{text}") }}
        """.format(text=key, import_name = CleanString(key))

        newFileText = newFileText + "},"

    #removes last comma which would invalidate the array.
    newFileText = newFileText[:len(newFileText)-1]

    #Append the post-loop
    newFileText = newFileText + postLoop

    newFileName = os.getcwd()
    newFileName = newFileName[:len(newFileName)-6]
    newFileName = newFileName + "pages\\test\\"


    newFileName = newClassName + ".js"

    newFile = open(newFileName, 'w')
    newFile.write(newFileText)

