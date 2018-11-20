import React, {Component} from 'react';
//import {Card, CardSection, Input, Button, CInputField, Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions/AuthAction';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  LayoutAnimation,
  UIManager,
  KeyboardAvoidingView } from 'react-native';
  import {createBottomTabNavigator} from 'react-navigation';

import WorksList from './WorksList';
import { Input, Button } from 'react-native-elements';
import {Icon} from 'react-native-elements';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT=Dimensions.get('window').height;




class  LogoutForm extends Component {

  constructor(props) {
    super(props);
}

  static navigationOptions = ({navigation})=> {
    return {
    tabBarVisible: true,
    title: 'Logout',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={focused ? 'arrow-forward' : 'arrow-forward'}

        size={30}
        color={tintColor}
      />)
    }
  }
  };
export default LogoutForm
