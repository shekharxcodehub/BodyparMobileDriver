import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";
import Header from "../components/Header";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const product = {
  id: "1",
  name: "Women's Libido, 60 Quick Release Capsules",
  brand: "Lorem Ipsum", // ✅ added brand
  qty: "2 bottles",
  price: "R325",
  oldPrice: "R499",
  discount: "25% off",
  packSize: "60 Capsules",
  image: require("../../assets/mens_libido.png"),
  images: [
    require("../../assets/mens_libido.png"),
    require("../../assets/mens_libido.png"),
    require("../../assets/mens_libido.png"),
    require("../../assets/mens_libido.png"),
    require("../../assets/mens_libido.png"),
  ],
};

const similarProducts = [
  {
    id: "2",
    name: "Men's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require("../../assets/womens_libido.jpg"),
  },
  {
    id: "3",
    name: "Premium Libido, 60 Capsules",
    qty: "1 bottle",
    price: "R180",
    oldPrice: "R220",
    discount: "10%",
    image: require("../../assets/mens_libido.png"),
  },
];

export default function ProductDetailsScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState({});

  const toggleSection = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const renderProduct = ({ item }) => (
    <View style={tw`w-1/2 p-2`}>
      <View style={tw`bg-white rounded-xl p-3`}>
        <Image
          source={item.image}
          style={tw`w-full h-36 rounded-lg`}
          resizeMode="contain"
        />
        <Text style={tw`text-sm font-semibold my-2`} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={tw`text-xs text-gray-500 mb-2`}>{item.qty}</Text>
        <View style={tw`flex-row items-center mb-2`}>
          <Text style={tw`text-base font-bold text-black mr-2`}>
            {item.price}
          </Text>
          <Text style={tw`text-sm text-gray-400 line-through mr-2`}>
            {item.oldPrice}
          </Text>
          <Text style={tw`text-sm text-green-600`}>{item.discount}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={""}
        showBack={true}
        showSearch={false}
        showCart={true}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Carousel */}
        <View style={tw`relative pb-2`}>
          <Carousel
            loop
            width={width}
            height={320}
            data={product.images}
            onSnapToItem={(index) => setActiveIndex(index)}
            renderItem={({ item }) => (
              <View style={tw`items-center justify-center`}>
                <Image
                  source={item}
                  style={tw`w-64 h-64`}
                  resizeMode="contain"
                />
              </View>
            )}
          />

          {/* Dots */}
          <View style={tw`absolute bottom-3 w-full flex-row justify-center`}>
            {product.images.map((_, index) => {
              const isActive = activeIndex === index;
              return (
                <View
                  key={index}
                  style={[
                    tw`mx-1`,
                    {
                      width: isActive ? 8 : 8,
                      height: isActive ? 8 : 8,
                      borderRadius: isActive ? 4 : 4,
                      backgroundColor: isActive ? "#FE6D73" : "#E5E7EB",
                    },
                  ]}
                />
              )
            })}
          </View>

          {/* Share button */}
          <TouchableOpacity
            style={tw`absolute top-4 right-4 bg-gray-100 rounded-full p-2 shadow`}
          >
            <Ionicons name="share-outline" size={22} color="black" />
          </TouchableOpacity>
        </View>

        {/* Product Info */}
        <View style={tw`px-4 py-4`}>
          <Text style={tw`text-lg font-bold text-black mb-1`}>
            {product.name}
          </Text>
          <Text style={tw`text-xs text-gray-500 mb-1`}>By {product.brand}</Text>
          <Text style={tw`text-sm text-gray-600 mb-3`}>{product.qty}</Text>

          {/* Price Section */}
          <View style={tw`border border-gray-300 rounded-lg p-2 mb-4`}>
            <View style={tw`flex-row items-center justify-between`}>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-gray-400 line-through mr-2`}>
                  {product.oldPrice}
                </Text>
                <Text style={tw`text-xl font-bold text-black mr-2`}>
                  {product.price}
                </Text>
                <Text style={tw`text-green-600 text-sm`}>{product.discount}</Text>
              </View>

              <TouchableOpacity style={tw`bg-[#FE6D73] px-5 py-2 rounded-lg`}>
                <Text style={tw`text-white font-medium`}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Delivery Info */}
          <View style={tw`-mx-4 mb-4`}>
            <View style={tw`bg-red-100 p-4 flex-row items-center w-full`}>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={20}
                color="black"
              />
              <View style={tw`ml-2`}>
                <Text style={tw`text-sm font-medium text-black`}>
                  Delivering in 45 mins
                </Text>
                <Text style={tw`text-xs text-gray-600`}>
                  Location: Durban, South Africa
                </Text>
              </View>
            </View>
          </View>

          {/* Pack size box */}
          <View
            style={tw`border border-gray-300 rounded-lg px-3 py-4 items-center`}
          >
            <Text style={tw`text-sm text-gray-600`}>
              Pack size : {product.packSize}
            </Text>
          </View>
        </View>

        <View style={tw`bg-white border border-gray-300 px-4 py-5 my-4`}>
          <View style={tw`flex-row`}>
            {/* Left column */}
            <View style={tw`flex-1`}>
              <View style={tw`mb-4`}>
                <Text style={tw`font-semibold text-black`}>Brand</Text>
                <Text style={tw`text-gray-500`}>Lorem Ipsum</Text>
              </View>
              <View>
                <Text style={tw`font-semibold text-black`}>
                  Manufactured on
                </Text>
                <Text style={tw`text-gray-500`}>12/12/2024</Text>
              </View>
            </View>

            {/* Divider */}
            <View style={tw`w-px bg-gray-300 mx-4`} />

            {/* Right column */}
            <View style={tw`flex-1`}>
              <View style={tw`mb-4`}>
                <Text style={tw`font-semibold text-black`}>Return policy</Text>
                <Text style={tw`text-gray-500`}>Not returnable</Text>
              </View>
              <View>
                <Text style={tw`font-semibold text-black`}>Expiry on</Text>
                <Text style={tw`text-gray-500`}>12/12/2026</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Accordion Sections */}
        {[
          { key: "details", title: "Product Details" },
          { key: "features", title: "Features" },
          { key: "usage", title: "Direction of Use" },
          { key: "benefits", title: "Benefits" },
        ].map((section) => (
          <View key={section.key} style={tw`bg-white mt-3 mx-4`}>
            <TouchableOpacity
              onPress={() => toggleSection(section.key)}
              style={tw`flex-row justify-between items-center px-4 py-3 border border-gray-300 rounded-lg`}
            >
              <Text style={tw`text-base font-semibold`}>
                {section.title}
              </Text>
              <Ionicons
                name={expanded[section.key] ? "chevron-up" : "chevron-down"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
            {expanded[section.key] && (
              <Text style={tw`px-2 py-3 text-sm text-gray-600`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ornare, nunc et bibendum cursus, ligula justo feugiat lectus.
              </Text>
            )}
          </View>
        ))}

        <View style={tw`bg-red-400 flex-row justify-around items-center py-4 my-6`}>
          {/* Free Delivery */}
          <View style={tw`flex-row items-center`}>
            <MaterialIcons name="local-shipping" size={28} color="white" />
            <View style={tw`ml-2`}>
              <Text style={tw`text-white text-base font-medium`}>
                Free Delivery
              </Text>
              <Text style={tw`text-white text-sm`}>above R499</Text>
            </View>
          </View>

          {/* COD available */}
          <View style={tw`flex-row items-center`}>
            <FontAwesome5 name="money-bill-wave" size={22} color="white" />
            <Text style={tw`ml-2 text-white text-base font-medium`}>
              COD available
            </Text>
          </View>
        </View>

        {/* Similar Products */}
        <View style={tw`mt-5`}>
          <View style={tw`flex-row justify-between items-center px-4 mb-2`}>
            <Text style={tw`text-lg font-bold`}>Similar Products</Text>
            <Text style={tw`text-sm text-[#FE6D73]`}>View all</Text>
          </View>
          <FlatList
            data={similarProducts}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={tw`px-2`}
            scrollEnabled={false}
          />
        </View>

        {/* Border */}
        <View style={tw`border-b-2 border-gray-200 my-4`} />

        {/* Frequently bought together Products */}
        <View style={tw`my-5`}>
          <View style={tw`flex-row justify-between items-center px-4 mb-2`}>
            <Text style={tw`text-lg font-bold`}>Frequently bought together</Text>
            <Text style={tw`text-sm text-[#FE6D73]`}>View all</Text>
          </View>
          <FlatList
            data={similarProducts}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={tw`px-2`}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}
