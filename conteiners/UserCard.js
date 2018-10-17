import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {Card, Icon} from 'react-native-elements'

import {styles} from "../style/styles";

export default class UserCard extends React.Component {
    static navigationOptions = (state) =>{
            return{title: state.navigation.state.params.user.name}
        }

    showMore = (user) =>{
        this.props.navigation.navigate('UserDetailCard', { user })
    }
    render() {
        const user  =this.props.navigation.state.params.user
        return (
            <Card title={this.props.navigation.state.params.user.name}>
                <View>
                    <Image resizeMode='contain' style={{width: 100, height: 100}} source={{ uri: this.props.screenProps.user.avatar }}/>
                    <Text style={{position: 'absolute', left: 110, top: 10, fontSize: 20}}>{user.name}</Text>
                    {user.activePropject
                        ?
                        <View style={{position:"absolute", right: 0}}>
                            <Icon name="torso" type="foundation" color="red"/>
                            <Text>busy</Text>
                        </View>
                        :
                        <View style={{position:"absolute", right: 0}}>
                            <Icon name="torso" type="foundation" color="green"/>
                            <Text>free</Text>
                        </View>
                    }
                    <Text>Description: </Text>
                    <Text style={{width: '100%', paddingBottom: 50}}>{user.description}</Text>
                    <Icon containerStyle={{position: 'absolute', right: 0, bottom: 0}}  color='blue' onPress={()=>this.showMore( user )} name="indent-more" type="foundation"/>
                </View>
            </Card>
        );
    }
}