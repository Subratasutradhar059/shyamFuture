import { StyleSheet } from "react-native";
import { Font } from "../../Assets/Theme/CustomeText";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(251, 251, 251, 0.8)'
    },
    Header: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    chat: {
        backgroundColor: 'rgba(62, 73, 91, 0.8)',
        paddingHorizontal: 70,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center"

    },
    chatText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "700"

    },
    itemsContainer: {
        backgroundColor: "#fff",

        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 16,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    HeaderContainer: {
        paddingHorizontal:20,
        paddingVertical:10,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: 'rgba(62, 73, 91, 0.8)',
        width: "100%",



    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily: "Poppins-SemiBold",
        color: "#000",
        // backgroundColor: "red"
    },
    description: {
        color: 'black',
        fontWeight: "700",
        marginTop: 8,
        width: 220,
        height: 90,
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 28,
        fontFamily: "Poppins-light",

    },
    productDescription: {
        // backgroundColor: "green"
    },
    price: {

        fontSize: 16,
        color: 'blue',
        fontWeight: "700"
    },

    appLogoStyleContainer: {


    },
    appLogoStyle: {
        width: 120,
        height: 140,
        marginRight: 5
        // resizeMode: 'contain',
        // top: 70,
    },
    CloseStyle: {
        width: 40,
        height: 40,

    },
    appLogoStyles: {
        width: 50,
        height: 50,

        borderRadius: 100
        // resizeMode: 'contain',
        // top: 70,
    },
    imageContainer: {
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    imageContainers: {
        backgroundColor:"white",
        borderRadius:100,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

});
