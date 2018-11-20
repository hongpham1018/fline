import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Font} from 'expo';
import {FlatList, ScrollView, ListView, Text,
  Button, TouchableOpacity,View, StyleSheet,
  ImageBackground, Dimensions} from 'react-native';
import {fetchTopics} from '../actions/TopicAction'
import TopicItem from './TopicItem';
const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT=Dimensions.get('window').height;
import {Icon} from 'react-native-elements';
class TopicsList extends Component {

  constructor(props) {
      super(props);
      console.log("topicList constructor")
      this.state = {
      randomNumber: 0
    }
  }
  componentWillMount(){
     this.props.fetchTopics();
     console.dir(this.props.topics)

  }
  static navigationOptions = ({navigation}) =>{

    return {

      headerStyle: {
         backgroundColor: '#fff',
         marginRight:20,
         marginLeft:20

       },
      // headerTintColor: 'black',
       headerTitleStyle: {
         fontWeight: 'bold',
       },
        headerTitle: "Choose Your Inspiration",

        headerRight:(<Icon name="refresh" size={30}
        onPress={navigation.getParam('randomNumber')

          }/>
        ),

     }
   }

   randomPick(max) {
    let randomNum = Math.floor(Math.random() * Math.floor(max));

    return randomNum;
  }
  componentDidMount(){
    this.props.navigation.setParams({
      randomNumber: this._setRandomNumberToState
    })
  }
  _setRandomNumberToState = () => {
   this.setState({ randomNumber: this.randomPick(50)});
 };

  render() {

    console.log("topicLists rendering")
    console.dir(this.props.topicsList);/*
  let one = this.props.topicsList.filter(value=>{
        if(this.state.randomNumber == value.id)
          return value;
    })
    if(one.length > 0){
    return (
      <ScrollView>
        <FlatList  contentContainerStyle={styles.imageSelectContainer} data={one}
          renderItem ={this.renderItem2.bind(this)}
          keyExtractor={(item, index) => item.key}/>
      </ScrollView>
    )}else{*/
  return (
      <ScrollView>
        <FlatList numColumns="2" contentContainerStyle={styles.topicContainer} data={this.props.topicsList}
          renderItem ={this.renderItem.bind(this)}
          keyExtractor={(item, index) => item.key}/>
      </ScrollView>
    )
  }
 //}
  renderItem(topic){
    return <View style={styles.itemStyle}><TouchableOpacity><TopicItem topic={topic}
      itemNavigation={this.props.navigation}/></TouchableOpacity></View>
  }
  renderItem2(topic){

    return <View style={styles.imageSelectStyle}><TouchableOpacity><TopicItem topic={topic}
      itemNavigation={this.props.navigation}/></TouchableOpacity></View>
  }
}
const styles = StyleSheet.create({
  topicContainer:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap',
    width:SCREEN_WIDTH
  },
  itemStyle:{
    height:160,
    width:160,
    margin:4,
  },
  imageSelectContainer:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center',
    width:SCREEN_WIDTH
  },
  imageSelectStyle:{
    height:400,
    width:SCREEN_WIDTH-40
  },
  randomIcon:{
    marginRight:20,

  }
});
const mapStateToProps = (state) => {
  return {topicsList: state.topics};
}
export default connect(mapStateToProps, {fetchTopics})(TopicsList);
