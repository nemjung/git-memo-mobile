import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ( { route }) => {
    const { state } = useContext(Context);

    // const id = route.params.id;
    const blogPost = state.find((blogPost) =>  blogPost.id === route.params.id );

    console.log('Route Params ID:', route.params.id);
    console.log('Blog Post:', blogPost);
    console.log(blogPost.id , blogPost.subject, blogPost.content, blogPost.day, blogPost.month, blogPost.time, blogPost.room);

    return (
        <View>
            <Text>Subject:{blogPost.subject}</Text>
            <Text>Content:</Text>
            <Text>{blogPost.content}</Text>
            <Text>Day: {blogPost.day}</Text>
            <Text>Month: {blogPost.month}</Text>
            <Text>Start Time: {blogPost.time}</Text>
            <Text> At: {blogPost.room}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;