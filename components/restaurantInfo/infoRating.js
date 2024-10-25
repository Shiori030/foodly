import { View, Text, Image, StyleSheet } from 'react-native'
import Star from '../../assets/Star.svg'

export default function InfoRating({data}) {
    return (
        <View style={styles.restaurantRating}>
            <Text>{data.rating}</Text>
            <Star />
            <Text>{data.ratingCount}則評論</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    restaurantRating: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 30,
    }
})