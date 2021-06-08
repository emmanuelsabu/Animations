import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const pan =useState(new Animated.ValueXY())[0]
  const fade = new Animated.Value(1);

  const panResponder=useState(PanResponder.create({
    onMoveShouldSetPanResponder:()=>true,
    onPanResponderGrant:()=>{
      console.log("Granted")

    pan.setOffset({
      x:pan.x._value,
      y:pan.y._value
    })
    },
    onPanResponderMove:(_,gesture)=>
    {
      pan.x.setValue(gesture.dx)
      pan.y.setValue(gesture.dy)

    },
    onPanResponderRelease:(_,gesture)=>
    {      
      console.log(gesture.moveY)
      if(gesture.moveY<260){
        Animated.timing(fade,{
          duration:3000,
          toValue:0,
          useNativeDriver:false
        }).start() 
      }
     

      pan.flattenOffset();
    }
  }))[0]
  return (
    <View style={styles.container}>
      <View style={{width:"100%",height:200,backgroundColor:"red",position:"absolute",top:0,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:20,fontWeight:"700"}}>Drag it here to Delete</Text>
      </View>
      <Animated.View 
        style={[{width:100,height:100,borderRadius:50, backgroundColor:"black",opacity:fade, top:pan.y,left:pan.x},
        // or Instead of top & left use=>  transform:[{translateX:pan.x},{translateY:pan.y}]
        // pan.getLayout()
      ]} 
        {...panResponder.panHandlers}>
        {/* <View style={{width:100,height:100,borderRadius:50, backgroundColor:"red"}} ></View> */}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
