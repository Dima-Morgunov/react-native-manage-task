import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';


export default class Login extends React.Component {
    static navigationOptions ={
        header: null
    }
    state ={
        isLogin: false,
        email: '',
        password: '',
        error: {
            email: '',
            password: ''
        },
        emailValid: false,
        passwordValid: false,
        formValid: false,
        invalidEmailColor: 'white',
        invalidPasswordColor: 'white'
    }
    onChange = (key, value) =>{
        const keyItem = key
        const valueItem = value
        this.setState(
            {[key]: value},
            ()=>this.validateField(keyItem, valueItem))
    }
    SubmitUser = () =>{
        this.props.navigation.navigate('MainApp')
    }
    validateField(fieldName, value){
        let fieldvalidationError = this.state.error;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        switch(fieldName){
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldvalidationError.email = emailValid? '': 'Некоректный E-mail';
                break;
            case 'password':
                passwordValid = value.length >= 5;
                fieldvalidationError.password = passwordValid ? '': 'Телефон должен содержать как минимум 5 цифр';
                break;
            default:
                break
        }
        this.setState({
            error: fieldvalidationError,
            emailValid: emailValid,
            passwordValid: passwordValid
        },this.validateForm);

        this.state.error.email?this.setState({invalidEmailColor: '#ff8c1a'}):this.setState({invalidEmailColor: 'white'})
        this.state.error.password?this.setState({invalidPasswordColor: '#ff8c1a'}):this.setState({invalidPasswordColor: 'white'})
    }
    validateForm(){
        this.setState({formValid: this.state.emailValid && this.state.passwordValid})
    }
    static errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }
    createAccount = () =>{
        this.props.navigation.navigate('Registry')
    }
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.conteiner}>
                <Image style={styles.image} resizeMode='cover' source={{uri: 'https://randomc.net/image/Mob%20Psycho%20100/Mob%20Psycho%20100%20-%2003%20-%20Large%2002.jpg'}}/>
                <Text style={styles.textTitle}>Manage your personal is simple</Text>
                <TextInput
                    onChangeText={(value) => this.onChange('email', value)}
                    placeholder='enter your e-mail'
                    placeholderTextColor='black'
                    keyboardType='email-address'
                    returnKeyType='next'
                    autoCapitalize='none'
                    autoCorrect={false}
                    underlineColorAndroid={0}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    style={[styles.inputStyle,{borderColor: this.state.invalidEmailColor}]}
                />
                <TextInput
                    onChangeText={(value) => this.onChange('password', value)}
                    placeholder='password'
                    placeholderTextColor='black'
                    underlineColorAndroid={0}
                    returnKeyType='go'
                    style={[styles.inputStyle,{borderColor: this.state.invalidPasswordColor}]}
                    secureTextEntry
                    onSubmitEditing={() => this.SubmitUser()}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity onPress={()=>this.SubmitUser()} style={styles.inputButton}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.createAccount()} style={{marginVertical: 20}}>
                    <Text style={{textAlign: 'center', color: 'white', fontSize: 20}}>Don`t have account?</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a8cff',
    },
    image:{
        width: 200,
        height:150,
    },
    textTitle:{
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        paddingVertical: 40
    },
    inputStyle:{
        backgroundColor: 'white',
        marginVertical: 10,
        textAlign: 'center',
        color: '#1a8cff',
        borderRadius: 10,
        borderWidth: 3,
        width: '80%',
        height: 50,
        fontSize:18
    },
    inputButton:{
        height: 50,
        backgroundColor:'#0000b3',
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 10,
        width: '60%',
    }
})