//rnc

import React from 'react'
import styles from './styles'


import {Text, View, ScrollView, Image} from "react-native"

const About = (props) => {
    console.log("About",props.data.allConducts)
    return( 
        
        <ScrollView >
        <View style={styles.container}>
        <Image style={styles.image} source={require("./../../assets/r10_logox.png")}/>
        <Text style={styles.plainText}>R10 is a conference that focuses on just about any topic related to dev.</Text>
        <Text style={styles.headings}>Date and Venue</Text>
        <Text style={styles.plainText}>R10 conference will take place on Tuesday June 27, 2019 in Vancouver, BC.</Text>
        <Text style={styles.headings}>Code of Conduct</Text>
       {props.data.allConducts.map((object,index) => { 
            return(
                <View key={index}>
                <Text style={styles.sectionTitle}>{object.title}</Text>
         <Text style={styles.plainText} >{object.description}</Text></View>)
         }
        
        )}
        </View>
        </ScrollView>
        
       
    )
}
export default About