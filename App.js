import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Tabs from './index'

export default class App extends React.Component {
    state ={
        user:{
          name: 'Andrey',
            id: 4,
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
        users:[
            {
                name: 'Den',
                id: 1,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:'Поисковые системы оценивают качество и релевантность статьи по содержащимся в ней словам и словосочетаниям (коллокациям). Чем больше в тексте тематичных ключевых фраз, тем больше шансов, что он получит высокую оценку'


            },{
                name: 'Mari',
                id: 2,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            },{
                name: 'Gleb',
                id: 3,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            },{
                name: 'Gleb',
                id: 4,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            },{
                name: 'Gleb',
                id: 5,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            },{
                name: 'Gleb',
                id: 6,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            },{
                name: 'Gleb',
                id: 7,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            },{
                name: 'Gleb',
                id: 8,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            },{
                name: 'Gleb',
                id: 9,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            },{
                name: 'Gleb',
                id: 10,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            },{
                name: 'qwe',
                id: 11,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            },{
                name: 'qwe',
                id: 12,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            },{
                name: '111',
                id: 13,
                portfolio: [],
                activePropject: false,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                position: 'CEO',
                description:''
            }
        ],
        contracts: [{
            name: 'Create new page',
            members:[],
            id: 1,
            image:'',
            description: '',
            startTime: '',
            endTime: '',
            active: false
        },
            {
                name: 'Create second page',
                members:[],
                id: 2,
                image:'',
                description: '',
                startTime: '',
                endTime: '',
                active: false
            },
            {
                name: 'Create end page',
                members:[],
                id: 3,
                image:'',
                description: '',
                startTime: '',
                endTime: '',
                active: false
            },
        ]
    }

    addNewContract = (newContracts) => {
        this.setState({
            contracts: newContracts
        })
    }

    changeInput = (key, value) =>{
        this.setState({
            [key]: value
        })
    }

  render() {
    return (
        <Tabs
          screenProps={{
                users: this.state.users,
                user: this.state.user,
                contracts: this.state.contracts,
                createNewContract: this.state.createNewContract,
                changeInput: this.changeInput,
                addNewContract: this.addNewContract
          }}
        />
    );
  }
}
