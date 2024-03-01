
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';

import UserNavigator from './UserNavigator';


const AppNavigator = () => {
  const AuthData = useSelector(state => state?.auth)
 
  return (
    <NavigationContainer>
      {AuthData?.userData == null ? <AuthNavigator /> : <UserNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;