import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class MapContainer extends Component {
  static navigationOptions = {
    title: "Map",

    headerTitleStyle: {
      fontSize: 20,
      color: "white",
      fontFamily: "Montserrat-Light"
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View>
        <Text> Im a MapContainer </Text>
      </View>
    )
  }
}