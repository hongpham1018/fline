import React from 'react';
import {View, TextInput, Text, Dimensions } from 'react-native';
const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT=Dimensions.get('window').height;


const TextEditor = ({onChangeText, value}) => {
 return (
    <View style ={styles.container}>

           <TextInput style={styles.textAreaStyle}
              onChangeText={onChangeText}
              value={value}
              multiline = {true}
              numberOfLines = {60}
              lineHeight={25}
              autoCorrect = {false}
              disableFullscreenUI = {true}
              blurOnSubmit={true}
              keyboardAppearance='light'
           />
      </View>
    );
}

const styles = {
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  textAreaStyle: {
    borderColor:'#929aab',
    backgroundColor:'#d3d5fd',
    borderWidth:2,
    width:SCREEN_WIDTH - 20,
    marginLeft:10,
    marginRight:10,
    padding:20,
    height:SCREEN_HEIGHT - 200,
    borderRadius:10,
    fontSize:18
  },
}

export {TextEditor}
