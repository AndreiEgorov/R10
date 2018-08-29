import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types"

const Speaker = ({ data, navigation }) => {
  handleClick = () => {
    Linking.canOpenURL(data.Speaker.url).then(supported => {
      if (supported) {
        Linking.openURL(data.Speaker.url);
      } else {
        console.log("Don't know how to open URI: " + data.Speaker.url);
      }
    });
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleContainer}>
        <MaterialIcons
          style={styles.icon}
          name="close"
          size={25}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>About the Speaker</Text>
      </View>
      <ScrollView pagingEnabled={false} style={styles.scroll}>
        <View style={styles.speakerInfo}>
          <Image style={styles.image} source={{ uri: data.Speaker.image }} />
          <Text style={styles.name}>{data.Speaker.name}</Text>
          <Text style={styles.bio}>{data.Speaker.bio}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleClick()}
          >
            <LinearGradient
              style={{ borderRadius: 40, marginBottom: 40 }}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
              colors={["#7B4EC1", "#9C9FCE"]}
            >
              <Text style={styles.buttonText}> Read More on Wikipedia</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

Speaker.propTypes = {
  data: PropTypes.object,
  navigation: PropTypes.object,
  
}

export default Speaker;
