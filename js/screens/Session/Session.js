import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  Platform
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const Session = ({ data, navigation, context }) => {
  const allFaves = [];
  context.favesIds.map(item => allFaves.push(item.id));
  const faved = allFaves.includes(data.Session.id);
  console.log(allFaves);

  return (
    <View>
      <StatusBar barStyle="light-content" />

      <Text>{data.Session.location}</Text>

      {!faved ? (
        <Text />
      ) : (
        <Icon
          name={Platform.select({ ios: "ios-heart", android: "md-heart" })}
          size={20}
          color="red"
        />
      )}
      <Text>{data.Session.title}</Text>
      <Text>{data.Session.startTime}</Text>
      <Text>{data.Session.description}</Text>
      <Text>Presented by:</Text>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("MyModal", { speakerId: data.Session.speaker.id })
        }
      >
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: data.Session.speaker.image }}
          />
          <Text>{data.Session.speaker.name}</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity
        onPress={() => {!faved ? context.addAFave(data.Session.id) : context.removeAFave(data.Session.id);
        }}
      >
        {!faved ? <Text>Add to Favs</Text> : <Text> Remove from Faves</Text>}
      </TouchableOpacity>
    </View>
  );
};

export default Session;
