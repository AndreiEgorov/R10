import {StyleSheet, Platform} from 'react-native'

const styles = StyleSheet.create({
    eventContainer: {
      backgroundColor: "white",
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 15,
      paddingRight: 15,
      borderBottomColor: "#e6e6e6",
      borderBottomWidth: 1
    },
    headerTime: {
      paddingLeft: 10,
      fontFamily: "Montserrat",
      fontSize: 15,
      paddingVertical: 10,
      backgroundColor: "#e6e6e6"
    },
    eventName: {
      fontSize: 18,
      color: Platform.select({
        ios: "black",
        android:"#999999"
      }) ,
      fontWeight: "bold",
      fontFamily: "Montserrat-Light"
    },
    locationAndFav: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: 15
    },
    eventLocation: {
      fontFamily: "Montserrat",
      paddingTop: 5,
      color: "#999999"
    }
  });

  export default styles