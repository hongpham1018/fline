import React from 'react';
import {View, TextInput, Text, Dimensions } from 'react-native';
const SCREEN_WIDTH= Dimensions.get('window').width;
const SCREEN_HEIGHT=Dimensions.get('window').height;


const TextEditor = ({onChangeText, value}) => {
 return (
    <View>

           <TextInput style={styles.textAreaStyle}
              onChangeText={onChangeText}
              placeholder={"Write On !"}
              value={value}
              multiline = {true}
              numberOfLines = {60}
              lineHeight={25}
              autoCorrect = {false}
              disableFullscreenUI = {false}
              blurOnSubmit={true}
              keyboardAppearance='light'
           />
      </View>
    );
}

const styles = {
  textAreaStyle: {
    borderColor:'black',
    borderWidth:1,
    width:SCREEN_WIDTH-40,
    height:SCREEN_HEIGHT - 300,
    borderRadius:10,
    fontSize:18
  }
}

export {TextEditor}
