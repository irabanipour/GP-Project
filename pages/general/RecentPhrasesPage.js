import { Component } from 'react'
import { Button, FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'
import * as RecentPhrases from '../../components/RecentPhrases'
import PhraseWord from '../../components/PhraseWord'

const renderItem = ({item, index}) => (
    <View style={{ display: "flex", flex: "1", flexDirection: "row" }}key={index} style={{ flex: 1 }}>
        {
            item.phrase.map((word,index) => (<Text key={index}> {word.Text}</Text>))
        }
    </View>
)

export default class RecentPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            phraseList: []
        }

    }



    async componentDidMount() {
        this.setState({ phraseList: await RecentPhrases.GetRecentPhrases() })
    }

    render() {
        if (this.state.phraseList.length > 0)
            return (
                <SafeAreaView style={{flex:1}}>
                    <FlatList
                        data={this.state.phraseList}
                        style={{ flex: 1 }}
                        renderItem={renderItem}
                        extraData={this.state}
                    />
                </SafeAreaView>
            )
        else
            return (<View style={{ alignItems: "center", paddingTop: 50 }}><Text key={0}>No Recent Phrases</Text></View>)
    }
}