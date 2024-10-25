import { View, Text, Image, StyleSheet } from 'react-native'

export default function CardRow({ data, style }) {
    return (
        <View style={[styles.card, style]}>
            <View style={styles.cardPhoto}>
                <Image style={styles.cardImage} source={{ uri: data.image }} />
            </View>
            <View style={styles.info}>
                <Text style={styles.name}>{data.name}</Text>
                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.depiction}>{data.description}</Text>
                <View style={styles.flexRow}>
                    <View><Text style={styles.category}>{data.priceLevel} • {data.category}</Text></View>
                    <View><Text style={styles.price}>$ {data.price}</Text></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        width: '70%',
        marginLeft: 20,
        paddingRight: 25,
    },
    card: {
        display: "flex",
        flexDirection: "row",
        margin: 8,
        borderBottomWidth: 1,
        paddingBottom: 15,
        borderColor: "#E0E0E0"
    },
    cardPhoto: {
        width: 110,
        height: 110,
        overflow: "hidden",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "transparent",
    },
    cardImage: {
        width: "100%",
        height: "100%",
    },
    flexRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight:15,
    },
    name: {
        fontSize: 18,
        marginBottom: 10,
    },
    depiction: {
        fontSize: 15,
        marginBottom: 20,
        color: "#737373",
    },
    category: {
        color: "#868686",
    },
    price: {
        color: "#22A45D",
        fontWeight: "600"
    }
})