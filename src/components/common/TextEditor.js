import React from 'react';
import {View, TextInput, Text, Dimensions } from 'react-native';
const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT=Dimensions.get('window').height;


const TextEditor = ({onChangeText, value}) => {
 return (
    <View>

           <TextInput style={styles.textAreaStyle}
              onChangeText={onChangeText}
              value={value}
              multiline = {true}
              numberOfLines = {60}
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
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  textAreaStyle: {
    borderColor:'#929aab',
    backgroundColor:'#eeddd2',
    borderWidth:1,
    width:SCREEN_WIDTH - 40,
    padding:20,
    margin:20,
    borderRadius:20,
    height:400,
    paddingTop:20,
    fontSize:16
  },
}

export {TextEditor}
