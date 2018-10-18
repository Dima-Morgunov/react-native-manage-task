import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView} from 'react-native';


export default class Login extends React.Component {
    static navigationOptions ={
        header: null
    }
    state ={
        name: '',
        password: ''
    }
    onChange = (key, value) =>{
        this.setState({[key]: value})
    }
    SubmitUser = () =>{
        this.props.navigation.navigate('MainApp')
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
                    onChangeText={(value) => this.onChange('name', value)}
                    placeholder='enter your e-mail'
                    placeholderTextColor='black'
                    keyboardType='email-address'
                    returnKeyType='next'
                    autoCapitalize='none'
                    autoCorrect={false}
                    underlineColorAndroid={0}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    style={styles.inputStyle}
                />
                <TextInput
                    onChangeText={(value) => this.onChange('password', value)}
                    placeholder='password'
                    placeholderTextColor='black'
                    underlineColorAndroid={0}
                    returnKeyType='go'
                    style={styles.inputStyle}
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