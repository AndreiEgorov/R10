import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white"
  },

  divider: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6"
  },
  image: {
    width: 245,
    height: 60,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 30
  },

  headings: {
    fontSize: 27,
    fontWeight: "bold",
    marginTop: 20
  },

  sectionTitle: {
    color: "#9963ea",
    fontSize: 20,
    marginTop: 20
  },

  plainText: {
    fontSize: 20,
    marginTop: 20,
    color: "black"
  },
  notation: {
    paddingVertical: 20,
    fontSize: 15,
    color: "black",
    fontFamily: "Montserrat-Light"
  }
});

export default styles;
