import React from 'react';
import {View,Text} from 'react-native';
function app(){
  return(
    <View style={{
      justifyContent:"center",+
      flex:1,
      lingnItems:"center"
    }}>
    <Text style={{color:"red",fontSize:"50px",fontWeight:"bold"}}>I love cat.</Text>
    </View>
  )
}

export default app;