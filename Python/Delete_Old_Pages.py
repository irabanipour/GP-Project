import os
import re
import json

#Vars
path = "C:\\Users\\Dylan\\Documents\\VS Code Projects\\gp-assignment-2022\\communikate20-raw"

directory = os.walk(path)

kbmlFiles = [os.path.join(root, name)
             for root, dirs, files in directory
             for name in files
             if name.endswith(".js")]




#Start

for fileLocation in kbmlFiles:
    print(fileLocation)
    print("Deleting...")
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
    os.remove(fileLocation)
    



        


