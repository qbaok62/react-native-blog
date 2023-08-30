import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation, route }) => {
  const { addBlogPost } = React.useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

const stytes = StyleSheet.create({});

export default CreateScreen;
