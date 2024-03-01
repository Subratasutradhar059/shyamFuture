import React, { useState, useCallback, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { GiftedChat, Send } from 'react-native-gifted-chat';

import Sends from "../../../../assets/Images/Logo/send.png"
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './Chat.styles';
import Back from "../../../../assets/Images/Logo/back.png"
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';

const Chat = ({ route, navigation }) => {
  const mydetails = useSelector(state => state.auth);

  const [messages, setMessages] = useState([]);

  const toID = route?.params?.ItemData?.userId;
  const fromID = mydetails?.userData?.userId
 
 

  useEffect(() => {
    const subscribe = firestore()
      .collection('chats')
      .doc( '' + fromID + toID)
      .collection('message')
      .orderBy('createdAt', 'desc');
    subscribe.onSnapshot(querySnapshot => {
      // console.log('querySnapshot', querySnapshot);
      const allmessage = querySnapshot.docs.map(item => { 
        return { ...item?._data, createdAt: item?._data?.createdAt };
      });
      setMessages(allmessage);
    });

    return () => subscribe;

  }, []); 

  const onSend = useCallback((messages = []) => {
    let msg = messages[0];
    const myMsg = {
      ...msg,
      sendBy: fromID,
      sendTo: toID,
      createdAt: Date.parse(msg.createdAt),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, myMsg));
    firestore()
      .collection('chats')
      .doc('' + fromID + toID)
      .collection('message')
      .add(myMsg);
    firestore()
      .collection('chats')
      .doc('' + toID + fromID)
      .collection('message')
      .add(myMsg);
  }, []);

  const Goback = () => {
    navigation.goBack()
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.HeaderContainer}>
        <TouchableOpacity style={style.imageContainer}
          onPress={Goback}
        >
          <Image
            source={Back}
            style={style.appLogoStyles}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}

        renderSend={props => {
          return (
            <Send {...props}>
              <View
                style={{
                  marginRight: 10,
                  marginBottom: 5,
                }}>
                <Image
                  source={Sends}
                  resizeMode={'center'}
                  style={style.send}
                />
              </View>
            </Send>
          );
        }}
        user={{
          _id: fromID,
          // avatar:mydetails.image
        }}
      />
    </SafeAreaView>
  );
};

export default Chat;
