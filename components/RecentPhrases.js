import * as FileSystem from 'expo-file-system';

//File is a list of phrases, 1 per line. Phrases are made of keywords split by comma's per keyword.

//A keyword is: { text : imageUri }.
//A phrase is: keyword[].
//

const FileURI = FileSystem.documentDirectory + "recent_phrases.json";

function SaveFile(phrasesArray) {
    FileSystem.writeAsStringAsync(FileURI, JSON.stringify({ phrases: phrasesArray }));
}

///Parameter 'phrase' is an array of { text : imageUri } objects.
async function SaveRecentPhrase(phrase) {

    var phrases = (await GetRecentPhrases());
    console.log(phrases)

    //If too many in list, remove last one.
    if (phrases.length > 9)
        phrases.pop();


    //Add phrase to top of list.
    phrases.unshift({ phrase })

    //Save file.
    SaveFile(phrases)
}

///Parameter 'phrase' is an array of { text : imageUri } objects.
async function RemoveRecentPhrase(index) {

    if (isNaN(index)) {
        console.error("Parameter supplied is NaN");
        return;
    }

    if (index < 0 || index >= phrases.length) {
        console.error("Parameter supplied is out of range.");
        return;
    }


    var phrases = (await GetRecentPhrases());

    phrases = phrases.splice(index)

    //Save file.
    SaveFile(phrases);

}


async function GetRecentPhrases() {

    /*
    if (__DEV__)
        await FileSystem.deleteAsync(FileURI);
    */

    console.log("Reading JSON");

    var phrasesJSON = await FileSystem.readAsStringAsync(FileURI)
        .then((result) => {

            console.log("File: " + result)

            phrasesObject = JSON.parse(result);

            if (phrasesObject.hasOwnProperty("phrases"))
                return phrasesObject.phrases;
            else
                return [];
        })
        .catch((err) => {
            return [];
        });


    return phrasesJSON;

}

export {
    SaveRecentPhrase,
    RemoveRecentPhrase,
    GetRecentPhrases
}