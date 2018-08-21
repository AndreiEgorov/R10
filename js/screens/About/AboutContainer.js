import React, { Component } from "react";
import About from "./About";
import Client from "./../../config/api";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, View } from "react-native";

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <Query
        query={gql`
          {
            allConducts {
              id
              title
              description
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          console.log("AbContainer",data);
          return <About data={data} />;
        }}
      </Query>
    );
  }
}