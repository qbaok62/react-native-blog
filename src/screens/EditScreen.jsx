import React from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = React.useContext(Context);
  const id = route.params.id;
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        editBlogPost(id, title, content, () => navigation.pop())
      }
    />
  );
};

const stytes = StyleSheet.create({});

export default EditScreen;
