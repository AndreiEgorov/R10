import React, { Component } from "react";
import { View, Text } from "react-native";
import {Query} from "react-apollo"
import Speaker from "./Speaker";
import gql from "graphql-tag"

import FavesContext from "../../context/FavesContext";
import { renderToStringWithData } from "react-apollo";

export default class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const speakerId = navigation.getParam("speakerId");
    console.log("My Speaker Props", speakerId);
    return (
      <Query
        
        query={gql`
          query($id: ID!) {
            Speaker(id: $id) {
              bio
              image
              name
              url
            }
          }
        `}
        variables={{ id: speakerId }}
        >
        {({loading, error, data})=>{
            console.log("SPEAKERCONTAINER DATA", data)
            if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error: </Text>;

            return <Speaker speaker={data}/>
        }}
      </Query>
    );
  }
}
