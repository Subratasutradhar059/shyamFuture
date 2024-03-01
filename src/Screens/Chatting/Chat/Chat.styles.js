import { StyleSheet } from "react-native";
import { Font } from "../../Assets/Theme/CustomeText";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        
      },
      send: {
        width: 30,
        height: 30,
        tintColor: "bl",
      },
      productRow: {
        width: '100%',
        flexDirection: 'row',
        maxHeight: 50,
        padding: 10,
        backgroundColor: "gray",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        marginTop: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      iconCont: {
        width: 35,
        height: 35,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
      },
      fullImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 100,
      },
      img: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
      },
      bodyText: {
        fontSize: 12,
        color: "black",
        fontFamily: 'Poppins-Medium',
        textTransform: 'capitalize',
        textAlign: 'left',
        // marginTop: normalize(40,
      },
      HeaderContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: 'rgba(62, 73, 91, 0.8)',
        width: "100%",
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
      appLogoStyles: {
        width: 33,
        height: 33,
    
        borderRadius: 100
        // resizeMode: 'contain',
        // top: 70,
      },

});
