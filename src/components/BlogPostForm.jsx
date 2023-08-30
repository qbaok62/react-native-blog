import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const BlogPostForm = (props) => {
  const { initialValues, onSubmit } = props;
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);

  return (
    <View>
      <Text style={stytes.label}>Enter Title:</Text>
      <TextInput
        style={stytes.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={stytes.label}>Enter Content:</Text>
      <TextInput
        style={stytes.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

const stytes = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default BlogPostForm;
