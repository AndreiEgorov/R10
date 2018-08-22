import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";
import moment from "moment";

const Schedule = data => {
  const sessionsData = data.data
  console.log("DOBOB", data.data);
  // const sessions = props.data.allSessions
  return (
    <View>
    
      <Text>Hello </Text>
    </View>
  );
};

export default Schedule;

// <SectionList
// renderItem={({item, index, data}) => <Text key={index}>{item}</Text>}
// renderSectionHeader={({section: {title}}) => (
//   <Text style={{fontWeight: 'bold'}}>{title}</Text>
// )}
// sections={data}
// keyExtractor={(item, index) => item + index}
// />
