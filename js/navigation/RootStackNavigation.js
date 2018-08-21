import {createStackNavigator} from 'react-navigation'
import About from '../screens/About'
import Map from '../screens/Map'
import NavigationLayout from "./NavigationLayout"

export default createStackNavigator(
    {
    NavigationLayout: NavigationLayout,
},
{headerMode: 'none'}
) 




// About:{
//     screen:About,
   
// },
// Map:{
//     screen: Map
// }