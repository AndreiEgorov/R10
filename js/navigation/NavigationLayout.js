import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import About from "./../screens/About";
import Map from "./../screens/Map";
import Schedule from "./../screens/Schedule";
import Faves from './../screens/Faves'
import {sharedNavigationOptions} from "./config"

import Ionicons from 'react-native-vector-icons/Ionicons';  //for using icons from  react-native-vector-icons

const ScheduleStack = createStackNavigator({
  Schedule: {
    screen: Schedule
  }
});

const MapStack = createStackNavigator({
  Map: {
    screen: Map
  }
},
{
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  });

const FavesStack = createStackNavigator({
    Faves:{
        screen: Faves
    }
},
{
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  })

const AboutStack = createStackNavigator({
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

export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Schedule') {
            iconName = `ios-calendar`;
          } else if (routeName === 'Map') {
            iconName = `ios-map`;
          }else if (routeName === 'Faves') {
            iconName = `ios-heart`;
          }else if (routeName === 'About') {
            iconName = `ios-information-circle`;
            // iconName = `ios-information-outline${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "orange",
      labelStyle: {
        fontSize: 20,
        fontFamily: "Montserrat-light"
      },

      style: {
        backgroundColor: 'black',

      },
    }
  },


  
);
