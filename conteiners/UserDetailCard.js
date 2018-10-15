import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Card, ListItem, Button} from 'react-native-elements'

import {styles} from "../style/styles";

export default class UserDetailCard extends React.Component {

    render() {
        return (
            <Card title={this.props.navigation.state.params.user.name}>
                <View>
                    <Image resizeMode='contain' style={{width: 100, height: 100}} source={{ uri: this.props.screenProps.user.avatar }}/>
                    <Text style={{position: 'absolute', right: 30, top: 10}}>{this.props.screenProps.user.name}</Text>
                    <Text>Lats project</Text>
                </View>
            </Card>
        );
    }
}