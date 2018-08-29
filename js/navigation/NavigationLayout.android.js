import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";

import About from "./../screens/About";
import Map from "./../screens/Map";
import Schedule from "./../screens/Schedule";
import Faves from "./../screens/Faves";
import { sharedNavigationOptions } from "./config";
import Session from "./../screens/Session";

import Ionicons from "react-native-vector-icons/Ionicons"; //for using icons from  react-native-vector-icons

const ScheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: Schedule
    },
    Session: {
      screen: Session
    }
  },

  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const MapStack = createStackNavigator(
  {
    Map: {
      screen: Map
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const FavesStack = createStackNavigator(
  {
    Faves: {
      screen: Faves
    },
    Session: {
      screen: Session
    }
  },

  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const AboutStack = createStackNavigator(
  {
    About: {
      screen: About
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const renderIcon = (iconName, tintColor) => {
  return <Ionicons name={iconName} size={25} color={tintColor} />;
};

ScheduleStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-calendar", tintColor)
};
MapStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-map", tintColor)
};

FavesStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-heart", tintColor)
};

AboutStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-information-circle", tintColor)
};

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    contentOptions: {
      activeTintColor: "#9963ea"
    }
  }
);
