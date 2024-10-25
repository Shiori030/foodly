import { View, Text, Image, StyleSheet } from 'react-native'

export default function InfoRating({data}) {
    return (
        <View style={styles.restaurantRating}>
            <Text>{data.rating}</Text>
            <Image source={require('../../assets/Star.svg')}></Image>
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