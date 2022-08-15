import PhraseWord from "./PhraseWord";

export default class PhraseBarController
{
    static PB = undefined;

    static AddPhrase(image, text)
    {
        if (PB != null && PB != undefined)
        {
            PB.handleAdd(image, text);

            console.log("Added Word.");
        }
        else
            console.warn("PhraseBar instance not set before trying to use.");
    }

    static PlayPhrase(){
        if (PB != null && PB != undefined)
        {
            PB.handlePlay();

            console.log("Played Phrase.");
        }
        else
            console.warn("PhraseBar instance not set before trying to use.");
    }

    static ClearBar()
    {
        if (PB != null && PB != undefined)
        {
            PB.handleClear();

            console.log("Cleared Bar.");
        }
        else
            console.warn("PhraseBar instance not set before trying to use.");
    }

    static RemoveLastItem(){
        if (PB != null && PB != undefined)
        {
            PB.handleRemove(PB.state.items.length - 1);

            console.log("Removed last icon.");
        }
        else
            console.warn("PhraseBar instance not set before trying to use.");
    }

    static setPhraseBar(phraseBar)
    {
        PB = phraseBar; 
    }
}