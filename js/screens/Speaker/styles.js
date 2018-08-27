import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "black"
  },

  titelContainer: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 40,
    color: "white",
    justifyContent: "center"
  },
  icon: {
    alignSelf: "flex-start"
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "Montserrat-Regular"
  },

  speakerInfo: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,

    marginBottom: 40
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    marginVertical: 20
  },
  name: {
    fontFamily: "Montserrat-Regular",
    fontSize: 35,
    paddingVertical: 20,
    alignSelf: "center"
  },
  bio: {
    fontFamily: "Montserrat-Light",
    fontSize: 20,
    paddingHorizontal: 20
  },
  button: {
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 15,
    alignSelf: "center"
  },
  buttonText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Montserrat",
    alignSelf: "center",
    padding: 20,
    borderRadius: 15
  }
});

export default styles;
