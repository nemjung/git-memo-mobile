import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit }) => {
    const [ subject, setSubject ] = useState('');
    const [ content, setContent ] = useState('');
    const [ day, setDay ] = useState('');
    const [ month, setMonth] = useState('');
    const [ time, setTime ] = useState('');
    const [ room, setRoom ] = useState('');
    return (
        <View>
            <Text style={styles.label}>Subject: </Text>
            <TextInput style={styles.input} placeholder="ชื่อวิชา ยกตัวอย่างเช่น Math" value={subject} onChangeText={(text) => setSubject(text)}/>

            <Text style={styles.label}>Content: </Text>
            <TextInput style={styles.input} placeholder="เนื้อหาวิชา ยกตัวอย่างเช่น Calculus, Coding, ... " value={content} onChangeText={(text) => setContent(text)}/>

            <Text style={styles.label}>Day: </Text>
            <TextInput style={styles.input} placeholder="วันที่สอบ ยกตัวอย่างเช่น 12" value={day} onChangeText={(text) => setDay(text)}/>

            <Text style={styles.label}>Month: </Text>
            <TextInput style={styles.input} placeholder="เดือนที่สอบ 1 - 12 ยกตัวอย่างเช่น October = 10" value={month} onChangeText={(text) => setMonth(text)}/>

            <Text style={styles.label}>When: </Text>
            <TextInput style={styles.input} placeholder="เวลาเริ่มสอบ ยกตัวอย่างเช่น เที่ยง = 12" value={time} onChangeText={(text) => setTime(text)}/>

            <Text style={styles.label}>Room: </Text>
            <TextInput style={styles.input} placeholder="ห้องสอบ" value={room} onChangeText={(text) => setRoom(text)}/>

            <Button title="Save" onPress={() => onSubmit(subject, content, day, month, time, room)}/>
        </View>
    );
    
};

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#000",
        marginBottom: 15,
        padding: 5,
        margin: 10,
    },
});

export default BlogPostForm;