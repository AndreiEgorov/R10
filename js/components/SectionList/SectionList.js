import React from "react";
import {
  SectionList,
  Text,
  TouchableOpacity,
  View,
  Platform
} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import styles from "./styles";

const SectionLists = ({ data, navigation, context }) => {
  const allFaves = [];
  context.favesIds.map(item => allFaves.push(item.id));

  return (
    <SectionList
      renderItem={({ item, index }) => (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate("Session", { sessionId: item.id });
          }}
          style={styles.eventContainer}
        >
          <View key={index}>
            {(faved = allFaves.includes(item.id))}
            <Text style={styles.eventName}>{item.title}</Text>
            <View style={styles.locationAndFav}>
              <Text style={styles.eventLocation}>{item.location}</Text>
              <View style={styles.favStatus}>
                {!faved ? (
                  <Text />
                ) : (
                  <Icon
                    name={Platform.select({
                      ios: "ios-heart",
                      android: "md-heart"
                    })}
                    size={20}
                    color="#cf392a"
                  />
                )}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.headerTime}> {moment(title).format("LT")}</Text>
      )}
      sections={data}
      keyExtractor={(item, index) => item + index}
    />
  );
};

SectionList.propTypes = {
  data: PropTypes.array,
  navigation: PropTypes.object,
  context: PropTypes.object
};

export default SectionLists;
