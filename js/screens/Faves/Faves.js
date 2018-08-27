import React, { Component } from 'react'
import {View, Text} from 'react-native'
import SectionLists from './../../components/SectionList'

 const Faves = ({data, navigation, context}) => {
  console.log("FAVED faves",context)
    return (
      <View>
       <SectionLists data={data} navigation={navigation} context={context}/>
      </View>
    )
  
}
export default Faves