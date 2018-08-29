import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "black"
  },

  titleContainer: {
    flexDirection: "row",

    paddingVertical: 40,
    color: "white"
  },
  icon: {
    flex: 0.55,
    marginLeft: 15
  },
  title: {
    color: "white",
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
    justifyContent: "flex-start",
    alignSelf: "flex-start"
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
