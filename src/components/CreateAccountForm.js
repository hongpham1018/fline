import React, {Component} from 'react';
import {Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, usernameChanged,createAccount} from '../actions/AccountAction';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  LayoutAnimation,
  UIManager,
  KeyboardAvoidingView } from 'react-native';
  import { Input, Button } from 'react-native-elements';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
  const SCREEN_WIDTH= Dimensions.get('window').width;
  const SCREEN_HEIGHT=Dimensions.get('window').height;
  import {Font} from 'expo';

  const BG_IMAGE = require('../../assets/images/createAccount_bg.jpg');

  class  CreateAccountForm extends Component {
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
  onCreateAccountPress =()=>{
    const  { email, password, username } = this.props;
    this.props.createAccount({email, password, username}, ()=>{this.props.navigation.navigate('topics')});
  }
  render(){
    return (
      <View style={styles.createAccountContainer}>
       <ImageBackground source={BG_IMAGE} style={styles.bgImageContainer}>
        <View style={styles.formContainer}>
        <Input
          leftIcon={
            <Icon
              name='user'
              color='rgba(0, 0, 0, 0.38)'
              size={25}
              style={{backgroundColor: 'transparent'}}
            />
          }
            value={this.props.username}
            keyboardAppearance='light'
            autoFocus={false}
            autoCapitalize='none'
            autoCorrect={false}

            returnKeyType='next'
            inputStyle={{marginLeft: 10}}
            placeholder={'Username'}
            containerStyle={{borderBottomColor: 'rgba(0, 0, 0, 0.38)'}}
            onChangeText={this.props.usernameChanged.bind(this)}
            />

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

                onChangeText={this.props.emailChanged.bind(this)}
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
               onChangeText={this.props.passwordChanged.bind(this)}
             />
             {this.renderError()}
             {this.renderSpinner()}
             <View style={styles.btnContainer}>
                <Button
                 buttonStyle={styles.createAccountBtn}
                   titleStyle={{fontWeight: 'bold', fontFamily:'regular'}}
                   underlayColor="transparent"
                   title={'CreateAccount'}
                   iconRight
                   icon={<Icon
                     name='arrow-right'
                     size={15}
                     color='white'
                     backgroundColor='transparent'
                   />}
                   onPress={this.onCreateAccountPress.bind(this)}/>
                 />
             </View>
          </View>
          </ImageBackground>
      </View>)
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
mapStateToProps =(state) =>{
  return {email:state.account.email,
    password:state.account.password,
    username:state.account.username,
    error:state.account.error,
    loading:state.account.loading};
}
const styles = StyleSheet.create({

  createAccountContainer: {
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  formContainer: {

    backgroundColor: 'white',
    width: SCREEN_WIDTH - 30,
    borderRadius: 10,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems:'center',
    opacity:.9,
      justifyContent: 'center'
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
    btnContainer: {
      marginLeft:-130,
      marginTop:30

    },
    createAccountBtn: {
      backgroundColor:'#ff9234',
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 40,
      height: 45,
      width: 200
    },
    titleText: {
      paddingLeft: 30,
      paddingBottom:100,
      height:60,
      color: '#ff9234',
      fontSize: 30,
      fontWeight:'700'
    },

})
export default connect(mapStateToProps, {emailChanged, passwordChanged, usernameChanged, createAccount})(CreateAccountForm);
