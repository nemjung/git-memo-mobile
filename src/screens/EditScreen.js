import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ route, navigation }) => {
    const { editBlogPost } = useContext(Context);
    const id = route.params.id;
    const subject = route.params.subject;
    const content = route.params.content;
    const day = route.params.day;
    const month = route.params.month;
    const time = route.params.time;
    const room = route.params.room;


    //newsubject = "Computer", newcontent = "Computing", newtime = "19:00 - 21:00", newroom = "LH2 - 202";

    console.log(`Edit Screnns get: ${id} , ${subject}  , ${content} , ${day} , ${month} , ${time} , ${room}`);

    return <BlogPostForm onSubmit={(newSubject, newContent, newDay, newMonth, newTime, newRoom) => {
        editBlogPost(id, newSubject, newContent, newDay, newMonth, newTime, newRoom);
        navigation.navigate("Index");
    }}
        newSubject={subject}
        newContent={content}
        newDay={day}
        newMonth={month}
        newTime={time}
        newRoom={room}
    />;

};

export default EditScreen;