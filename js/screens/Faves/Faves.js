import React, { Component } from "react";
import { View, Text } from "react-native";
import SectionLists from "./../../components/SectionList";
import PropTypes from 'prop-types'

const Faves = ({ data, navigation, context }) => {
  return (
    <View>
      <SectionLists data={data} navigation={navigation} context={context} />
    </View>
  );
};

Faves.propTypes = {
  data: PropTypes.array,
  navigation:PropTypes.object,
  context: PropTypes.object
}


export default Faves;

