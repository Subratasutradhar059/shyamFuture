import React, { useEffect } from 'react';
import { useState, useCallback } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'


const Chatting = ({ navigation }) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const docID = userID > MyId ? MyId + "-" + userID : userID + "-" + MyId
        const querySnapshot = firestore().collection('Chats').doc(docID).collection('message').orderBy('createdAt', 'desc');

        querySnapshot.onSnapshot(snapshoot => {
            const allMSg = snapshoot?.docs?.map(snap => {
                let data = snap.data()
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