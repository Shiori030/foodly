import { useEffect, useState, useRef } from 'react';
import RestaurantInfo from './components/RestaurantInfo';
import CardGroup from './components/CardGroup';
import CardRowGroup from './components/CardRowGroup';
import Header from './components/Header';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Carousel } from '@ant-design/react-native'

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("0");
  const scrollViewRef = useRef(null);
  const [categoryLayout, setCategoryLayout] = useState({});

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

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    scrollToCategory(categoryId);
  }

  const onCategoryLayout = (e, categoryId) => {
    const layout = e.nativeEvent.layout;
    const absoluteY = layout.y;
    setCategoryLayout(prev => {
      const updated = {
        ...prev,
        [categoryId]: absoluteY,
      };
      return updated;
    });
  }

  const scrollToCategory = (categoryId) => {
    const yOffset = categoryLayout[categoryId];
    const otherHeight = 830;
    if (scrollViewRef.current && yOffset !== undefined) {
      scrollViewRef.current.scrollTo({
        y: yOffset + otherHeight,
        animated: true,
      })
    }
  }

  if (loading) {
    return (
      <Text>載入中...</Text>
    )
  }

  return (
    <ScrollView ref={scrollViewRef}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
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
        <CardGroup data={data} title="推薦餐點" />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.choice}>
          {data.categories.map((category, index) => (<TouchableOpacity onPress={() => handleCategorySelect(category.id)} key={index}><Text style={selectedCategory === category.id ? styles.selectedButton : styles.choiceButtonText}>{category.name}</Text></TouchableOpacity>))}
        </ScrollView>
        <View style={styles.foodList}>
          {data.categories.map((category, index) => (
            <View key={index} onLayout={(event) => onCategoryLayout(event, category.id)}><CardRowGroup data={category} /></View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",
  },
  headerContainer: {
    position: "absolute",
    zIndex: 999,
    marginTop: 40,
  },
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
  choice: {
    marginTop: 25,
  },
  choiceButtonText: {
    fontSize: 24,
    marginRight: 15,
    color: "#8E8E8E",
  },
  selectedButton: {
    fontSize: 24,
    marginRight: 15,
    color: 'black'
  },
  foodList: {
    marginTop: 20,
  }
});
