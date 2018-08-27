import React, { Component } from "react";
import { View, Text } from "react-native";
import Faves from "./Faves";

import FavesContext from "../../context/FavesContext";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { formatSessionData } from "./../Schedule/FormatSessionData";

export default class FavesContainer extends Component {
  static navigationOptions = {
    title: "Favorites",

    headerTitleStyle: {
      fontSize: 20,
      color: "white",
      fontFamily: "Montserrat-Light"
    },
    headerTintColor: "#fff"
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
                const allFaves = [];
                values.favesIds.map(item => allFaves.push(item.id));
                const filteredSessionIds = data.allSessions.filter(session =>
                  allFaves.includes(session.id)
                );

                return (
                  <Faves
                    data={formatSessionData(filteredSessionIds)}
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
