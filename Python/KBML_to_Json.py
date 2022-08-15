import os
import re
import json

#Vars
path = "C:\\Users\\Dylan\\Documents\\VS Code Projects\\gp-assignment-2022\\communikate20-raw"

directory = os.walk(path)

kbmlFiles = [os.path.join(root, name)
             for root, dirs, files in directory
             for name in files
             if name.endswith(".kbml")]

#Method
def GetTextInstances(text, phrase):

    #Get match objects.
    matches = re.finditer(phrase, text)
    #Get match indices.
    indices = [index.start() for index in matches]

    texts = []

    for startPos in indices:
        #Set start.
        index = startPos + len(phrase) + 1
        #Set end.
        outdex = text.index('"', index)
        #Get text.
        phraseText = text[ index : outdex ]
        #These do not have images.
        if (phraseText != "Speak" and phraseText != "Clear"):
            texts.append(phraseText)
            print("Text found: " + phraseText )
    
    return texts

def GetText_Image(file):

    dictionary = {}

    while file: 
        line = file.readline()

        if (len(line) <= 0):
            break

        text = ""
        image = ""
        if (line.find("text=") != -1):
            text_index = line.index("text=") + 6
            text_outdex = line.find('"', text_index)
            text = line[text_index:text_outdex]

        if (line.find("image=") != -1):
            image_index = line.index("image=") + 7
            image_outdex = line.find('"', image_index)
            image = line[image_index:image_outdex]

        if (text != ""):
            dictionary[text] = image
    
    return dictionary



#Start

for fileLocation in kbmlFiles:
    print(fileLocation)
    print("Reading...")
    # with open(fileLocation, 'r') as file:
    #     text = file.read()
    #     phrases = GetTextInstances(text, "text=")
    #     images = GetTextInstances(text, "image=")

    #     dictionary = {}
    #     imageIndex = 0

    #     for phrase in phrases:
    #         dictionary[phrase] = images[imageIndex]
    #         imageIndex = imageIndex + 1

    #     newFileName = fileLocation[:len(fileLocation)-10] + ".json"
    #     with open(newFileName,'w') as newFile:
    #         newFile.write
    with open(fileLocation, 'r') as file:
        dictionary = GetText_Image(file)

        dictionary_as_text = json.dumps(dictionary)

        newFileName = fileLocation[:len(fileLocation)-5] + ".json"

        with open(newFileName,'w') as newFile:
            newFile.write(dictionary_as_text)
            newFile.close()
        
        file.close()



        


