import  {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import React from 'react';
import LoginForm from '../LoginForm';
import WorksList from '../WorksList';
import TopicsList from '../TopicsList';
import {Icon}  from 'react-native-elements';
import WorkCreate from '../WorkCreate';
import LogoutForm from '../LogoutForm';
import CreateAccountForm from '../CreateAccountForm';



const topicsTab = createBottomTabNavigator({
  screen: TopicsList , navigationOptions:{
    title:"Topic List",
    tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name={focused ? 'list' : 'list'}
      size={30}
    />)
  },
})

const createWorkStack =  createStackNavigator({
   createWork: {screen: topicsTab},

});
const mainTab = createBottomTabNavigator ({

  topics: topicsTab,
  works: { screen: WorksList },
  logout: { screen: LogoutForm },
})

export default createBottomTabNavigator({
  login: { screen: LoginForm, navigationOptions:{
    title: "Login",
    tabBarVisible:false
    }
  },
  main: {screen: mainTab, navigationOptions:{
    navigationOptions:{tabBarVisible:false}
  }},

  signUp: { screen: CreateAccountForm, navigationOptions:{tabBarVisible:false}}
},{
  navigationOptions:{
      tabBarVisible:false
  }
},{
    initialRouteName: "login"
  }
)
