import React, { Component } from 'react'
import {View, Text, Image} from 'react-native'


const Session = ({data}) => {
  console.log("SESSION", data )
  console.log(data.Session.id)

  return(
    <View>
        <Text>{data.Session.location}</Text>
        <Text>{data.Session.title}</Text>
        <Text>{data.Session.startTime}</Text>
        <Text>{data.Session.description}</Text>
        <Text>Presented by:</Text>
        
        <Image
        style={{width: 50, height: 50}}
        source={{uri:data.Session.speaker.image}}></Image>
        <Text>{data.Session.speaker.name}</Text>
    </View>
  )
  
}

export default Session