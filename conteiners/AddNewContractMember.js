import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {ListItem} from "react-native-elements";


export default class AddNewContractMember extends React.Component {
    static navigationOptions = {
        title: 'AddNewContractMember'
    }


    show=(item)=>{
        this.props.navigation.state.params.addMembers(item)
        this.props.navigation.navigate(`CreateNewContract`)
    }

    render() {
        const { members } = this.props.navigation.state.params
        return (

            <View style={{flex: 1}}>
                {this.props.navigation.state.params.members.map(item =>
                        <TouchableWithoutFeedback onPress={() => this.show(item)} key={item.id}>
                        <ListItem
                        roundAvatar
                        avatar={{uri: item.avatar}}
                        key={item.id}
                        title={item.name}
                        subtitle={item.position}
                        />
                        </TouchableWithoutFeedback>
                        )}
            </View>
        );
    }
}