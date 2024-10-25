import CardRow from '../cardRow'
import { View, Text, StyleSheet } from 'react-native'

export default function CardRowGroup({ data }) {
    return (
        <View>
            <Text style={styles.choiceTitle}>{data.name}</Text>
            <View style={styles.cardsRow}>
                {data.items.map((item,index) => (<CardRow key={index} data={item} style={index === data.items.length - 1 ? { borderBottomWidth: 0 } : { borderBottomWidth: 1 }}/>))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    choiceTitle: {
        fontSize: 20,
        marginTop: 15,
    },
    cardsRow: {
        marginTop: 15,
    }
})