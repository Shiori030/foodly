import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import InfoRating from './InfoRating'
import InfoHeader from './InfoHeader'
import Delivery from '../../assets/delivery.svg'
import Timer from '../../assets/timer.svg'

export default function RestaurantInfo({ data, customHeader, customMiddle, customFooter }) {

    return (
        <View>
            <View>
                {customHeader ? (customHeader(data.restaurantInfo)) : (<InfoHeader data={data.restaurantInfo} />)}
            </View>
            <View>
                {customMiddle ? (customMiddle(data.restaurantInfo)) : (<InfoRating data={data.restaurantInfo} />)}
            </View>
                {customFooter ? (customFooter(data.restaurantInfo)) :
                    (<View style={styles.deliveryTimerArea}>
                        <View style={styles.deliveryTimerGroup}>
                            <Delivery fill="#22A45D" style={styles.icons}/>
                            <View>
                                <Text style={styles.deliveryTimerText}>{data.restaurantInfo.deliveryPrice}</Text>
                                <Text style={styles.deliveryTimerTitle}>運費</Text>
                            </View>
                        </View>
                        <View style={styles.deliveryTimerGroup}>
                            <Timer fill="#22A45D" style={styles.icons}/>
                            <View>
                                <Text style={styles.deliveryTimerText}>{data.restaurantInfo.deliveryTime}</Text>
                                <Text style={styles.deliveryTimerTitle}>預計時間</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.takeAwayButton}><Text style={styles.takeAwayText}>外帶</Text></TouchableOpacity>
                    </View>)
                }
        </View>
    )
}

const styles = StyleSheet.create({
    deliveryTimerArea: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between"
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