import React, { Component } from 'react';
import {View, Text, Image, Dimensions, ImageBackground} from 'react-native'
import {Button} from 'react-native-elements';
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
       headerStyle: {
          backgroundColor: '#fff',
        },
       headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
         headerTitle: "Create",
         headerRight:(<Button title="Save"  onPress={navigation.getParam('createWorkSave')}/>),
      //   onPress={navigation.getParam('randomNumber')}/>),
      //   headerRight:(<Button title="Save"  onPress={this.onSave}/>),
         tabBarVisible:true,

       }
  }
  componentDidMount(){

    this.props.navigation.setParams({createWorkSave:this.saveWork})
  }
  saveWork = () =>{
    console.log("calling saving work")
    const {content, navigation} = this.props;
    const topic = navigation.getParam('topic');
    const id = navigation.getParam('id')
    this.props.createWorkSave({topic, content, id},()=>{this.props.navigation.navigate('works')})
  }

  onChangeText(text){
    this.props.createWorkTextChanged(text)

  }

  onSave(){


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
        <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end'}}>
        <Button
          buttonStyle={styles.saveBtn}
           titleStyle={{fontWeight: 'bold', color:'black'}}
           title={'Save'}
           onPress={this.onSave.bind(this)}/>
        </View>
          <View style={{backgroundColor:this.randomHex(params.id),
                borderWidth:1,
                borderColor:'white',
                width:SCREEN_WIDTH - 40}}>
                <Image source={{uri:topic}} style={styles.imageStyle}></Image>
           </View> //image container
          <View style={{backgroundColor:this.randomHex(params.id),opacity:.45}}>
            <TextEditor
              onChangeText={this.onChangeText.bind(this)}
              value = ""/>
          </View>

        </View>
    );
  }
}
const styles = {
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  imageStyle:{
    width:120,
    padding:5,
    height:120,
    margin:10
  },
  saveBtn: {
    backgroundColor:'white',
    marginLeft:SCREEN_WIDTH - 120
  }
}
mapStateToProps = (state)=>{
    return {content:state.works.content};
}
export default connect(mapStateToProps, {createWorkTextChanged, createWorkSave})(WorkCreate)
