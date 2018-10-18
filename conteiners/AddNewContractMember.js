import React from 'react';
import {View, TouchableWithoutFeedback, ScrollView, StyleSheet} from 'react-native';
import {ListItem} from "react-native-elements";


export default class AddNewContractMember extends React.Component {
    static navigationOptions = {
        title: 'AddNewContractMember'
    }

    state = {
        users: this.props.screenProps.users
    }


    addToMembersList=(item)=>{
        this.props.navigation.state.params.addMembers(item)
        let newArrUser = this.props.screenProps.users.map(e => {
            if(e.id == item.id) e.active = !e.active
            return e
        })


        this.setState({
            users: newArrUser
        })
        this.props.navigation.navigate(`CreateNewContract`)
    }

    render() {

        const {users} = this.state

        return (
            <ScrollView style={{flex: 1}}>
                {users.map((item) => (
                    <TouchableWithoutFeedback onPress={()=>this.addToMembersList(item)} key={item.id}>
                        <ListItem
                            containerStyle={item.active ? styles.activeUser : null}
                            roundAvatar
                            avatar={{uri:item.avatar}}
                            key={item.id}
                            title={item.name}
                            subtitle={item.position}
                        />
                    </TouchableWithoutFeedback>

                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    activeUser: {
        backgroundColor: `green`
    }
})