import React, { Component } from 'react';
import {View, Text, Image, Dimensions, ImageBackground, Button} from 'react-native'
import {CardSection,Card, TextEditor} from './common';
import {connect} from 'react-redux';
import {Font} from 'expo';

import { Input, Icon} from 'react-native-elements';
import {createWorkSave, createWorkTextChanged} from '../actions/WorkAction';
const BG_IMAGE = require('../../assets/images/createWork_bg.png');
//const DIVIDER = require('../../assets/images/divider.png');
const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT=Dimensions.get('window').height;

class WorkCreate extends Component {
  constructor(props) {
      super(props);
      console.log("---constructor:")
  }


  static navigationOptions = ({navigation}) => {
    return {
      tabBarVisible:true,

      }
 }

  onChangeText(text){
    this.props.createWorkTextChanged(text)

  }

  onSave(){
    const {content, navigation} = this.props;
    const topic = navigation.getParam('topic');
    const id = navigation.getParam('id')
    this.props.createWorkSave({topic, content, id},()=>{this.props.navigation.navigate('works')})
  }

  render() {
      const {content, navigation} = this.props;
      let topic = "";
      const { params } = navigation.state;
      if(params == undefined){
        topic = this.props.navigation.getParam("topic")
      } else topic = params.topic;


    return (
      <View  style={styles.container}>
          <View><Image source={{uri:topic}} style={styles.topicImage}></Image>
          </View>
          <View>
            <TextEditor
              onChangeText={this.onChangeText.bind(this)}
              value = {"content"}/>
          </View>
          <Button
           buttonStyle={styles.saveBtn}
             titleStyle={{fontWeight: 'bold', fontFamily:'regular'}}
             underlayColor="transparent"
             title={'Save'}
             onPress={this.onSave.bind(this)}/>

           />
        </View>
    );
  }
}
const styles = {
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },

  topicImage:{
    padding:4,
    marginLeft:20,
    minWidth:200,
    height:200,
  },
  saveBtn: {
    backgroundColor:'transparent',
    borderColor: 'white',
    borderRadius: 40,
    height: 45,
    borderWidth: 1,
    width: 200
  },

}
mapStateToProps = (state)=>{
  console.log("---mapping")
    return {content:state.works.content};
}
export default connect(mapStateToProps, {createWorkTextChanged, createWorkSave})(WorkCreate)
