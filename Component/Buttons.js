import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View,Animated, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function Buttons(props) {

    const fade=new Animated.Value(1)

    const spring=new Animated.Value(1)
    const spin=new Animated.Value(0)
    const spinValue=spin.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','360deg']
    })

    const scale=new Animated.Value(0)
    const scaleValue=scale.interpolate({
      inputRange:[0,1],
      outputRange:[1,1.25 ]
  })

//   const color=new Animated.Value(0)
//   const colorValue=color.interpolate({
//     inputRange:[0,50,100],
//     outputRange:['#2196f3','#ccc','#8BC34A' ]
// })
    const scaling=()=>
    {
        Animated.sequence(
            [
                Animated.timing(scale,{
                    toValue:1,
                    duration:150,
                    useNativeDriver:true
                  }),
                  Animated.timing(scale,{
                    toValue:0,
                    duration:150,
                    useNativeDriver:true
                  })
            ]).start()
    }

    const fading=()=>
    {
        Animated.sequence(
            [
                Animated.timing(fade,{
                    toValue:0,
                    duration:150,
                    useNativeDriver:true
                  }),
                  Animated.timing(fade,{
                    toValue:1,
                    duration:150,
                    useNativeDriver:true
                  })
            ]).start()
    }

    const springEffect=()=>
    {
            Animated.spring(spring,{
                toValue:1.1,
                friction:1,
                useNativeDriver:true
              }).start()
                      
    }
   
    const navigate=()=>
    {
      
      console.log("Hello")
      Animated.timing(spin,{
        toValue:1,
        duration:300,
        useNativeDriver:true
      }).start()

      setTimeout(()=>
      {
        props.navigation.navigate("ProgressBar")
      },300)
    }
    // const changeColour=()=>
    // {     
    //               Animated.timing(color,{
    //                 toValue:100,
    //                 duration:150,
    //                 useNativeDriver:true
    //               }).start()     
    // }
    return (
<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <TouchableWithoutFeedback onPress={()=>{fading()}}>
        <Animated.View style={{justifyContent:"center",alignItems:"center",width:"75%",height:40,backgroundColor:"lightblue",marginBottom:40,opacity:fade}}>
            <Text>Ordinary</Text>
        </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>{scaling()}}>
        <Animated.View style={{justifyContent:"center",alignItems:"center",width:"75%",height:40,backgroundColor:"orange",marginBottom:40,transform:[{scale:scaleValue}]}}>
            <Text>Scaling</Text>
        </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>{springEffect()}}>
        <Animated.View style={{justifyContent:"center",alignItems:"center",width:"75%",height:40,backgroundColor:"red",marginBottom:20,transform:[{scale:spring}]}}>
            <Text>Stateful</Text>
        </Animated.View>
        </TouchableWithoutFeedback>

        <Animated.View style={{position:"absolute",right:20,bottom:20,width:50,height:50,borderRadius:25,justifyContent:"center", alignItems:"center", backgroundColor:"green",transform:[{rotate:spinValue}]}}>
      <MaterialCommunityIcons name="plus" color="white" size={22} onPress={()=>{navigate()}} />
      </Animated.View>
        </View>    );
}

export default Buttons;
