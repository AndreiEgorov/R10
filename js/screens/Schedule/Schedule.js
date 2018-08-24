import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";
import SectionLists from './../../components/SectionList'

const Schedule = ({data, navigation}) => {
  // const sessionsData = data.data;
console.log("DOBBSDBOB", navigation);
console.log("DATAFDSDFSDF", data);
  // const sessions = props.data.allSessions
  return (
    // <Text>SDFSDFSDFSDF</Text>
    <SectionLists data={data} navigation={navigation}/>
  );
};

export default Schedule;
