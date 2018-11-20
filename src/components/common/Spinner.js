import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({size})=>{
  return (
      <ActivityIndicator  style={styles.spinnerStyle} size={size || large}/>

  )
}
const styles = {
  spinnerStyle:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
}

export {Spinner};
