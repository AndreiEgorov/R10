import React from "react";
import { SectionList, Text, TouchableHighlight, View, StyleSheet } from "react-native";
import moment from "moment";

const SectionLists = props => {

  //remove showData later
  const showData = () => {
    console.log("Showing Data", props.props)
  }


  console.log("BOBOS", props.props);
  return (
    <SectionList
      renderItem={({ item, index }) => (
        <TouchableHighlight  activeOpacity={0.6}  onPress={showData} style={styles.eventContainer}>
        <View  key={index}>
        <Text style={styles.eventName}>{item.title}</Text>
        <Text style={styles.eventLocation}>{item.location}</Text>
        </View>
         
        
        </TouchableHighlight>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.headerTime}>   {moment(title).format("LT")}</Text>
      )}
      sections={props.props.data}
      keyExtractor={(item, index) => item + index}
    />
  );
};



const styles = StyleSheet.create({
  eventContainer:{
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft:15,
    paddingRight:15,
    borderBottomColor:"#e6e6e6",
    borderBottomWidth: 1

  },
  headerTime:{
    paddingLeft: 5,
    fontFamily:"Montserrat",
    fontSize: 15,
    paddingVertical: 10,
    backgroundColor: "#e6e6e6"
  },
  eventName:{
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    fontFamily:'Montserrat-Light',
    
  },
  eventLocation:{
    fontFamily:"Montserrat",
    paddingTop: 5,
    color: "#999999"
  }
})







export default SectionLists;
