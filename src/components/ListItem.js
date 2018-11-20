import React, { Component } from 'react';
import { Text, Image,TouchableWithoutFeedback, Dimensions, View } from 'react-native';

const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT=Dimensions.get('window').height;


class ListItem extends Component {
  constructor(props){
    super(props);
    console.log("constructor:")
    console.dir(this.props.work)
  }
  onRowPress() {
    const {id, topic, content} = this.props.work.item;

    console.dir(this.props.work.item.topic);
    this.props.itemNavigation.navigate('createWork', {id, topic, content});
}
  render() {
    const { id, content, topic } = this.props.work.item;
    console.log(content)
    return (
      <View>
      <TouchableWithoutFeedback onPress={()=>
            this.onRowPress()}>
          <View>
          <View style = {styles.itemContainer}>
              <Image source={{uri:topic}}  style={styles.imageStyle}/>
              <Text style={styles.contentContainer}>
                {content}
              </Text>

            </View>

          </View>
      </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = {
  container:{
    flex: 1,
    flexDirection:'row',
    alignItems:'center',

    justifyContent:'center',
  },
  itemContainer: {
    flex: 1,
    flexDirection:'row',
    alignItems:'flex-start',
    width:SCREEN_WIDTH - 20,
  justifyContent:'flex-start',
    backgroundColor:'white',
  },
  imageStyle:{
    width:150,
    height:150,
  },
  contentContainer:{
    color:'red'
  }
};

export default ListItem;
