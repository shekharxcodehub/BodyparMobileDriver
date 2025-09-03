import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, TextInput } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import tw from 'twrnc';
import Swiper from 'react-native-swiper';
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ProductCard from '../components/ProductCard';
import { colors } from '../theme/colors';

const banners = [
  require('../../assets/banner.png'),
  require('../../assets/banner.png'),
  require('../../assets/banner.png'),
];

const categories = [
  { id: '1', name: 'Female Vitality', icon: require('../../assets/female_vitality.png') },
  { id: '2', name: 'Male Vitality', icon: require('../../assets/male_vitality.png') },
  { id: '3', name: 'Adult Health', icon: require('../../assets/adult_health.png') },
  // Add more categories as needed
];

const topProducts = [
  {
    id: "1",
    name: "Women's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require('../../assets/mens_libido.png'),
  },
  {
    id: "2",
    name: "Men's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require('../../assets/womens_libido.jpg'),
  },
  {
    id: "3",
    name: "Men's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require('../../assets/womens_libido_capsules.jpg'),
  },
];

const dealsOfTheDay = [
  {
    id: "1",
    name: "Women's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require('../../assets/mens_libido.png'),
  },
  {
    id: "2",
    name: "Men's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require('../../assets/womens_libido.jpg'),
  },
  {
    id: "3",
    name: "Men's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require('../../assets/womens_libido_capsules.jpg'),
  },
];

const newLaunches = [
  {
    id: "1",
    name: "Women's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require('../../assets/mens_libido.png'),
  },
  {
    id: "2",
    name: "Men's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require('../../assets/womens_libido.jpg'),
  },
  {
    id: "3",
    name: "Men's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require('../../assets/womens_libido_capsules.jpg'),
  },
];

