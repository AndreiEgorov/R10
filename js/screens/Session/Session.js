import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  Platform,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import moment from "moment";
import LinearGradient from "react-native-linear-gradient";

const Session = ({ data, navigation, context }) => {
  const allFaves = [];
  context.favesIds.map(item => allFaves.push(item.id));
  const faved = allFaves.includes(data.Session.id);
  console.log(allFaves);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
      <View style={styles.locationAndFav}>
        <Text style={styles.location}>{data.Session.location}</Text>

        <View style={styles.favStatus}>
          {!faved ? (
            <Text />
          ) : (
            <Icon
              name={Platform.select({ ios: "ios-heart", android: "md-heart" })}
              size={20}
              color="#cf392a"
            />
          )}
        </View>
      </View>

      <Text style={styles.title}>{data.Session.title}</Text>
      <Text style={styles.time}>
        {moment(data.Session.startTime).format("LT")}
      </Text>

      <Text style={styles.description}>{data.Session.description}</Text>

      <Text style={styles.intro}>Presented by:</Text>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("MyModal", {
            speakerId: data.Session.speaker.id
          })
        }
      >
        <View style={styles.speakerInfo}>

        {data.Session.speaker.image ? <Image
            style={styles.image}
            source={{ uri: data.Session.speaker.image }}
          /> : <Text/> }
          
          <Text style={styles.speakerName}>{data.Session.speaker.name}</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          !faved
            ? context.addAFave(data.Session.id)
            : context.removeAFave(data.Session.id);
        }}
      >
        <LinearGradient
          style={{ borderRadius: 40 }}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 1.0 }}
          colors={["#7B4EC1", "#9C9FCE"]}
        >
          {!faved ? (
            <Text style={styles.buttonText}>Add to Favs</Text>
          ) : (
            <Text style={styles.buttonText}> Remove from Faves</Text>
          )}
        </LinearGradient>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Session;
