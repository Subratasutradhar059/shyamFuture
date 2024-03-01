import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, SafeAreaView, FlatList, Image } from 'react-native';
import { style } from './Allusers.styles';
import { useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { useSelector } from 'react-redux';
import Back from "../../../../assets/Images/Logo/back.png"
import Rightarrow from "../../../../assets/Images/Logo/rightarrow.png"
import User from "../../../../assets/Images/Logo/user.png"


const Allusers = ({ navigation }) => {
    const [loader, setLoader] = useState(true);
    const AuthData = useSelector(state => state?.auth)
    const [allusers, setAllUsers] = useState([]);
    useEffect(() => {
        let tempUserdata = [];
        firestore()
            .collection('users')
            // Filter results
            .where('userId', '!=', AuthData?.userData?.userId)
            .get()
            .then(res => {
                if (res?.docs != []) {
                    res?.docs?.map(item => tempUserdata.push(item?.data()));

                }
                setAllUsers(tempUserdata);

            })
            .catch(err => console.log('err', err), setLoader(false));
    }, []);

    const Goback = () => {
        navigation.goBack()
    };

    const renderItem = ({ item, index }) => {

        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Chat', { ItemData: item });
                }}
                style={style.productRow}
            >
                <View style={style?.iconCont}>
                    <Image
                        source={User}
                        style={[style.fullImg]}
                    />
                </View>

                <Text style={[style.bodyText]}>{item?.email}</Text>

                <View style={style?.iconCont}>
                    <Image
                        source={Rightarrow}
                        style={[style.fullImg]}
                    />
                </View>
                <View>

                </View>
            </TouchableOpacity>
        );
    };





    if (loader == true) {
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator
                size={"learge"}
                color={"red"}
            />
        </View>;
    } else {
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

                <FlatList
                    style={{ padding: 15 }}
                    data={allusers}
                    keyExtractor={({ item, index }) => {
                        return item?.AuthData?.userData?.userId.toString();
                    }}
                    renderItem={renderItem}
                    ListEmptyComponent={<View style={{
                        flex: 1,
                        alignItems: "center", justifyContent: "center", margintop: 100
                    }}><Text style={{ fontSize: 17 }}>no data found</Text></View>}
                    ListFooterComponent={<View style={{ marginBottom: 30 }} />}
                />
            </SafeAreaView>
        );
    }
};





export default Allusers;