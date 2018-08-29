//rnc

import React, { Component } from "react";
import styles from "./styles";
import { Text, View, ScrollView, Image, StatusBar } from "react-native";
import ConductRule from "./../../components/ConductRule/ConductRule";
import PropTypes from "prop-types";
class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />

          <Image
            style={styles.image}
            source={require("./../../assets/r10_logox.png")}
          />
          <View style={styles.divider} />
          <Text style={styles.plainText}>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
          <Text style={styles.headings}>Date and Venue</Text>
          <Text style={styles.plainText}>
            R10 conference will take place on Tuesday June 27, 2019 in
            Vancouver, BC.
          </Text>
          <Text style={styles.headings}>Code of Conduct</Text>
          {this.props.data.allConducts.map((object, index) => {
            return <ConductRule object={object} key={index} />;
          })}
          <View style={styles.divider} />
          <Text style={styles.notation}> © RED Academy 2018 </Text>
        </View>
      </ScrollView>
    );
  }
}

About.propTypes = {
  data: PropTypes.shape({
    allConducts: PropTypes.arrayOf(PropTypes.object)
  })
};

export default About;
