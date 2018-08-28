import React from "react";
import {
  SectionList,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Platform
} from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from 'prop-types'

const SectionLists = ({ data, navigation, context }) => {
  const allFaves = [];
  context.favesIds.map(item => allFaves.push(item.id));

  return (
    <SectionList
      renderItem={({ item, index }) => (
        <TouchableHighlight
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
        </TouchableHighlight>
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
}


const styles = StyleSheet.create({
  eventContainer: {
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1
  },
  headerTime: {
    paddingLeft: 10,
    fontFamily: "Montserrat",
    fontSize: 15,
    paddingVertical: 10,
    backgroundColor: "#e6e6e6"
  },
  eventName: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    fontFamily: "Montserrat-Light"
  },
  locationAndFav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 15
  },
  eventLocation: {
    fontFamily: "Montserrat",
    paddingTop: 5,
    color: "#999999"
  }
});

export default SectionLists;