export default function HomeScreen({ navigation }) {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={tw`items-center mx-0`}>
      <Image source={item.icon} style={tw`w-28 h-28 mb-2 mr-3 rounded-lg`} />
      <Text style={tw`text-sm text-center`}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Curved Header */}
      <View style={{ position: 'relative', height: 200 }}>
        {/* Background color */}
        <View style={[tw`absolute w-full bg-[${colors.primary}] rounded-b-3xl`, { height: 190 }]} />

        {/* Curved SVG overlay */}
        <Svg
          height="200"
          width="100%"
          viewBox="0 0 400 200"
          style={{ position: 'absolute', top: 0 }}
        >
          <Path
            d="M0 0 H400 V140 Q200 200 0 140 Z"
            fill="#f87171"
          />
        </Svg>

        {/* Header content */}
        <View style={tw`absolute w-full px-4 pt-0`}>
          {/* Location + Cart Row */}
          <View style={tw`flex-row justify-between items-center py-6 pb-10`}>
            <View>
              <Text style={tw`text-white font-semibold`}>Your location</Text>
              <Text style={tw`text-white`} numberOfLines={1}>
                S9/98 old street Durban ...
              </Text>
            </View>
            <TouchableOpacity>
              <FontAwesome name="shopping-cart" onPress={() => navigation.navigate("CartScreen")} size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={[tw`bg-white rounded-lg flex-row items-center px-4 mt-4`, { height: 45, shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 4, elevation: 3 }]}>
            <AntDesign name="search1" size={18} color="black" />
            <TextInput
              placeholder="Search..."
              placeholderTextColor="gray"
              style={tw`ml-2 flex-1`}
              onPress={() => navigation.navigate("SearchScreen")}
            />
          </View>
        </View>
      </View>

      <View style={[tw`flex-1 bg-white px-4 pt-4`]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Banner */}
          <View style={[tw`mb-6`, { height: 150 }]}>
            <Swiper
              autoplay
              autoplayTimeout={5}
              showsPagination={false}
              loop
              dotStyle={tw`bg-white opacity-50 w-2 h-2 rounded-full`}
              activeDotStyle={tw`bg-white w-2 h-2 rounded-full`}
            >
              {banners.map((banner, index) => (
                <Image
                  key={index}
                  source={banner}
                  style={[tw`w-full rounded-lg`, { height: 150 }]}
                  resizeMode="cover"
                />
              ))}
            </Swiper>
          </View>

          {/* Categories */}
          <View style={tw`mb-6`}>
            <Text style={tw`text-lg font-bold mb-4`}>Categories</Text>
            <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Top Products */}
          <View style={tw`mb-6`}>
            <View style={tw`flex-row justify-between items-center mb-4`}>
              <Text style={tw`text-lg font-bold`}>Top Products</Text>
              <Text style={tw`text-[${colors.primary}]`} onPress={() => navigation.navigate("ProductListingScreen", { categoryId: "all" })}>View all</Text>
            </View>
            <FlatList
              data={topProducts}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ProductCard
                  border={false}
                  product={item}
                  onPress={() =>
                    navigation.navigate("ProductDetailsScreen", { product: item })
                  }
                  onAddToCart={() => console.log("Add to cart:", item.id)}
                  onAddToWishlist={() => console.log("Wishlist:", item.id)}
                  style={{ width: 150, marginRight: 12 }}
                />
              )}
            />
          </View>

          {/* Chat with Pharmacist */}
          <View style={tw`flex-row items-center bg-[${colors.primary}] bg-opacity-30 px-4 py-6 rounded-lg mb-4`}>
            {/* Left Side - Text */}
            <View style={tw`flex-1`}>
              <Text style={tw`text-gray-600 text-xs mb-1`}>
                Worried about side effects ?
              </Text>

              <Text style={tw`text-black text-lg font-bold`}>
                Chat with a Pharmacist
              </Text>
            </View>

            {/* Right Side - Button */}
            <TouchableOpacity
              style={tw`flex-row items-center border border-black rounded-lg px-4 py-2`}
            >
              <Ionicons name="chatbubble-outline" size={16} color="black" style={tw`mr-2`} />
              <Text style={tw`text-black font-medium`} onPress={() => navigation.navigate("ChatScreen")}>Chat now</Text>
            </TouchableOpacity>
          </View>

          {/* Border */}
          <View style={tw`border-b-2 border-gray-200 mb-6`} />

          {/* Deals of the Day */}
          <View style={tw`mb-6`}>
            <View style={tw`flex-row justify-between items-center mb-2`}>
              <Text style={tw`text-lg font-bold`}>Deals of the Day</Text>
              <Text style={tw`text-[${colors.primary}]`} onPress={() => navigation.navigate("ProductListingScreen", { categoryId: "all" })}>View all</Text>
            </View>
            <FlatList
              data={dealsOfTheDay}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ProductCard
                  border={false}
                  product={item}
                  onPress={() =>
                    navigation.navigate("ProductDetailsScreen", { product: item })
                  }
                  onAddToCart={() => console.log("Add to cart:", item.id)}
                  onAddToWishlist={() => console.log("Wishlist:", item.id)}
                  style={{ width: 150, marginRight: 12 }}
                />
              )}
            />
          </View>

          {/* Border */}
          <View style={tw`border-b-2 border-gray-200 mb-6`} />

          {/* New Launches */}
          <View style={tw`mb-6`}>
            <View style={tw`flex-row justify-between items-center mb-2`}>
              <Text style={tw`text-lg font-bold`}>New Launches</Text>
              <Text style={tw`text-[${colors.primary}]`} onPress={() => navigation.navigate("ProductListingScreen", { categoryId: "all" })}>View all</Text>
            </View>
            <FlatList
              data={newLaunches}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ProductCard
                  border={false}
                  product={item}
                  onPress={() =>
                    navigation.navigate("ProductDetailsScreen", { product: item })
                  }
                  onAddToCart={() => console.log("Add to cart:", item.id)}
                  onAddToWishlist={() => console.log("Wishlist:", item.id)}
                  style={{ width: 150, marginRight: 12 }}
                />
              )}
            />
          </View>
        </ScrollView>
      </View>
    </View >
  );
}