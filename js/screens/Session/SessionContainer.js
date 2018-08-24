import React, {Component} from 'react'
import {Query} from 'react-apollo'
import gql from 'graphql-tag'
import Session from './Session'
import {View, Text} from 'react-native'


class SessionContainer extends Component{
    constructor(props){
        super(props)
    }

    

    render(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('myId');
        console.log("IN SESSSION", itemId)

        return <Text>Imma sesssion Container</Text>
        // return <Session/>
    }
}

export default SessionContainer