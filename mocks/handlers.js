import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://example.com/m9restaurant', () => {
    return HttpResponse.json({
      restaurantInfo: {
        name: "M9 英倫餐酒館",
        rating: 4.8,
        ratingCount: "1500+",
        priceLevel: "$$$",
        deliveryTime: "25-35 min",
        deliveryPrice: "Free",
        category:"西式",
        place:"新北市中和區",
        store:"餐酒館",
        cover: [
          {
            id: 1,
            url: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/cover1.jpeg",
            alt: "餐廳外觀"
          },
          {
            id: 2,
            url: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/cover2.jpeg",
            alt: "示意圖"
          },
          {
            id: 3,
            url: "https://sosense.tw/wp-content/uploads/2023/05/20230501223749_79.jpg",
            alt: "吧台"
          },
          {
            id: 4,
            url: "https://sosense.tw/wp-content/uploads/2023/05/20230501223651_20.jpg",
            alt: "門口"
          },
          {
            id: 5,
            url: "https://sosense.tw/wp-content/uploads/2023/05/20230501223701_63.jpg",
            alt: "示意圖"
          }
        ]
      },
      recommendedItems: [
        {
          id: "r1",
          name: "8oz極厚切嫩煎菲力",
          price: 880,
          priceLevel: "$$$",
          image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/filet_mignon.jpeg",
          category: "主菜",
          isPopular: true,
        },
        {  
          id: "r2", 
          name: "M9霸王烤生蠔",
          price: 580,
          priceLevel: "$$",
          image: "https://dtsmsource.oss-accelerate.aliyuncs.com/article/20200930/5f743ef8d5c879024020200930.png",
          category: "海鮮",
          isPopular: true,
        },
        {
          id: "r3",
          name: "彩虹創意特調Shot組(12杯)",
          price: 880,
          priceLevel: "$$$",
          image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/rainbow_shot.jpeg",
          category: "酒",
          isPopular: true,
        },
        {
          id: "r4",
          name: "烤生蠔漁夫麵",
          price: 490,
          priceLevel: "$$",
          image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/fisherman_noodle.jpeg",
          category: "主菜",
          isPopular: true,
        },
        {
          id: "r5",
          name: "派對肉品七喜拼盤",
          price: 1680,
          priceLevel: "$$$",
          image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/happy-meat.jpeg",
          category: "主菜",
          isPopular: true,
        },
      ],
      categories: [
        {
          id: "cat1",
          name: "沙拉",
          items: [
            {
              id: "a1",
              name: "煙燻雞肉凱撒沙拉(1人份)",
              description: "",
              price: 120,
              priceLevel: "$",
              category: "沙拉",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/caesar_salad.jpeg",
            },
            {
              id: "a2",
              name: "希臘優格沙拉盆(3-5人份)",
              description: "",
              price: 440,
              priceLevel: "$$",
              category: "沙拉",
              image: "https://sosense.tw/wp-content/uploads/2023/05/20230501223709_43.jpg",
            },
          ]
        },
        {
          id: "cat2",
          name: "炸物",
          items: [
            {
              id: "b1",
              name: "原味薯條",
              description: "",
              price: 160,
              priceLevel: "$",
              category: "炸物",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/french_fries.jpeg",
            },
            {
              id: "b2",
              name: "派對炸物拼盤",
              description: "適合大家一起吃的派對炸物拼盤",
              price: 480,
              priceLevel: "$$",
              category: "炸物",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/party_combo.jpeg",
            },
            {
              id: "b3",
              name: "雞米花",
              description: "",
              price: 220,
              priceLevel: "$",
              category: "炸物",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/popcorn_chicken.jpeg",
            },
            { id:"b4",
              name:"M9英倫炸魚薯條",
              description: "",
              price:295,
              priceLevel:"$",
              category: "炸物",
              image:"https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/british_fish.jpeg",
            },
            { id:"b5",
              name:"M9特色炸雞翅",
              description: "",
              price:320,
              priceLevel:"$$",
              category: "炸物",
              image:"https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/fried_wings.jpeg",
            }
          ]
        },
        {
          id: "cat3",
          name: "主菜",
          items: [
            {
              id: "c1",
              name: "脆皮德國豬腳",
              description: "Schweinshaxe 炸豬腳 芥末籽蜂蜜醬 德式酸菜 烤時蔬   German pork knuckle, honey mustard, Sauerkraut, roast vegetable",
              price: 850,
              priceLevel: "$$$",
              category: "主菜",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/schweinshaxe.jpeg",
            },
            {
              id: "c2",
              name: "迷迭香奶油香煎翼板牛排",
              description: "翼板牛排 芝麻葉 玫瑰鹽 鹽味薯條   Tot blade, arugula, fries",
              price: 780,
              priceLevel: "$$$",
              category: "主菜",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/totblade.jpeg",
            },
            {
              id: "c3",
              name: "精選肋眼牛排 (10盎司)",
              description: "Ribeye 10oz 肋眼牛排 奶油大蒜 芝麻葉 玫瑰鹽 慢熬紅酒醬   Ribeye, red wine sauce, roasted garlic, arugula",
              price: 1180,
              priceLevel: "$$$",
              category: "主菜",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/ribeye10.jpeg",
            },
            {
              id: "c4",
              name: "精選海鮮拼盤",
              description: "Seafood plate 烤生蠔 奶油香煎生食級干貝 奶香生蠔 英式香酥魚條 香料淡菜   roast oyster, pan seared scallop, baked raw oyster, crispy fish fingers, herb seasoned mussel ",
              price: 1680,
              priceLevel: "$$$",
              category: "主菜",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/seafood_plate.jpeg",
            },
            {
              id: "c5",
              name: "肋眼牛排海陸分享盤",
              description: "Ribeye (20oz) and Seafoods 烤生蠔(龍蝦缺貨時改生蠔) 肋眼牛排(20盎司) 芝麻葉 玫瑰鹽 慢熬紅酒醬   16oz Ribeye, roast oyster, arugula, red wine sauce",
              price: 2480,
              priceLevel: "$$$",
              category: "主菜",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/ribeye_seafood.jpeg",
            },
          ]
        },
        {
          id: "cat4",
          name: "主廚義大利麵",
          items: [
            {
              id: "d1",
              name: "辣豆肉醬義大利麵",
              description: "Chilli con carne spaghetti 手工辣肉醬 墨西哥辣椒碎 紅腰豆 起司粉 義大利麵   chilli beef&pork, jalapeno, red kidney beans, Parmesan cheese, spaghetti",
              price: 295,
              priceLevel: "$",
              category: "義大利麵",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/chilli_spaghetti.jpeg",
            },
            {
              id: "d2",
              name: "白酒蛤蠣義大利麵",
              description: "Spaghetti with white wine and clams 白酒 蛤蠣 蒜末 九層塔 義大利麵   White wine, clams, garlic, basil, spaghetti",
              price: 320,
              priceLevel: "$$",
              category: "義大利麵",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/whiteWine_spaghetii.jpeg",
            },
            {
              id: "d3",
              name: "M9特色蝦爆麵",
              description: "",
              price: 390,
              priceLevel: "$$",
              category: "義大利麵",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/shrimp_spaghetii.jpeg",
            }, 
          ]
        },
        {
          id: "cat5",
          name: "經典義式燉飯",
          items: [
            {
              id: "e1",
              name: "焦糖鱈魚肝松露燉飯",
              description: "Truffle Risotto with Caramelized Cod Liver 歐式鱈魚肝醬 松露 芝麻葉 起司白醬 帕瑪森起司 焦糖",
              price: 460,
              priceLevel: "$$",
              category: "燉飯",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/risotto.jpeg",
            },
            {
              id: "e2",
              name: "明太子焦糖干貝燉飯",
              description: "Scallop Risotto 明太子 生食級干貝 起司白醬 帕馬森起司 發酵奶油",
              price: 620,
              priceLevel: "$$",
              category: "燉飯",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/scallop_risotto.jpeg",
            },
          ]
        },
        {
          id: "cat6",
          name: "特色調酒",
          items: [
            {
              id: "f1",
              name: "南丁格爾的溫柔",
              description: "Nightingale's Gentleness 琴酒 草莓利口酒 優格利口酒 草莓糖漿 荔枝糖漿 牛奶 蛋白",
              price: 350,
              priceLevel: "$$",
              category: "調酒",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/nightingale.jpeg",
            },
            {
              id: "f2",
              name: "蒂芬妮的冬日白雪",
              description: "Tiffany amidst ivory snow 薄荷白可可的絕美蒂芬妮粉",
              price: 480,
              priceLevel: "$$",
              category: "調酒",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/tiffany.jpg",
            },
            {
              id: "f3",
              name: "櫻花粉的浪漫",
              description: "Sakura Pink Romance 花果香氣調性的粉色系愛戀",
              price: 480,
              priceLevel: "$$",
              category: "調酒",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/sakura.jpg",
            },
            {
              id: "f4",
              name: "庫克船長的探險",
              description: "Captain Cook's Voyages 萊姆酒 哈密瓜利口酒 鳳梨糖漿 鳳梨 檸檬汁",
              price: 350,
              priceLevel: "$$",
              category: "調酒",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/captaincook.jpeg",
            },
            {
              id: "f5",
              name: "伊莉莎白的文藝復興",
              description: "Elizabethan's Renaissance 白蘭地 玫瑰香甜酒 玫瑰糖漿 檸檬汁",
              price: 350,
              priceLevel: "$$",
              category: "調酒",
              image: "https://pub-a121c7baee34407a9f7e858a3bd1afb5.r2.dev/elizabethan.jpeg",
            },
          ]
        }
      ]
    })
  })
]