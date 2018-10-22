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
        error: {
            name: '',
            email: '',
            password: '',
            comfirmpass: ''
        },
        nameValid: false,
        emailValid: false,
        passwordValid: false,
        confirmpassValid: false,
        nameFieldColor: 'white',
        emailFieldColor: 'white',
        passwordFieldColor: 'white',
        confirmpassFieldColor: 'white'
    }

    createNewUser = () =>{
        if(this.state.nameValid && this.state.emailValid && this.state.passwordValid && this.state.confirmpassValid){

        }else{
            this.state.nameValid
                ? this.setState({nameFieldColor: 'white'})
                :this.setState({name: this.state.error.name, nameFieldColor: '#ff8c1a', })
            this.state.emailValid
                ?this.setState({emailFieldColor: 'white'})
                :this.setState({emailFieldColor: '#ff8c1a'})
            this.state.passwordValid
                ?this.setState({passwordFieldColor: 'white'})
                :this.setState({passwordFieldColor: '#ff8c1a'})
            this.state.confirmpassValid
                ?this.setState({confirmpassFieldColor: 'white'})
                :this.setState({confirmpassFieldColor: '#ff8c1a'})
        }

    }
    onCange = (key, value) => {
        this.setState({
            [key]: value
        },()=>this.validateField(key, value))
    }
    validateField(fieldName, value){
        let fieldvalidationError = this.state.error
        let nameValid = this.state.nameValid
        let emailValid = this.state.emailValid
        let passwordValid = this.state.passwordValid
        let confirmpassValid = this.state.confirmpassValid
        switch(fieldName){
            case 'name':
                nameValid = value.length >= 2
                fieldvalidationError.name = nameValid? '' : 'Некоректное имя'
                break
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                fieldvalidationError.email = emailValid? '': 'Некоректный E-mail'
                break
            case 'password':
                passwordValid = value.length >= 5;
                fieldvalidationError.password = passwordValid ? '': 'Телефон должен содержать как минимум 5 цифр';
                break
            case 'confirmpass':
                confirmpassValid = this.state.password == this.state.confirmpass
                fieldvalidationError.comfirmpass = confirmpassValid ? '' : 'пароли не совпадают'
                break
            default:
                break
        }
        this.setState({
            error: fieldvalidationError,
            nameValid: nameValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
            confirmpassValid: confirmpassValid
        },this.validateForm);

    }
    validateForm(){
        this.setState({formValid: this.state.emailValid && this.state.passwordValid})
    }

    render(){
        return(
                <KeyboardAvoidingView behavior='padding' style={styles.conteiner}>
                    <Text style={styles.title}>Create new account</Text>
                    <TextInput
                        onChangeText={(value)=>this.onCange('name', value)}
                        placeholder='name'
                        style={[styles.inputStyle, {borderColor: this.state.nameFieldColor}]}
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
                        style={[styles.inputStyle, {borderColor: this.state.emailFieldColor}]}
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
                        style={[styles.inputStyle, {borderColor: this.state.passwordFieldColor}]}
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
                        style={[styles.inputStyle, {borderColor: this.state.confirmpassFieldColor}]}
                        returnKeyType='go'
                        ref={(input) => this.passwordInput3 = input}
                        onSubmitEditing={() => this.createNewUser()}
                    />
                    <TouchableOpacity onPress={()=>this.createNewUser()} style={[styles.inputButton, {marginBottom: 120}]}>
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
        borderWidth: 3,
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