import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Session from "./Session";
import { View, Text } from "react-native";
import FavesContext from "../../context/FavesContext";

class SessionContainer extends Component {
  
  // constructor(props) {
  //   super(props);
  // }
  static navigationOptions = {
    title: 'Session',
   
    headerTitleStyle: {
      fontSize: 20,
      color:"white",
      fontFamily: "Montserrat-Light",
    },
    headerTintColor: '#fff',
  };

  render() {
    const { navigation } = this.props;
    const sessionId = navigation.getParam("sessionId");
    // console.log("IN SESSSION", sessionId);

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
                id
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
          return (
            <FavesContext.Consumer>
              {values => {
                console.log("MY VALUES", values)
                return <Session data={data} navigation={navigation} context={values} />;
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );

  }
}

export default SessionContainer;
