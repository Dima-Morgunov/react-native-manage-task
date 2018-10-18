import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native'


export default class Registry extends React.Component{
    static navigationOptions = {
        title: 'Return to Login',
        headerStyle: {backgroundColor:'#1a8cff'},
        headerTintColor: 'white'
    }

    state = {
        name: '',
        email: '',
        password: '',
        confirmpass: '',
        error: ''
    }

    createNewUser = () =>{
        console.log(this.state)
    }
    onCange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render(){
        return(
                <KeyboardAvoidingView behavior='padding' style={styles.conteiner}>
                    <Text style={styles.title}>Create new account</Text>
                    <TextInput
                        onChangeText={(value)=>this.onCange('name', value)}
                        placeholder='name'
                        style={styles.inputStyle}
                        placeholderTextColor='black'
                        autoCapitalize='none'
                        autoCorrect={false}
                        underlineColorAndroid={0}
                        returnKeyType='next'
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    <TextInput
                        onChangeText={(value)=>this.onCange('email', value)}
                        autoCapitalize='none'
                        autoCorrect={false}
                        underlineColorAndroid={0}
                        placeholderTextColor='black'
                        keyboardType='email-address'
                        placeholder='e-mail'
                        style={styles.inputStyle}
                        returnKeyType='next'
                        ref={(input) => this.passwordInput = input}
                        onSubmitEditing={() => this.passwordInput2.focus()}
                    />
                    <TextInput
                        onChangeText={(value)=>this.onCange('password', value)}
                        secureTextEntry
                        underlineColorAndroid={0}
                        placeholderTextColor='black'
                        placeholder='password'
                        style={styles.inputStyle}
                        onSubmitEditing={() => this.passwordInput3.focus()}
                        returnKeyType='next'
                        ref={(input) => this.passwordInput2 = input}
                    />
                    <TextInput
                        onChangeText={(value)=>this.onCange('confirmpass', value)}
                        secureTextEntry
                        underlineColorAndroid={0}
                        placeholderTextColor='black'
                        placeholder='confirm password'
                        style={styles.inputStyle}
                        returnKeyType='go'
                        ref={(input) => this.passwordInput3 = input}
                        onSubmitEditing={() => this.createNewUser()}
                    />
                    <TouchableOpacity onPress={()=>this.createNewUser()} style={styles.inputButton}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>SING IN</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a8cff',
    },
    title:{
        marginVertical: 30,
        fontSize: 30,
        color: 'white',
    },
    inputStyle:{
        backgroundColor: 'white',
        marginVertical: 10,
        color: '#1a8cff',
        textAlign: 'center',
        borderRadius: 10,
        width: '80%',
        height: 50,
        fontSize:18
    },
    inputButton:{
        height: 50,
        backgroundColor:'#0000b3',
        borderRadius: 10,
        marginVertical: 20,
        paddingVertical: 10,
        width: '60%',
    }
})