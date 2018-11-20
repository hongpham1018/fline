import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Font} from 'expo';
import {FlatList, ScrollView, ListView, Text,
  Button, TouchableOpacity,View, StyleSheet,
  ImageBackground, Dimensions} from 'react-native';
import {fetchWorksList} from '../actions/WorkAction'
import ListItem from './ListItem';
const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT=Dimensions.get('window').height;
import {Icon} from 'react-native-elements';
class WorksList extends Component {

  constructor(props) {
      super(props);
      this.state = {

    }
  }
  componentWillMount(){
    let worksList =  this.props.fetchWorksList();
    const works = _.map(worksList, (val, uid)=>{
      return {...val, uid}
    })
    this.props.worksList = works;
  }
  static navigationOptions = ({navigation}) =>{

    return  {
      title: 'My Works',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={focused ? 'subject': 'subject'}
          size={30}
          color={tintColor}
        />)
      }
    }

render() {
  return (
      <ScrollView>
        <FlatList numColumns="1" contentContainerStyle={styles.workContainer} data={this.props.worksList}
          renderItem ={this.renderItem.bind(this)}
          keyExtractor={(item, index) => item.key}/>
      </ScrollView>
    )
 }
  renderItem(work){

    return <View><TouchableOpacity><ListItem work={work}
      itemNavigation={this.props.navigation}/></TouchableOpacity></View>
  }
}
const styles = StyleSheet.create({
  workContainer:{
    flex:1,
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center',

    borderWidth:1,
    marginTop:100
  }
});
const mapStateToProps = (state) => {
  const works = _.map(state.works, (val, uid)=>{
    return {...val, uid}
  })
  return {worksList: works};
}
export default connect(mapStateToProps, {fetchWorksList})(WorksList);
