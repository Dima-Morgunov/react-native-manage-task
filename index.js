import { TabNavigator, createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import {Dimensions} from 'react-native'

import { styles } from './style/styles'

import Login from './component/Login'
import Registry from './component/Registry'
import ManageContact from './component/ManageContract'
import ManageLicense from './component/ManageLicense'
import ManagePeople from './component/ManagePeople'
import UserCard from './conteiners/UserCard'
import UserDetailCard from './conteiners/UserDetailCard'
import CreateNewContract from './conteiners/CreateNewContract'
import DetalContract from  './conteiners/DetalContract'
import ShowAllContractsMembers from './conteiners/ShowAllContractsMembers'
import AddNewContractMember from './conteiners/AddNewContractMember'

const window = Dimensions.get('window')

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

const LoginPage = createStackNavigator({
    Login: {screen: Login},
    Registry: {screen: Registry}
})
const People = createStackNavigator({
        ManagePeople: {screen: ManagePeople},
        UserCard: {screen: UserCard},
        UserDetailCard: {screen: UserDetailCard}
},{
    navigationOptions:{
        headerStyle:{
            backgroundColor: 'black'
        },
        headerTintColor: '#fff'
    }})
const Contracts = createStackNavigator({
    ManageContract: {screen: ManageContact},
    DetalContract: {screen: DetalContract},
    CreateNewContract: {screen: CreateNewContract},
    ShowAllContractsMembers: {screen: ShowAllContractsMembers},
    AddNewContractMember: {screen: AddNewContractMember}

},{
    navigationOptions:{
        headerStyle:{
            backgroundColor: 'black'
        },
        headerTintColor: '#fff'
    }})

const Tabs = createBottomTabNavigator({
    ManageContact: {screen: Contracts},
    ManageLicense: {screen: ManageLicense},
    ManagePeople: {screen: People}
    },{tabBarOptions:{
    style: styles.headerNavigation,
    labelStyle: styles.headerLabel,
    activeTintColor: 'blue',
    inactiveTintColor: 'black',
}}
)
const Main = createSwitchNavigator({
    login: {screen: LoginPage},
    MainApp: {screen: Tabs}
})

export default Main