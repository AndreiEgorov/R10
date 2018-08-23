import React, { Component } from "react";
import { View, Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Schedule from "./Schedule";
import {formatSessionData} from "./FormatSessionData"
export default class ScheduleContainer extends Component {
  render() {
    console.log('schedule')
    return (
      <Query
        query={gql`
          {
            allSessions {
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
        return <Schedule data = {formatSessionData(data.allSessions)}/>
      }}
      </Query>
    );
  }
}
