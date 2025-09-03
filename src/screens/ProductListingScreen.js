import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const products = [
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

const repeatedProducts = Array.from({ length: 10 }, (_, i) =>
  products.map((p, idx) => ({ ...p, id: `${p.id}-copy-${i}-${idx}` }))).flat();

export default function ProductListingScreen({ navigation }) {
  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Product Listing"}
        showBack={true}
        showSearch={true}
        showCart={true}
        cartCount={3}
      />

      {/* Product Grid */}
      <FlatList
        data={repeatedProducts}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        numColumns={2}
        contentContainerStyle={tw`p-2`}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={tw`justify-between`}
        renderItem={({ item }) => (
          <View style={tw`flex-1 p-2`}>
            <ProductCard
              border={true}
              product={item}
              onPress={() =>
                navigation.navigate("ProductDetailsScreen", { product: item })
              }
              onAddToCart={() => console.log("Add to cart:", item.id)}
              onAddToWishlist={() => console.log("Wishlist:", item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}
