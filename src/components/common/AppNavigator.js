import  {createSwitchNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import React from 'react';
import {Icon}  from 'react-native-elements';
import MainTab from './MainTab';
import LoginForm from '../LoginForm';
import WorkCreate from '../WorkCreate';
import CreateAccountForm from '../CreateAccountForm';
import AuthLoading from './AuthLoading';


const AppStack = createStackNavigator({ topics: MainTab});
const AuthStack = createStackNavigator({ login: LoginForm });
export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
