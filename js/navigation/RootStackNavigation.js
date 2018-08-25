import { createStackNavigator } from "react-navigation";
import About from "../screens/About";
import Map from "../screens/Map";
import SpeakerModal from "./../screens/Speaker";
import NavigationLayout from "./NavigationLayout";

export default createStackNavigator(
  {
    NavigationLayout,
    MyModal: {
      screen: SpeakerModal
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  },
  { headerMode: "none" }
);

// About:{
//     screen:About,

// },
// Map:{
//     screen: Map
// }
