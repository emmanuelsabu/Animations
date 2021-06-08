import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View,Animated } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function App(props) {
    const fade = new Animated.Value(0);
    const value=(new Animated.ValueXY({x:0,y:0}));
    
    const scale=new Animated.Value(0.5)
    const scaleValue=scale.interpolate({
        inputRange:[0,1],
        outputRange:[1,1.5 ]
    })
    const navigate=()=>
    {
      
      console.log("Hello")
      Animated.timing(scale,{
        toValue:1,
        duration:300,
        useNativeDriver:true
      }).start()

      setTimeout(()=>
      {
        props.navigation.navigate("Buttons")
      },300)
    }

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
    <View style={{flex:1}}>
    <View style={styles.container}>
      <Animated.Text style={{fontSize:18,opacity:fade}}>React Native</Animated.Text>
      <Animated.Text style={{fontSize:15,transform:[{translateX:value.x},{translateY:value.y}]}}>We make Coding Easier!</Animated.Text>
    
    </View>
    <Animated.View style={{position:"absolute",right:20,bottom:20,width:50,height:50,borderRadius:25,justifyContent:"center", alignItems:"center", backgroundColor:"green",transform:[{scale:scaleValue}]}}>
      <MaterialCommunityIcons name="plus" color="white" size={22} onPress={()=>{navigate()}} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
