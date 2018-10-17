import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {List, ListItem} from 'react-native-elements'


export default class ManageContract extends React.Component {
    static navigationOptions ={
        title:'Manage contract'
    }
        viewCreateNewContract = () =>{
            this.props.navigation.navigate('CreateNewContract')
        }
        viewDetalContract = (item) =>{
            this.props.navigation.navigate('DetalContract', { item })
        }
    render() {
        return (
            <View style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={()=>this.viewCreateNewContract()}>
                    <ListItem
                        roundAvatar
                        avatar={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sAo42wtxY6QEJby_IyEtlBDzBwMJYJzn05qCyiVGhSUctkYn'}}
                        title='Create new contract'
                    />
                </TouchableWithoutFeedback>
                <ScrollView>
                    <List containerStyle={{marginBottom: 20, marginTop:0}}>
                        {this.props.screenProps.contracts.map((item) => (
                            <TouchableWithoutFeedback onPress={()=> this.viewDetalContract(item)} key={item.id}>
                                <ListItem
                                    roundAvatar
                                    avatar={item.image?{uri:item.image}: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8wvAYHdNjfSEX9EXVqlWTx2lpu0wgEifkQdLdojpONvZ6j9x'}
                                    key={item.id}
                                    title={item.name}
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