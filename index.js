import { TabNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import {Dimensions} from 'react-native'

import { styles } from './style/styles'

import Login from './component/Login'
import ManageContact from './component/ManageContract'
import ManageLicense from './component/ManageLicense'
import ManagePeople from './component/ManagePeople'
import UserCard from './conteiners/UserCard'
import UserDetailCard from './conteiners/UserDetailCard'

const window = Dimensions.get('window')

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;

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

const Tabs = createBottomTabNavigator({
    ManageContact: {screen: ManageContact},
    ManageLicense: {screen: ManageLicense},
    ManagePeople: {screen: People}
    },{tabBarOptions:{
    style: styles.headerNavigation,
    labelStyle: styles.headerLabel,
    activeTintColor: 'blue',
    inactiveTintColor: 'black',
}}
)

export default Tabs