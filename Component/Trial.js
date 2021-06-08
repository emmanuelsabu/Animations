import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View,Animated } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
    const fade = new Animated.Value(0);
    const value=(new Animated.ValueXY({x:0,y:0}));

    useEffect(()=>
    {
        Animated.timing(fade,{
            toValue:1,
            useNativeDriver:true,
            duration:3000,
        }).start(),
        Animated.timing(value,{
            toValue:{x:50,y:10},
            useNativeDriver:true,
            duration:3000
        }).start()
    })

  return (
    <View style={styles.container}>
      {/* <Animated.Text style={{fontSize:18,opacity:fade}}>React Native</Animated.Text>
      <Animated.Text style={{fontSize:15,transform:[{translateX:value.x},{translateY:value.y}]}}>We make Coding Easier!</Animated.Text> */}
      
      <View style={{marginBottom:100,}}>
      <MaterialCommunityIcons name="plus" color="green" size={18} />
      </View> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor:"blue"
  },
});
