import React, { Component } from "react";
import { View, Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Schedule from "./Schedule";
import {formatSessionData} from "./FormatSessionData"
import FavesContext from "../../context/FavesContext";





export default class ScheduleContainer extends Component {


  static navigationOptions = {
    title: 'Schedule',
  }
  render() {
    console.log('MY Props', this.props.navigation)
  
    
    return (
      <Query
        query={gql`
          {
            allSessions {
              id
              startTime
              title
              location
            }
          }
        `}
      >
      {({loading, error, data})=> {
        {/* console.log("ScheduleCont", data.allSessions)
        console.log("Sessisons", sessions) */}
        if(loading) return <Text>Loading...</Text>
        if(error) return <Text>Error: </Text>
        console.log('data', data)
        {/* const sessions = formatSessionData(data.allSessions) */}
        {/* return formatSessionData(sessions) */}
        console.log("FIRST PROPS",this.props.navigation)
        return(
          <FavesContext.Consumer>
          {
            values => {
              console.log("MY VALUES", values)
              return  <Schedule data = {formatSessionData(data.allSessions)} navigation={this.props.navigation} context={values}/>
            }
          }
          </FavesContext.Consumer>
        )
        
        
        
       
      }}
      </Query>
    );
  }
}
