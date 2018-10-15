import React from 'react';
import { View, TouchableWithoutFeedback, ScrollView } from 'react-native';
import {List, ListItem} from 'react-native-elements'

export default class ManagePeople extends React.Component {
    static navigationOptions = {
            title: 'Manage people',
    }
    viewCity = (user) =>{
        this.props.navigation.navigate('UserCard', { user })
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView>
                <List containerStyle={{marginBottom: 20}}>
                    {this.props.screenProps.users.map((item) => (
                            <TouchableWithoutFeedback onPress={()=> this.viewCity(item)} key={item.id}>
                            <ListItem
                                roundAvatar
                                avatar={{uri:item.avatar}}
                                key={item.id}
                                title={item.name}
                                subtitle={item.position}
                            />
                            </TouchableWithoutFeedback>
                        ))
                    }
                </List>
                </ScrollView>
            </View>
        );
    }
}