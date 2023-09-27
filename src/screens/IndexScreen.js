import React, { useContext, useEffect }from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const { state, deleteBlogPost, sortBlogPost } = useContext(Context); 
    // const blogPosts = [
    //     { title: "Blog Post #1"}, 
    //     { title: "Blog Post #2"},
    //     { title: "Blog Post #3"}
    // ];
    useEffect(() => {
        // Call sortBlogPosts when the component mounts
        sortBlogPost();
    }, []);

    return (
        <View>
            <Button title="Sort by Day/Month" onPress={sortBlogPost} />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.subject}
                renderItem={({ item }) => {
                    console.log(item.id, item.subject, item.content, item.day, item.month, item.time, item.room);
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show',
                            {
                                id: item.id,
                                subject: item.subject,
                                content: item.content,
                                day: item.day,
                                month: item.month,
                                time: item.time,
                                room: item.room,
                            })}>

                            <View style={styles.row}>
                                <Text style={styles.title}> {item.subject} {item.day}/{item.month}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash-2" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 20,
    },
    icon: {
        fontSize: 24,
    },
});

export default IndexScreen;