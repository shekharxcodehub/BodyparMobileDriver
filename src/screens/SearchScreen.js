import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";
import Header from "../components/Header";
import { colors } from "../theme/colors";

const dummySuggestions = ["Protein Powder", "Multivitamin", "Fish Oil"];
const dummyResults = [
  {
    id: "1",
    name: "Whey Protein",
    qty: "1kg pack",
    price: "₹1999",
    oldPrice: "₹2499",
    discount: "20% OFF",
    image: require("../../assets/mens_libido.png"),
  },
  {
    id: "2",
    name: "Omega 3 Capsules",
    qty: "60 capsules",
    price: "₹699",
    oldPrice: "₹999",
    discount: "30% OFF",
    image: require("../../assets/mens_libido.png"),
  },
];

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "Vitamin C",
    "Ashwagandha",
    "Green Tea",
  ]);
  const [results, setResults] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);
    setResults([]); // reset results while typing
  };

  const handleSubmit = () => {
    if (!query) return;
    // simulate API
    setResults(dummyResults);
    if (!recentSearches.includes(query)) {
      setRecentSearches([query, ...recentSearches]);
    }
  };

  const renderRecent = () => (
    <View>
      <Text style={tw`text-gray-500 mb-2 font-semibold`}>Recent Searches</Text>
      {recentSearches.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={tw`flex-row items-center py-2 border-b border-gray-200`}
          onPress={() => {
            setQuery(item);
            handleSubmit();
          }}
        >
          <Ionicons
            name="time-outline"
            size={18}
            color="#666"
            style={tw`mr-2`}
          />
          <Text style={tw`text-gray-700 flex-1`}>{item}</Text>
          <Ionicons name="arrow-forward" size={16} color="#999" />
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderSuggestions = () => (
    <View>
      <Text style={tw`text-gray-500 mb-2 font-semibold`}>Suggestions</Text>
      {dummySuggestions
        .filter((s) => s.toLowerCase().includes(query.toLowerCase()))
        .map((item, index) => (
          <TouchableOpacity
            key={index}
            style={tw`flex-row items-center py-2 border-b border-gray-200`}
            onPress={() => {
              setQuery(item);
              handleSubmit();
            }}
          >
            <Ionicons name="search-outline" size={18} color="#666" style={tw`mr-2`} />
            <Text style={tw`text-gray-700 flex-1`}>{item}</Text>
            <Ionicons name="arrow-forward" size={16} color="#999" />
          </TouchableOpacity>
        ))}
    </View>
  );

  const renderResults = () => (
    <FlatList
      data={results}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={tw`bg-white rounded-xl p-3 mb-3 border border-gray-200`}
          activeOpacity={0.8}
        >
          <Image
            source={item.image}
            style={tw`w-full h-36 rounded-lg`}
            resizeMode="contain"
          />
          <Text
            style={tw`text-sm font-semibold my-2`}
            numberOfLines={2}
          >
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
          <View style={tw`flex-row items-center`}>
            <TouchableOpacity
              style={[
                tw`rounded-lg border border-gray-300 items-center justify-center mr-2`,
                { width: 40, height: 40 },
              ]}
            >
              <MaterialCommunityIcons
                name="heart-plus"
                size={24}
                color="#FF6B6B"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                tw`flex-1 bg-[${colors.primary}] rounded-lg items-center justify-center`,
                { height: 40 },
              ]}
            >
              <Text style={tw`text-white text-sm font-medium`}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
      ListEmptyComponent={
        <View style={tw`items-center mt-10`}>
          <Ionicons name="alert-circle-outline" size={40} color="#999" />
          <Text style={tw`text-gray-500 mt-2`}>No products found</Text>
        </View>
      }
    />
  );

  return (
    <View style={tw`flex-1 bg-white px-4 py-4 border-b border-gray-200`}>
      {/* Search Bar */}
      <View style={tw`flex-row items-center bg-gray-100 rounded-lg px-3 py-2 mb-4`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          value={query}
          onChangeText={handleSearch}
          onSubmitEditing={handleSubmit}
          placeholder="Search products"
          style={tw`flex-1 ml-2 text-base`}
          returnKeyType="search"
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery("")}>
            <Ionicons name="close-circle" size={20} color="#666" />
          </TouchableOpacity>
        )}
      </View>

      {/* Conditional States */}
      {results.length > 0
        ? renderResults()
        : query.length > 0
          ? renderSuggestions()
          : renderRecent()}
    </View>
  );
}
