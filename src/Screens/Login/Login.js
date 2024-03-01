import React, { useState, useContext, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator, 
  Alert,
} from 'react-native';

import { style } from './Login.styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Logo from "../../../assets/Images/Logo/logo.jpg"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Color from '../../../assets/Theme/Color'
import { useDispatch, useSelector } from 'react-redux';

import firestore, { firebase } from "@react-native-firebase/firestore"
import uuid from 'react-native-uuid';
import { addUser } from '../../Redux/Slice/AuthSlice';



const Login = ({ navigation }) => {
  const [loader, setLoader] = useState(false); 

  const dispatch = useDispatch(); 
  // const UserId = uuid.v4() 

  useEffect(() => {
    if(firebase){
      firebase.initializeApp()
    }
  }, [firebase])

  const loginUser = async (values) => {
    try { 
      setLoader(true)
      const response = await firestore()?.collection("users")?.doc(values?.email).set({
        email: values?.email,
        password: values?.password,
        userId: values?.email
      })
      console.log('response', response);
      const Userdata = {
        email: values?.email,
        userId: values?.email
      }
      dispatch(addUser(Userdata))
      setLoader(false)
    } catch (error) {
      console.log('error', error);
      dispatch(addUser(null))
      setLoader(false)
    }
  }
 
  /// Handle login ///

  const handleLogin = (values) => { 
    if (values) {
      loginUser(values) 
    } else {
      setLoader(false)
      Alert.alert('Invalid credentials', 'Please enter correct email and password.');
    }
  };

  // Validation //
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email name is required'),
    password: Yup.string().required('Password is required'),
  });


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <KeyboardAwareScrollView
        style={style.container}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={style.container}>
          {loader == true ? (
            <View style={style.LoadarView}>
              <ActivityIndicator size={'large'} color={Color.secondary} />
            </View>
          ) : (
            <View style={style.container}>
              <View style={style.appLogoStyleContainer}>
                <Image
                  source={Logo}
                  style={style.appLogoStyle}
                  resizeMode="contain"
                />
              </View>

              <View style={style.bluebackground}>
                <Text Bold style={[style.HeadingText]}>
                  Sign In
                </Text>
                <Formik
                  validationSchema={SignInSchema}
                  initialValues={{
                    email: 'demo@yopmail.com',
                    password: 'demo@124',
                  }}
                  onSubmit={values => {
                    handleLogin(values);
                  }}>
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isValid,
                  }) => (
                    <View style={{ paddingHorizontal: 20, marginBottom: 50 }}>
                      <View
                        style={[
                          style.textInput,
                          { flexDirection: 'row', alignItems: 'center' },
                        ]}>

                        <TextInput
                          style={style.InputStyle}
                          placeholder="Email"
                          placeholderTextColor={Color.lightgray}
                          // keyboardType="phone-pad"
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                        />
                      </View>
                      {errors.email && touched.email && (
                        <View style={style.errorView}>
                          <Text
                            style={{
                              fontSize: 16,
                              color: "red",
                            }}>
                            {errors.email}
                          </Text>
                        </View>
                      )}

                      <View
                        style={[
                          style.textInput,
                          { flexDirection: 'row', alignItems: 'center' },
                        ]}>

                        <TextInput
                          style={style.InputStyle}
                          placeholder="Password"
                          placeholderTextColor={Color.lightgray}

                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                        />

                      </View>

                      {errors.password && touched.password && (
                        <View style={style.errorView}>
                          <Text
                            style={{
                              fontSize: 16,
                              color: "red",
                            }}>
                            {errors.password}
                          </Text>
                        </View>
                      )}

                      <TouchableOpacity style={[style.continueButtonStyle, { backgroundColor: "#40A2E3", paddingVertical: 15, marginTop: 30 }]} onPress={() => handleSubmit()}>
                        <Text style={style.TextStyle}>Sign in</Text>
                      </TouchableOpacity>



                    </View>
                  )}
                </Formik>
              </View>
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>

    </SafeAreaView>
  );
};




export default Login;