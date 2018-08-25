import React, { Component } from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

const Session = ({ data, navigation }) => {
  console.log("SESSION", data);
  console.log(data.Session.speaker.id);
 
  return (
    <View>
      <Text>{data.Session.location}</Text>
      <Text>{data.Session.title}</Text>
      <Text>{data.Session.startTime}</Text>
      <Text>{data.Session.description}</Text>
      <Text>Presented by:</Text>
      <TouchableHighlight  onPress={() => navigation.navigate('MyModal', {speakerId: data.Session.speaker.id} )}>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: data.Session.speaker.image }}
          />
          <Text>{data.Session.speaker.name}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Session;
