import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default function RestaurantInfo({ data }) {
    return (
        <View>
            <Text style={styles.restaurantName}>{data.restaurantInfo.name}</Text>
            <Text style={styles.restaurantCategory}>{data.restaurantInfo.priceLevel} • {data.restaurantInfo.category} • {data.restaurantInfo.place} • {data.restaurantInfo.store}</Text>
            <View style={styles.restaurantRating}>
                <Text>{data.restaurantInfo.rating}</Text>
                <Image source={require('../../assets/Star.svg')}></Image>
                <Text>{data.restaurantInfo.ratingCount}則評論</Text>
            </View>
            <View style={styles.deliveryTimerArea}>
                <View style={styles.deliveryTimerGroup}>
                    <Image style={styles.icons} source={require("../../assets/delivery.svg")}></Image>
                    <View>
                        <Text style={styles.deliveryTimerText}>{data.restaurantInfo.deliveryPrice}</Text>
                        <Text style={styles.deliveryTimerTitle}>運費</Text>
                    </View>
                </View>
                <View style={styles.deliveryTimerGroup}>
                    <Image style={styles.icons} source={require("../../assets/timer.svg")}></Image>
                    <View>
                        <Text style={styles.deliveryTimerText}>{data.restaurantInfo.deliveryTime}</Text>
                        <Text style={styles.deliveryTimerTitle}>預計時間</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.takeAwayButton}><Text style={styles.takeAwayText}>外帶</Text></TouchableOpacity>
            </View>
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
    restaurantRating: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 30,
    },
    deliveryTimerArea: {
        display: "flex",
        flexDirection: "row",
        gap: 30,
    },
    deliveryTimerGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    takeAwayButton: {
        borderWidth: 1,
        borderColor: "#22A45D",
        borderRadius: 5,
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    icons: {
        alignSelf: "flex-start",
        width: 25,
        height: 25,
        marginRight: 5,
    },
    deliveryTimerText: {
        fontSize: 20,
    },
    deliveryTimerTitle: {
        fontSize: 12,
        marginTop: 5,
        color: "#868686",
    },
    takeAwayText: {
        color: "#22A45D",
        fontSize: 18,
    },
})