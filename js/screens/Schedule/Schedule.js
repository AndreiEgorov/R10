import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";
import SectionLists from './../../components/SectionList'

const Schedule = (data) => {
  // const sessionsData = data.data;
  console.log("DOBOB", data);
  // const sessions = props.data.allSessions
  return (
    <SectionLists props={data}/>
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





// <SectionList
// renderItem={({ item, index }) => (
//   <Text key={index}>{item.title}</Text>
// )}
// renderSectionHeader={({ section: { title } }) => (
//   <Text style={{ fontWeight: "bold" }}>{title}</Text>
// )}
// sections= {data.data} 
// keyExtractor={(item, index) => item + index}
// />