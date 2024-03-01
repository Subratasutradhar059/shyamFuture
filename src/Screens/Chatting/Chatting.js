import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { style } from './Chatting.styles';
import { useState, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'


const Chatting = ({ navigation }) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        //   setMessages([
        //     {
        //       _id: 1,
        //       text: 'Hello developer',
        //       createdAt: new Date(),
        //       user: {
        //         _id: 2,
        //         name: 'React Native',
        //         avatar: 'https://placeimg.com/140/140/any',
        //       },
        //     },
        //   ])

        const docID = userID > MyId ? MyId + "-" + userID : userID + "-" + MyId
        const querySnapshot = firestore().collection('Chats').doc(docID).collection('message').orderBy('createdAt', 'desc');

        querySnapshot.onSnapshot(snapshoot => {
            const allMSg = snapshoot?.docs?.map(snap => {
                let data = snap.data()
                console.log("data", data)
                if (data.createdAt) {
                    return {
                        ...snap?.data(),
                        createdAt: snap?.data()?.createdAt?.toDate(),
                    }
                }
                else {
                    return {
                        ...snap?.data(),
                        createdAt: new Date(),
                    }
                }

            });

            setMessages(allMSg)

        });

    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])



    return (
        // <View style={style.container}>
        //     <View style={style.Header}>
        //         <TouchableOpacity style={style.chat}>
        //             <Text style={style.chatText}>Chatting</Text>
        //         </TouchableOpacity>
        //     </View>


        // </View>
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />

    );
};





export default Chatting;