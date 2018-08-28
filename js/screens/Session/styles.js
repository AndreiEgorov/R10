import { StyleSheet , Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white"
  },
  locationAndFav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 15
  },
  location: {
    color: "#999999",
    fontSize: 17,
    fontFamily: "Montserrat-Regular"
  },
  title: {
    color: Platform.select({
      ios: "black",
      android:"#999999"
    }) ,
    fontSize: 25,
    fontFamily: "Montserrat-Regular",
    paddingTop: 15
  },
  time: {
    color: "#cf392a",
    paddingTop: 15,
    fontFamily: "Montserrat-Regular",
    fontSize: 18
  },
  description: {
    paddingTop: 15,
    fontFamily: "Montserrat-Light",
    fontSize: 20,
    lineHeight: 30
  },
  intro: {
    paddingTop: 25,
    fontFamily: "Montserrat-Regular",
    fontSize: 17,
    color: "#999999"
  },
  speakerInfo: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 2
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  speakerName: {
    fontSize: 15,
    fontFamily: "Montserrat-Regular",
    alignSelf: "center",
    paddingLeft: 10
  },

  button: {
    marginTop: 20,
    // marginBottom: 10,
    borderRadius: 10,
    alignSelf: "center"
  },

  buttonText: {
    fontSize: 18,
    color: "white",
    fontFamily: "Montserrat",
    alignSelf: "center",
    padding: 15,
    borderRadius: 15
  }
});

export default styles;
