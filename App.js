import React, {Component} from 'react';
import { StyleSheet, Text, View, AsyncStorage} from 'react-native';
import ReduxThunk from 'redux-thunk';
import { Header, Spinner, Button } from './src/components/common/';
//import LoginForm from  './src/components/LoginForm';
import firebase from 'firebase';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/reducers';
import AppNavigator from './src/components/common/AppNavigator';
console.disableYellowBox = true;
export default class App extends React.Component {

 componentWillMount(){
    
    firebase.initializeApp({
      apiKey: "AIzaSyCNPQqXEcjIv5VQCcTQKw2zUFgQyPygxZk",
      authDomain: "manager-f3aca.firebaseapp.com",
      databaseURL: "https://manager-f3aca.firebaseio.com",
      projectId: "manager-f3aca",
      storageBucket: "manager-f3aca.appspot.com",
      messagingSenderId: "385278651194"
  });
  firebase.auth().onAuthStateChanged(user =>{
    if(user){
      AsyncStorage.setItem("loggedIn", "1")
    }else {

      AsyncStorage.setItem("loggedIn","0")
    }
  })
  }
  render() {

    return (
      <Provider style = {styles.container} store={store}>
        <AppNavigator />
      </Provider>

    );
  }
}
store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily:'sunshine',
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
