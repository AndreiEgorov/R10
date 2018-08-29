import React, { Component } from "react";
import { View, TouchableOpacity, Text, Animated } from "react-native";
import styles from "./../../screens/About/styles";
import PropTypes from "prop-types";
class ConductRule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      opacity: new Animated.Value(0)
    };
  }

  _fadeIn() {
    this.state.opacity.setValue(this.state.isShown ? 1 : 0);
    Animated.timing(
      // Animate over time
      this.state.opacity, // The animated value to drive
      {
        toValue: this.state.isShown ? 0 : 1, // Animate to opacity: 1 (opaque)
        duration: 2000 // Make it take a while
      }
    ).start();
  }

  _press() {
    this._fadeIn();
    this.setState({
      isShown: !this.state.isShown
    });
  }

  render() {
    return (
      <View key={this.props.index}>
        <TouchableOpacity onPress={() => this._press()}>
          {this.state.isShown ? (
            <Text style={styles.sectionTitle}>- {this.props.object.title}</Text>
          ) : (
            <Text style={styles.sectionTitle}>
              {" "}
              + {this.props.object.title}
            </Text>
          )}
        </TouchableOpacity>
        {this.state.isShown && (
          <Animated.View style={{ opacity: this.state.opacity }}>
            <Text style={styles.plainText}>
              {this.props.object.description}
            </Text>
          </Animated.View>
        )}
      </View>
    );
  }
}
ConductRule.propTypes = {
  object: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};

export default ConductRule;
