import React from 'react';
import { Text, View, Image, TouchableWithoutFeedback, TextInput, Keyboard, ScrollView, Button} from 'react-native';
import {Card, Icon, FormInput} from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker';

import {styles} from "../style/styles";

export default class CreateNewContract extends React.Component {
    static navigationOptions = () =>{
        return{title: 'New contract'}
    }
    state={
        firstDateTimePickerVisible: false,
        secondDateTimePickerVisible: false,
        id:'',
        name: '',
        members: [],
        image:'',
        description: '',
        startTime: '',
        endTime: '',
        active: false,
        createAt: '',
    }
    onChange = (key, value) =>{
        this.setState({
            [key]: value
        })
    }
    firstshowDateTimePicker = () => this.setState({firstDateTimePickerVisible: true})
    secondtshowDateTimePicker = () => this.setState({secondDateTimePickerVisible: true})

    _hideDateTimePicker = () => this.setState({ firstDateTimePickerVisible: false,  secondDateTimePickerVisible: false})

    _handleDatePicked = (date) => {
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        const day = date.getDate()
        const mounth = date.getMonth()
        const year = date.getFullYear()
        const dataString = day + ' ' + monthNames[mounth] + ' ' + year
        if (this.state.firstDateTimePickerVisible){
            this.setState({startTime: dataString})
        }
        if (this.state.secondDateTimePickerVisible){
            this.setState({endTime: dataString})
        }
        this._hideDateTimePicker();
    };
    showAllMembers = () =>{
        const members = this.state.members
        this.props.navigation.navigate('ShowAllContractsMembers', {members})
    }
    addMembers = ( newMember ) =>{
        const newMembersArray = this.state.members.map(a => Object.assign({}, a))
        newMembersArray.push(newMember)
        this.setState({
            members: newMembersArray
        })
    }
    showAddMembers = () =>{

        this.props.navigation.navigate('AddNewContractMember', {addMembers: this.addMembers, members: this.state.members})
        console.log(this.props.screenProps.users)
    }

    createNewContract = () =>{
        const createNewId = this.props.screenProps.contracts[this.props.screenProps.contracts.length -1].id + 1
        const newArrContract = this.props.screenProps.contracts.map(a => Object.assign({}, a));
        newArrContract.push({
            id: createNewId,
            name: this.state.name,
            members: this.state.members,
            image:this.state.image,
            description: this.state.description,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            active: false,
            createAt: new Date(),
            })
        this.setState({
            contracts: newArrContract,
            id:'',
            name: '',
            members: [],
            image:'',
            description: '',
            startTime: '',
            endTime: '',
            active: false,
            createAt: '',
        })
        this.props.screenProps.addNewContract(newArrContract)
        console.log(this.props.screenProps.contracts)
    }

    showMember = () =>{

    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <FormInput
                        placeholder='Name'
                        onChangeText={(value) => this.onChange('name', value)}
                        value={this.state.name}
                    />
                    <Icon size={50} containerStyle={{width: 50, height: 50}} color='blue'
                          onPress={this.firstshowDateTimePicker} name="calendar" type="foundation"/>
                    <Text style={{position: 'absolute', top: 70, left: 52}}>Start
                        date: {this.state.startTime ? this.state.startTime : 'No turn'}</Text>

                    <Icon size={50} containerStyle={{width: 50, height: 50}} color='blue'
                          onPress={this.secondtshowDateTimePicker} name="calendar" type="foundation"/>
                    <Text style={{position: 'absolute', top: 120, left: 52}}>End
                        date: {this.state.endTime ? this.state.endTime : 'No turn'}</Text>

                    <DateTimePicker
                        isVisible={this.state.firstDateTimePickerVisible || this.state.secondDateTimePickerVisible}
                        onConfirm={this._handleDatePicked}
                        onCancel={this._hideDateTimePicker}
                    />

                    <FormInput
                        multiline={true}
                        containerStyle={{borderBottomWidth: 0, marginBottom: 40}}
                        underlineColorAndroid={0}
                        placeholder='Enter description'
                        onChangeText={(value) => this.onChange('description', value)}
                        value={this.state.description}
                    />
                    <View style={{flexDirection: 'row'}}>
                       {this.state.members.map(user => (
                                <TouchableWithoutFeedback key={user.id} onPress={this.showMember}>
                                    <Image source={{uri: user.avatar}} style={{width: 50, height: 50}}/>
                                </TouchableWithoutFeedback>
                            ))
                        }
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
                        <View style={{width: '45%', height: 40,}}><Button  title='Show all members' onPress={this.showAllMembers}/></View>
                        <View style={{width: '45%', height: 40}}><Button  title='Add members' onPress={this.showAddMembers}/></View>
                    </View>
                    <Button title='Create contract' onPress={this.createNewContract}/>
                </Card>
            </ScrollView>
        );
    }}