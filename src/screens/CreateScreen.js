import React, { useContext } from "react";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from '../context/BlogContext';

const CreateScreen = ( {navigation} ) => {
    const { addBlogPost } = useContext(Context);

    return <BlogPostForm onSubmit={(subject, content, day, month, time, room)=>{
        addBlogPost(subject, content, day, month, time, room);
        navigation.navigate("Index");
    }}/>;

};

export default CreateScreen;