import React, { Component } from 'react'
import {View, Text} from 'react-native'
import  Faves from "./Faves"

import FavesContext from '../../context/FavesContext'

export default class FavesContainer extends Component {
  render() {
    return (
      //pass it to schedule and session containers,,use the block below
      <FavesContext.Consumer>
      {
        values => {
          console.log(values)
          return <Faves faveIds = {values}/>
        }
      }
      </FavesContext.Consumer>
     
    )
  }
}
