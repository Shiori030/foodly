import { StyleSheet,View,Text } from "react-native"

export default function InfoHeader({data}) {
    return (
        <View>
            <Text style={styles.restaurantName}>{data.name}</Text>
            <Text style={styles.restaurantCategory}>{data.priceLevel} • {data.category} • {data.place} • {data.store}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    restaurantName: {
        fontSize: 28,
        marginBottom: 15,
    },
    restaurantCategory: {
        fontSize: 18,
        color: "#868686",
        marginBottom: 15,
    },
})