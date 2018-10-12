import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

import UserCard from '../conteiners/UserCard'
import {styles} from "../style/styles";

export default class ManagePeople extends React.Component {
    static navigationOptions = {
            title: 'Manage people',
    }
    viewCity = (city) =>{
        this.props.navigation.navigate('City', { city })
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{flex: 1}}>ManagePeople</Text>
                <TouchableWithoutFeedback
                    onPress={()=> this.viewCity()}>
                    <View>
                        <Text style={styles.city}>{city.city}</Text>
                        <Text style={styles.country}>{city.country}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}