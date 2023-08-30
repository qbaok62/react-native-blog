import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const { state } = React.useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export const headerRight = ({ navigation, route }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Edit", { id: route.params.id })}
    >
      <EvilIcons name="pencil" size={35} />
    </TouchableOpacity>
  );
};

const stytes = StyleSheet.create({});

export default ShowScreen;
