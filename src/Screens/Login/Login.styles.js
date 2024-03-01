import { StyleSheet } from "react-native";
import { Font } from "../../../assets/Theme/CustomeText";



export const style = StyleSheet.create({


    container: {
        flex: 1,
    },
    continueButtonStyle: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        minWidth: '100%',
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    TextStyle: {
        fontSize: 20,
        fontWeight: "800",
        color: "white"
    },
    textInput: {
        backgroundColor: "white",
        marginTop: 30,
        color: "black",
        paddingHorizontal: 7,
        paddingVertical: 7,

        width: '100%',
        alignSelf: 'center',
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    appLogoStyleContainer: {
        flex: 1,
        minHeight: 350,
        justifyContent: 'center',
        alignItems: 'center',
    },
    appLogoStyle: {
        width: 290,
        height: 200,
        resizeMode: 'contain',
        // top: 70,
    },
    searchIcon: {
        paddingHorizontal: 7,
        opacity: 0.5,
    },
    LoadarView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
    },
    bluebackground: {
        backgroundColor: 'rgba(62, 73, 91, 0.8)',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        width: '100%',
        flex: 1,
    },
    HeadingText: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: Font.H1,
        color: 'white',
        fontWeight: "700"
 
    },
    InputStyle: {
        color: "gray",
        fontWeight: '600',
        fontSize: Font.InputText,
        width: '75%',
        fontFamily: 'OpenSans-Regular',
        minHeight: 35
    },
    errorView: {
        width: '99%',
        alignSelf: 'center',
        paddingTop: 10,
    },
    Paragraph: {
        textAlign: 'center',
        maxWidth: 300,
        alignSelf: 'center',
    },
    bottomContent: {
        color: "white",
        fontSize: Font.P,
    },
    BottomPart: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:20
    },
});
