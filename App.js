import { useEffect, useState } from 'react';
import CardRow from './components/cardRow';
import RestaurantInfo from './components/restaurantInfo';
import CardGroup from './components/cardGroup';
import CardRowGroup from './components/cardRowGroup';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-web';
import { Carousel } from '@ant-design/react-native'

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const response = await fetch('https://example.com/m9restaurant');
      const json = await response.json();
      setData(json)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }
  };

  if (loading) {
    return (
      <Text>載入中...</Text>
    )
  }

  return (
    <ScrollView>
      <View style={styles.carouselContainer}>
        <Carousel
          style={styles.carousel}
          autoplay
          infinite
          dotStyle={styles.dotStyle}
          dotActiveStyle={styles.dotActiveStyle}
        >
          {data.restaurantInfo.cover.map(item => (
            <View key={item.id} style={styles.carouselItem}>
              <Image
                source={{ uri: item.url }}
                style={styles.carouselPhoto}
                resizeMode="cover"
              />
            </View>
          ))}
        </Carousel>
      </View>
      <View style={styles.container}>
        <RestaurantInfo data={data} />
      </View>
      <View style={styles.container}>
        <CardGroup data={data} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.choice}>
          {data.categories.map((category, index) => (<TouchableOpacity key={index} style={styles.choiceButton}><Text style={styles.choiceButtonText}>{category.name}</Text></TouchableOpacity>))}
        </ScrollView>
        <View style={styles.foodList}>
        {data.categories.map((category,index) => (<CardRowGroup key={index} data={category}/>))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  carousel: {
    width: windowsWidth,
    height: windowsHeight * 0.35,
    overflow: 'hidden'
  },
  carouselItem: {
    width: '100%',
    height: '100%'
  },
  carouselPhoto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  dotStyle: {
    width: 10,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 3,
    marginHorizontal: 3,
  },
  dotActiveStyle: {
    width: 10,
    height: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
  },
  choice:{
    marginTop:25,
  },
  choiceButtonText: {
    fontSize: 24,
    marginRight:15,
    color:"#8E8E8E",
  },
  foodList:{
    marginTop:20,
  }
});
