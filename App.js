
import React, { useEffect } from 'react';
import AppNavigator from './src/Navigation/AppNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './src/Redux/Slice/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';



const App = () => {
  const dispatch = useDispatch() 

  useEffect(() => {
    GetUser()
  }, [])

  const GetUser = async () => {
    try {
      const result = await AsyncStorage.getItem("userData")
      dispatch(addUser(JSON.parse(result)))
    } catch (error) {
      // console.log("user error ", error)
      dispatch(removeUser())
    }
  }

  return <AppNavigator />
};

export default App;