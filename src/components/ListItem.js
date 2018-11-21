import React, { Component } from 'react';
import { Text, Image,TouchableWithoutFeedback, Dimensions, View } from 'react-native';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT=Dimensions.get('window').height;


class ListItem extends Component {
  constructor(props){
    super(props);
  }
  onRowPress() {
    const {id, topic, content} = this.props.work.item;
    this.props.itemNavigation.navigate('createWork', {id, topic, content});
  }
  randomHex = (id) => {
    let hexValue = ["#4a9ff5","#a1c45a","#ffcd3c","#5ad0ff","#a1c45a","#68dfc4","#fce199","#84a1be"]
     return (hexValue[id % 8])
  }

  render() {
    const { id, content, topic } = this.props.work.item;

    return (
      <View>
      <TouchableWithoutFeedback onPress={()=> this.onRowPress()}>
          <View style = {styles.itemContainer}>
              <View style={{width:SCREEN_WIDTH, backgroundColor:this.randomHex(id), padding:20}}><Image source={{uri:topic}}  style={styles.imageStyle}/>
              </View>
              <View style={styles.contentContainer}><Text style={styles.contentStyle}> {content}</Text></View>
          </View>
      </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = {
  itemContainer: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',

    flexShrink:0
  },
  imageStyle:{
    width:120,
    height:120,

  },
  imageContainer:{
    backgroundColor:'white'
  },
  contentStyle:{
    padding:20,
    color:'black',
  },
  contentContainer:{

    width:SCREEN_WIDTH
  }
};

export default ListItem;
