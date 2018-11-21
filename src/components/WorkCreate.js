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
  randomHex = (id) => {
    let hexValue = ["#4a9ff5","#a1c45a","#ffcd3c","#5ad0ff","#a1c45a","#68dfc4","#fce199","#84a1be"]
     return (hexValue[id % 8])
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
        <Button
         buttonStyle={styles.saveBtn}
           titleStyle={{fontWeight: 'bold', fontFamily:'regular', paddingLeft:20}}
           underlayColor="transparent"
           title={'Save'}
           onPress={this.onSave.bind(this)}/>
           />
          <View style={{backgroundColor:this.randomHex(params.id), width:SCREEN_WIDTH -20 ,marginLeft:10, padding:10}}>
            <Image source={{uri:topic}} style={styles.imageStyle}></Image>
          </View>
          <View>
            <TextEditor
              onChangeText={this.onChangeText.bind(this)}
              value = {"Write on..."}/>
          </View>

        </View>
    );
  }
}
const styles = {
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    paddingTop:40
  },

  imageStyle:{
    width:120,
    padding:20,
    height:120,
  },
  saveBtn: {
    backgroundColor:'#ff9234',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 40,
    height: 45,
    width: 120
  }
}
mapStateToProps = (state)=>{
    return {content:state.works.content};
}
export default connect(mapStateToProps, {createWorkTextChanged, createWorkSave})(WorkCreate)
