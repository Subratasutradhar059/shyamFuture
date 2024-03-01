
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chatting from '../Screens/Chatting/Chatting';
import Allusers from '../Screens/Chatting/AllUsers/Allusers';
import Home from '../Screens/Home/Home';
import Chat from '../Screens/Chatting/Chat/Chat';

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}> 
            <Stack.Screen name="Home" component={Home} /> 
            <Stack.Screen name="Chatting" component={Chatting} />
            <Stack.Screen name="Allusers" component={Allusers} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>

    );
};

export default UserNavigator;