import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements'

import {styles} from "../style/styles";

export default class DetalContract extends React.Component {
    static navigationOptions = (state) =>{
        return{title: state.navigation.state.params.item.name}
    }
    render() {
        return (
            <Card title={this.props.navigation.state.params.item.name}>

            </Card>
        );
    }
}