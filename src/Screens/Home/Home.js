import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ActivityIndicator, Pressable, Modal } from 'react-native';
import { style } from './Home.styles';
import Logo from "../../../assets/Images/Logo/logo.jpg"
import Chat from "../../../assets/Images/Logo/chat.png"
import Close from "../../../assets/Images/Logo/close.png"
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { productRequest } from '../../Redux/ApiAction/ProductApiRequest';
import { removeUser } from '../../Redux/Slice/AuthSlice';

const Home = ({ navigation }) => {
    const route = useRoute()
    const [logoutModal, setLogoutModal] = useState(false);
    const { data, isLoading } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const UserData = useSelector(state => state.auth)
    useEffect(() => {
        console.log('hii');
        dispatch(productRequest())
    }, [])

    const limitText = (text, limit) => {
        if (text.length <= limit) {
            return text;
        } else {
            return text.substring(0, limit) + '...';
        }
    };

    const ChattingPage = () => {
        navigation.navigate('Allusers')
    };
    const LogoutModal = () => {
        setLogoutModal(true)
    };

    const Logout = () => {
        dispatch(removeUser())
    };
    const LogoutClose = () => {
        setLogoutModal(false)
    };

    const renderItem = ({ item }) => (


        <View style={style.itemsContainer}>
            <View style={style.appLogoStyleContainer}>
                <Image
                    source={{ uri: item?.image }}
                    style={style.appLogoStyle}
                    resizeMode="contain"
                />
            </View>
            <View style={style.productDescription}>
                <Text style={style.title}>{limitText(item?.title, 22)}</Text>
                <Text style={style.description}>{limitText(item?.description, 100)}</Text>
                <Text style={style.price}> <Text style={{ color: "black" }}>Price:</Text> ₹{item?.price}</Text>
            </View>
        </View>
    );

    return (



        <View style={style.container}>
            {
                isLoading ?
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                        <ActivityIndicator
                            size={"learge"}
                            color={"red"}
                        />


                    </View>
                    :
                    <>
                        <View style={style.HeaderContainer}>
                            <TouchableOpacity style={style.imageContainer} onPress={LogoutModal}>
                                <Image
                                    source={Logo}
                                    style={style.appLogoStyles}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={style.imageContainers} onPress={ChattingPage}>
                                <Image
                                    source={Chat}
                                    style={style.appLogoStyles}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                        </View>


                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />



                    </>

            }

            <Modal transparent={true} visible={logoutModal}>
                <Pressable
                    style={{
                        backgroundColor: '#000000aa',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#fff',
                            padding: 30,
                            borderRadius: 15,
                            width: '90%',
                            // alignItems: 'center',
                            flexDirection: 'column',
                        }}>


                        <View style={{}} >
                            <TouchableOpacity style={{ alignItems: "flex-end" }} onPress={LogoutClose}>
                                <Image
                                    source={Close}
                                    style={style.CloseStyle}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    source={Logo}
                                    style={style.appLogoStyle}
                                    resizeMode="contain"
                                />
                            </View>

                            <TouchableOpacity style={{ backgroundColor: "#E78895", borderRadius: 10, alignItems: "center", paddingHorizontal: 20 }} onPress={Logout} >
                                <Text style={{ color: "white", paddingHorizontal: 20, paddingVertical: 10, fontWeight: "700" }}>Logout</Text>
                            </TouchableOpacity>
                        </View>


                    </View>



                </Pressable>
            </Modal>


        </View>

    );
};



export default Home;