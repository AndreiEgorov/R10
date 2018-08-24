import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Session from "./Session";
import { View, Text } from "react-native";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const sessionId = navigation.getParam("sessionId");
    console.log("IN SESSSION", sessionId);

    return (
      <Query
        variables={{ id: sessionId }}
        query={gql`
          query($id: ID) {
            Session(id: $id) {
              description
              id
              location
              speaker {
                bio
                image
                name
                url
              }
              startTime
              title
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          console.log("MY DATA", data);
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error: </Text>;

          return <Session data={data} />;
        }}
      </Query>
    );
    // return <Session/>
  }
}

export default SessionContainer;
