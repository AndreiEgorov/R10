import React, { Component } from "react";
import { Text } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Schedule from "./Schedule";
import { formatSessionData } from "./FormatSessionData";
import FavesContext from "../../context/FavesContext";

export default class ScheduleContainer extends Component {
  static navigationOptions = {
    title: "Schedule"
  };
  render() {
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
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error: </Text>;

          return (
            <FavesContext.Consumer>
              {values => {
                return (
                  <Schedule
                    data={formatSessionData(data.allSessions)}
                    navigation={this.props.navigation}
                    context={values}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}
