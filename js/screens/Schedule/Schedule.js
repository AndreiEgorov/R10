import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";
import SectionLists from './../../components/SectionList'

const Schedule = ({data, navigation}) => {

console.log("DOBBSDBOB", navigation);
console.log("DATAFDSDFSDF", data);

  return (
    // <Text>SDFSDFSDFSDF</Text>
    <SectionLists data={data} navigation={navigation}/>
  );
};

export default Schedule;
