import Card from '../card'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

export default function CardGroup({ data,title }) {
    return (
        <View>
            <Text style={styles.featured}>{title}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cards}>
                {data.recommendedItems.map((item, index) => (<Card key={index} data={item} />))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    featured: {
        fontSize: 23,
        marginTop: 20,
    },
    cards: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        gap: 10,
    },
})