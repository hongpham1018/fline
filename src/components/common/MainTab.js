import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import React from 'react';
import WorksList from '../WorksList';
import TopicsList from '../TopicsList';
import {Icon}  from 'react-native-elements';
import LogoutForm from '../LogoutForm';
import WorkCreate from '../WorkCreate';

const TopicsStack = createStackNavigator({
     topics: {screen:  TopicsList},
     createWork: {screen: WorkCreate},
     works: {screen: WorksList}
},{
  initialRouteName:'topics'
})
const MainTab = createBottomTabNavigator({
  works: { screen: TopicsStack, navigationOptions:{
     title: 'My Works',
     tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'subject': 'subject'}
        size={30}
        color={tintColor}
      />)
    }
  },
  topics: TopicsStack,

  logout: { screen: LogoutForm, navigationOptions:{
    title: 'Logout',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'arrow-forward' : 'arrow-forward'}

        size={30}
        color={tintColor}
      />)
  },
}
},{ order:["topics", "works", "logout"]}
)
export default MainTab;
