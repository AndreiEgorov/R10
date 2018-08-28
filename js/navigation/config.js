import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden"}}>
    
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: "100%" }]}
    />
    <View style={{ dipslay:"flex", dipslay:"flex", }}>
    
    <Header {...props} />
    </View>
     
  </View>
);





export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerLeft: Platform.select({
    ios:"",
    android: <Ionicons onPress={()=>navigation.openDrawer()} name="md-menu" size={25} color="white" style={{paddingLeft: 15}}></Ionicons>,
  }),
  headerTintColor: "#fff",

  headerTitleStyle: {
    fontSize: 20,
    color: "white",
    fontFamily: "Montserrat-Light"
  }
});
