import React from 'react';
import { Text, View } from 'react-native';

import {styles} from "../style/styles";

export default class UserCard extends React.Component {
    static navigationOptions = {
        title: 'UserCard',
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{flex: 1}}>UserCard</Text>
            </View>
        );
    }
}