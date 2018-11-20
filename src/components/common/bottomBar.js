import  {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import React from 'react';
import LoginForm from '../LoginForm';
import WorksList from '../WorksList';
import TopicsListP from '../TopicsList';
import TopicsList from '../TopicsList';
import {Icon}  from 'react-native-elements';
import WorkCreate from '../WorkCreate';
import LogoutForm from '../LogoutForm';
import CreateAccountForm from '../CreateAccountForm';


const mainTab = createBottomTabNavigator ({
  topics: { screen: createStackNavigator ({
    topics: {screen: TopicsList},

  }), navigationOptions:{
    title:"Topic List",
    tabBarIcon: ({ tintColor, focused }) => (
    <Icon
      name={focused ? 'list' : 'list'}
      size={30}
    />)
  }
  },

  createWork: {screen: WorkCreate, navigationOptions:{
      title: 'Create Works',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'note-add' : 'note-add'}
          size={ 30 }
          color={tintColor}
        />)}
  },
  works: { screen: WorksList },
  logout: { screen: LogoutForm}
})

export default createBottomTabNavigator({
  works: { screen: WorksList },
  login: { screen: LoginForm, navigationOptions:{
    title: "Login",
    tabBarVisible:false
    }
  },
  main: mainTab,
  signUp: { screen: CreateAccountForm, navigationOptions:{tabBarVisible:false}}


},{
  navigationOptions:{
      tabBarVisible:false
  }
},{
    initialRouteName: "works"
  }
)
