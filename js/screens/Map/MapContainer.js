import React, { Component } from 'react'
import { View } from 'react-native'
import Map from './Map'
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
   
        <Map/>
 
    )
  }
}