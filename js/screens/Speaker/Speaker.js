import React, { Component } from 'react'
import {View, Text, Image} from 'react-native'

const Speaker = ({data}) => {
    console.log("SPEAKER", data)
    console.log("SPEAKERRE", data.Speaker.url)
    return(
        <View>
    <Image
        style={{ width: 150, height: 150 }}
        source={{uri: data.Speaker.image}}
    />
    <Text>{data.Speaker.name}</Text>
        </View>
    )
}
export default Speaker