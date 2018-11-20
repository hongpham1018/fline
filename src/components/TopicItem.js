import React, {Component} from 'react';
import {Text, TextInput, View, TouchableWithoutFeedback, Dimensions, Image, LayoutAnimation, ImageBackground} from 'react-native';
import {CardSection} from './common';
import {selectTopic}  from '../actions/TopicAction';
import {connect} from 'react-redux';
import {Font} from 'expo';
import {createBottomTabNavigator} from 'react-navigation';
//import {Actions} from 'react-native-router-flux';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT=Dimensions.get('window').height;

class TopicItem extends Component {
    constructor(props) {
        super(props);
    }
  onRowPress() {
    const {topic, id} = this.props.topic.item;
       this.props.itemNavigation.navigate('createWork', {
           topic:topic,
           content: '',
           id:id,
           });

}
  render(){
    const {id, content, topic} = this.props.topic.item;//selectedTopic//this.props.topic.item;
  //  console.dir(this.props.topic);
    return (
      <View>
      <TouchableWithoutFeedback onPress={()=>
            this.onRowPress()}>
      <View style={styles.itemContainer}>
      <Image source={{uri:topic}}  style={styles.imageStyle}/>

      </View>
      </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = {
    itemContainer: {
      flex: 1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',


      width:SCREEN_WIDTH - 20,
      backgroundColor:'white',
    },
    imageStyle:{
      width:150,
      height:150,
    }
  }

export default TopicItem

//export default TopicItem;
