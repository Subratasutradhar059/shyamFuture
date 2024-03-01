import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from "../../../assets/Images/Logo/logo.jpg"
import { style } from './Splash.styles';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
     navigation.navigate('Login');
   
    }, 2000); 
  }, []);

  return (
    <View style={style.container}>
     <Image source={Logo} style={style.logo} />
    </View>
  );
};


export default SplashScreen;