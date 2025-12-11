import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import tw from "twrnc";
import Header from "../components/Header";

const ItemImage = "https://i.imgur.com/jNNT4LE.png";

// Enable LayoutAnimation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental &&
  !global.nativeFabricUIManager
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function HistoryScreen() {
  const [tab, setTab] = useState("All");
  const [expandedId, setExpandedId] = useState(null);
  const [online, setOnline] = useState(false);

  const user = {
    name: "Cameron",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Durban, South Africa",
  };

  const orders = [
    {
      id: "6789",
      status: "completed",
      customer: "Carol Higgins",
      type: "Delivery",
      amount: "R499",
      paid: "Paid by card",
      date: "12/04/2025",
      time: "11 AM",
      earning: "R55",
      distance: "4.8km",
      reason: "",
      items: [
        { name: "Women’s libido quick release 60 capsules", qty: 1 },
        { name: "Women’s libido quick release 60 capsules", qty: 2 },
      ],
    },
    {
      id: "6790",
      status: "incomplete",
      customer: "Carol Higgins",
      type: "Delivery",
      amount: "R499",
      paid: "Paid by card",
      date: "12/04/2025",
      time: "11 AM",
      earning: "R55",
      distance: "4.8km",
      reason: "Customer not at home",
      items: [
        { name: "Women’s libido quick release 60 capsules", qty: 1 },
        { name: "Women’s libido quick release 60 capsules", qty: 2 },
      ],
    },
  ];

  const filteredOrders =
    tab === "All"
      ? orders
      : tab === "Completed"
        ? orders.filter((o) => o.status === "completed")
        : orders.filter((o) => o.status === "incomplete");

  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <Header user={user} online={online} setOnline={setOnline} />

      {/* TABS */}
      <View style={tw`flex-row justify-around border-b border-gray-200 bg-white py-3`}>
        {["All", "Completed", "Incomplete"].map((t) => (
          <TouchableOpacity key={t} onPress={() => setTab(t)}>
            <Text
              style={tw`px-5 py-2 rounded-md ${tab === t ? "bg-red-400 text-white" : "text-gray-600"
                }`}
            >
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={tw`px-4 pb-10`}>
        {filteredOrders.map((order) => (
          <View
            key={order.id}
            style={tw`bg-white border border-[#e5e5e5] rounded-xl p-5 mt-4`}
          >
            {/* HEADER */}
            <View style={tw`flex-row justify-between mb-2`}>
              <View>
                <Text
                  style={tw`text-[15px] font-semibold ${order.status === "incomplete" ? "text-red-500" : "text-red-400"
                    }`}
                >
                  {order.status === "incomplete" ? "INCOMPLETE" : "Delivery"}
                </Text>

                <Text style={tw`text-[13px] text-gray-700`}>
                  {order.customer}
                </Text>

                <Text style={tw`text-[13px]`}>
                  Amount: {order.amount}{" "}
                  <Text style={tw`text-green-600`}>{order.paid}</Text>
                </Text>
              </View>

              <View style={tw`items-end`}>
                <Text style={tw`text-[12px] text-gray-500`}>
                  ID: #{order.id}
                </Text>
                <Text style={tw`text-[12px] text-gray-500`}>{order.date}</Text>
                <Text style={tw`text-[12px] text-gray-500`}>{order.time}</Text>
              </View>
            </View>

            {/* EXPECTED EARNING */}
            <View style={tw`flex-row justify-between mb-3`}>
              <Text style={tw`text-[13px] font-semibold`}>
                Expected earning after the order
              </Text>
              <Text style={tw`text-[16px] font-semibold`}>{order.earning}</Text>
            </View>

            {/* ADDRESS */}
            <View style={tw`mb-4`}>
              <Text style={tw`text-[13px] font-semibold`}>
                Address ({order.distance})
              </Text>

              <Text style={tw`text-[12px] text-gray-600`}>
                17 Mandela Avenue, Diepkloof Zone 4, Soweto, Johannesburg, Gauteng, 1862
              </Text>
            </View>

            {/* DIVIDER WITH TEXT */}
            <View style={tw`flex-row items-center my-2`}>
              <View style={tw`flex-1 h-[1px] bg-red-300`} />
              <Text style={tw`mx-3 text-[12px] text-gray-500`}>
                Order Items ({order.items.length})
              </Text>
              <View style={tw`flex-1 h-[1px] bg-red-300`} />
            </View>

            {/* FIRST ITEM (always visible) */}
            <View style={tw`flex-row mb-3`}>
              <Image
                source={{ uri: ItemImage }}
                style={tw`w-[70px] h-[70px] rounded-lg mr-4`}
              />

              <View style={tw`flex-1`}>
                <Text style={tw`text-[13px] text-gray-700`}>
                  {order.items[0].name}
                </Text>
                <Text style={tw`text-[11px] text-gray-500 mt-1`}>
                  Pack of 2 bottles
                </Text>
              </View>

              <Text style={tw`text-[13px] font-semibold`}>
                x{order.items[0].qty}
              </Text>
            </View>

            {/* EXTRA ITEMS */}
            {expandedId === order.id &&
              order.items.slice(1).map((item, idx) => (
                <View key={idx} style={tw`flex-row mb-3`}>
                  <Image
                    source={{ uri: ItemImage }}
                    style={tw`w-[55px] h-[55px] rounded-lg mr-3`}
                  />

                  <View style={tw`flex-1`}>
                    <Text style={tw`text-[13px] text-gray-700`}>
                      {item.name}
                    </Text>
                    <Text style={tw`text-[11px] text-gray-500`}>
                      Pack of 2 bottles
                    </Text>
                  </View>

                  <Text style={tw`text-[13px] font-semibold`}>
                    x{item.qty}
                  </Text>
                </View>
              ))}

            {/* SEE MORE */}
            {expandedId !== order.id && order.items.length > 1 && (
              <TouchableOpacity onPress={() => toggleExpand(order.id)}>
                <Text style={tw`text-[12px] text-gray-500 text-right`}>
                  +see more
                </Text>
              </TouchableOpacity>
            )}

            {/* INCOMPLETE FOOTER */}
            {order.status === "incomplete" && (
              <Text style={tw`text-[12px] text-red-500 text-right mt-2`}>
                {order.reason}
              </Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
