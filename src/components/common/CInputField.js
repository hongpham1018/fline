import React from 'react';
import {StyleSheet,Text, View, TextInput } from 'react-native';
const CInputField = ({label, value, onChangeText, placeholder, secureTextEntry})=>{
  const {containerStyle, labelStyle, inputStyle} = styles;
    return (

        <View style={containerStyle}>
          <Text style={styles.labelStyle}>{label}</Text>
          <TextInput
            style={inputStyle}
            placeholder={placeholder}
            secureTextEntry = {secureTextEntry}
            value={value}
            onChangeText = {onChangeText}>
          </TextInput>

        </View>
      )

}
const styles = StyleSheet.create({
  inputStyle:{
    color:'#000',
    paddingRight:5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:23
  },
  labelStyle:{
    fontSize:20,
    paddingLeft: 20
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
export {CInputField};
