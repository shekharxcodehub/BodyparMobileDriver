import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { colors } from "../theme/colors";

const dummyMessages = [
  { id: "1", text: "Hello", sender: "doctor" },
  { id: "2", text: "Hello", sender: "user" },
  {
    id: "3",
    text: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    sender: "doctor",
  },
  {
    id: "4",
    text: "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.",
    sender: "doctor",
  },
  { id: "5", text: "okie", sender: "user" },
  { id: "6", text: "can you share pics ?", sender: "user" },
  {
    id: "7",
    image: require("../../assets/mens_libido.png"), // sample image
    sender: "doctor",
  },
];

export default function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState(dummyMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === "user";
    return (
      <View
        style={[
          tw`max-w-3/4 rounded-lg px-3 py-2 my-1`,
          isUser ? tw`self-end bg-[${colors.primary}] bg-opacity-20` : tw`self-start bg-[${colors.primary}] bg-opacity-30`,
        ]}
      >
        {item.text && (
          <Text style={tw`text-sm text-gray-800`}>{item.text}</Text>
        )}
        {item.image && (
          <Image
            source={item.image}
            style={tw`w-60 h-32 rounded-lg mt-1`}
            resizeMode="cover"
          />
        )}
      </View>
    );
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View
        style={tw`flex-row items-center bg-[${colors.primary}] px-4 py-4 rounded-b-xl`}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?img=12" }}
          style={tw`w-10 h-10 rounded-full ml-3`}
        />
        <View style={tw`ml-2 flex-1`}>
          <Text style={tw`text-white font-semibold`}>Doctor</Text>
          <Text style={tw`text-green-200 text-xs`}>Online</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="call" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={tw`p-4`}
      />

      {/* Input Bar */}
      <KeyboardAvoidingView>
        <View
          style={tw`flex-row items-center border-t border-gray-200 px-3 py-2 pb-4`}
        >
          <TouchableOpacity style={tw`mr-2`}>
            <Ionicons name="attach" size={24} color="#FF6B6B" />
          </TouchableOpacity>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message"
            style={tw`flex-1 bg-white px-3 py-2 rounded-full border border-gray-300 text-sm`}
          />
          <TouchableOpacity
            onPress={handleSend}
            style={tw`ml-2 bg-[${colors.primary}] p-3 rounded-full`}
          >
            <Ionicons name="send" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
