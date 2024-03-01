import { StyleSheet } from "react-native";
import { Font } from "../../Assets/Theme/CustomeText";



export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  send: {
    width: 100,
    height: 100,
    tintColor: "red",
  },
  productRow: {
    flexDirection: 'row',
    justifyContent:"space-evenly",
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 20,
    paddingVertical:15,
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
    borderRadius: 100,
  },
  fullImg: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  img: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  bodyText: {
    width:200,
    fontSize: 16,
    color: "black",
    fontFamily: 'Poppins-Bold',
  },
  appLogoStyles: {
    width: 33,
    height: 33,
    borderRadius: 100
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
    backgroundColor: "white",
    borderRadius: 100,
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: 'rgba(62, 73, 91, 0.8)',
    width: "100%",
  },
});
