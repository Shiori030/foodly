import { View, Text, Image, StyleSheet } from 'react-native'

export default function Card({ data, customInfo, customPhoto }) {
  return (
    <View style={styles.card}>
      {customPhoto ? (customPhoto(data)) : (
        <View style={styles.cardPhoto}>
          <Image style={styles.cardImage} source={{ uri: data.image }} />
        </View>
      )}
      {customInfo ? (customInfo(data)) : (
        <View style={styles.cardInfo}>
          <View>
            <Text numberOfLines={1} style={styles.cardName}>{data.name}</Text>
            <Text style={styles.cardCategory}>{data.priceLevel} • {data.category}</Text>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: 150,
  },
  cardPhoto: {
    overflow: "hidden",
    width: 140,
    height: 140,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "transparent",
  },
  cardImage: {
    height: "100%",
    width: "100%",
  },
  cardName: {
    fontSize: 16,
    marginTop: 10,
  },
  cardCategory: {
    marginTop: 5,
    color: "#868686",
  },
})