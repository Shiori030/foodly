import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

const windowsWidth = Dimensions.get('window').width;

export default function CardRow({ data, borderStyle, customPhoto, customInfo }) {
    return (
        <View style={[styles.card, borderStyle]}>
            {customPhoto ? (customPhoto(data)) : (
                <View style={styles.cardPhoto}>
                    <Image style={styles.cardImage} source={{ uri: data.image }} />
                </View>
            )}
            {customInfo ? (customInfo(data)) : (
                <View style={styles.info}>
                    <View>
                        <Text style={styles.name}>{data.name}</Text>
                    </View>
                    <View style={styles.depictionArea}>
                        <Text numberOfLines={2} style={styles.depiction}>{data.description}</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <Text style={styles.category}>{data.priceLevel} • {data.category}</Text>
                        </View>
                        <View>
                            <Text style={styles.price}>$ {data.price}</Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        width: windowsWidth * 0.63,
        marginLeft: 20,
        paddingRight: 25,
    },
    depictionArea: {
        height: '50%',
        width:"100%",
    },
    card: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 14,
        borderBottomWidth: 1,
        paddingBottom: 15,
        borderColor: "#E0E0E0",
        height:135,
        marginTop:5,
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
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 15,
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