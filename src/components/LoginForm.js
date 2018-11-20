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

import {Font} from 'expo';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT=Dimensions.get('window').height;
const BG_IMAGE = require('../../assets/images/cyan3.jpg');



class  LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      isLoading: false,
    };

  }

  navigationOptions = ({ navigation }) => {
  let tabBarVisible = false;

  return {
    tabBarVisible,
  };
};

  async componentDidMount() {
    await Font.loadAsync({
      'georgia': require('../../assets/fonts/Georgia.ttf'),
      'regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
      'light': require('../../assets/fonts/Montserrat-Light.ttf'),
      'savoye': require('../../assets/fonts/Savoye-LET-Plain.ttf'),
      'sunshine': require('../../assets/fonts/Sunshine-Boulevard-Personal-Use.ttf')
    });

    this.setState({ fontLoaded: true });
  }


  onEmailChanged = (text)=>{
    this.props.emailChanged(text);
  }
  onPasswordChanged = (text)=>{
    this.props.passwordChanged(text);
  }
  doLogin = () =>{
    const  { email, password } = this.props;
    this.props.loginUser({email, password}, ()=>{
      this.props.navigation.navigate('topics')
    });
  }


  signUp =()=>{
    this.props.navigation.navigate('signUp');
  }

  render(){
    const {
      isLoading
    } = this.state;

    return (
      <View style={styles.authContainer}>
      <ImageBackground
          source={BG_IMAGE}
          style={styles.bgImageContainer}
        >{this.state.fontLoaded ?
        <View>
        <KeyboardAvoidingView behavior='position'>
              <View style={styles.titleContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.titleText}>Write On!</Text>
                </View>
              </View>
              <View style={{paddingBottom:100}}>
              <View style={styles.leftContainer}>
                <Button
                 buttonStyle={styles.signUpBtn}
                   titleStyle={{fontWeight: 'bold', fontFamily:'regular'}}
                   underlayColor="transparent"
                   title={'Create Account'}
                   iconRight
                   icon={<Icon
                     name='user'
                     size={15}
                     color='white'
                     backgroundColor='transparent'
                   />}
                   onPress={this.signUp.bind(this)}/>

                 />
              </View>
              <View style={styles.formContainer}>
                  <Input
                    leftIcon={
                      <Icon
                        name='envelope-o'
                        color='rgba(0, 0, 0, 0.38)'
                        size={25}
                        style={{backgroundColor: 'transparent'}}
                      />
                    }
                      value={this.props.email}
                      keyboardAppearance='light'
                      autoFocus={false}
                      autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='email-address'
                      returnKeyType='next'
                      inputStyle={{marginLeft: 10}}
                      placeholder={'Email'}
                      containerStyle={{borderBottomColor: 'rgba(0, 0, 0, 0.38)'}}
                      ref={input => this.emailInput = input}
                      onSubmitEditing={() => this.passwordInput.focus()}
                      onChangeText={this.onEmailChanged.bind(this)}
                      />

                   <Input
                     leftIcon={
                       <SimpleIcon
                         name='lock'
                         color='rgba(0, 0, 0, 0.38)'
                         size={25}
                         style={{backgroundColor: 'transparent'}}
                       />
                     }
                     value={this.props.password}
                     keyboardAppearance='light'
                     autoCapitalize='none'
                     autoCorrect={false}
                     secureTextEntry={true}
                     blurOnSubmit={true}
                     containerStyle={{marginTop: 16, borderBottomColor: 'rgba(0, 0, 0, 0.38)'}}
                     inputStyle={{marginLeft: 10}}
                     placeholder={'Password'}
                     ref={input => this.passwordInput = input}
                     onChangeText={this.onPasswordChanged.bind(this)}
                   />
                   {this.renderError()}

                </View>
                <View style={styles.leftContainer}>
                  <Button
                   buttonStyle={styles.signInBtn}
                     titleStyle={{fontWeight: 'bold', fontFamily:'regular'}}
                     underlayColor="transparent"
                     title={'Login'}
                     iconRight
                     icon={<Icon
                       name='arrow-right'
                       size={15}
                       color='white'
                       backgroundColor='transparent'
                     />}
                     onPress={this.doLogin.bind(this)}/>

                   />

                </View>
                </View>
              </KeyboardAvoidingView>
              </View>
              :
        <Text>Loading...</Text>
       }

     </ImageBackground>
    </View>

  )
  }

  renderSpinner(){
    if(this.props.loading)
      return <Spinner size="large"></Spinner>
    }
  renderError(){
    if(this.props.error)
      return <Text>{this.props.error}</Text>
  }
}


const styles = StyleSheet.create({
  authContainer: {
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  selected: {
    position: 'absolute',
    borderRadius: 50,
    height: 0,
    width: 0,
    top: -5,
    borderRightWidth: 70,
    borderBottomWidth: 70,
    borderColor: 'white',
    backgroundColor: 'white',
  },

  loginTextButton: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  leftContainer: {
    flexDirection:'row',
    justifyContent:'flex-start'
  },

  signInBtn: {
    backgroundColor:'#ff9234',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 40,
    height: 45,
    width: 120
  },
  signUpBtn: {
    backgroundColor:'transparent',
    borderColor: 'white',
    borderRadius: 40,
    height: 45,
    borderWidth: 1,

    width: 200
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent:'center',
    backgroundColor: 'transparent',
    justifyContent: 'center'

  },
  formContainer: {
    backgroundColor: 'transparent',
    width: SCREEN_WIDTH - 30,
    borderRadius: 10,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems:'center',
  },
  loginText: {
    fontSize: 16,
    paddingBottom:100,
    fontWeight: 'bold',
    color: 'white',
  },
  bgImageContainer: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    paddingLeft: 30,
    paddingBottom:100,
    height:60,
    color: '#ff9234',
    fontSize: 30,
    fontWeight:'700',
    fontFamily:'sunshine'
  },

});
mapStateToProps =(state) =>{
  return {email:state.auth.email,
    password:state.auth.password,
    user:state.auth.user,
    error:state.auth.error,
    loading:state.auth.loading};
}
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
