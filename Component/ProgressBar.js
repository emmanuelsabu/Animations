import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View,Animated, Dimensions } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

 
function ProgressBar(props) {
    const width=Dimensions.get('window')

    const available_width=width.width-70;

    const progress_Value=(new Animated.Value(0)) ;
    const fade=new Animated.Value(0)

    // const color_Animation = progress_Value.interpolate(
    //     {
    //         inputRange:[0,50,100],
    //         outputRange:['rgb(199, 45, 50)', 'rgb(224, 150, 39)', 'rgb(101, 203, 25)']
    //     }
    // )

    const animated_width = progress_Value.interpolate({
        inputRange: [0,50, 99],
        outputRange: [0,available_width/2,available_width-10] })

        const percent = progress_Value.interpolate({
            inputRange:[0,50,100],
            outputRange:[0,50,100]
        })

        const navigate =()=>
        {
            props.navigation.navigate("PanResponders")
        }
    useEffect(()=>{
        Animated.sequence(
            [
                Animated.timing(progress_Value,{
                    toValue:100,
                    duration:5000,
                    useNativeDriver:false,
                }            
                ) ,
              Animated.timing(fade, { 
                  toValue: 2, 
                  duration: 3000, 
                  useNativeDriver: true 
             }) //scaling
                //spring
              
            ]).start()
    })


    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{height:50,width:available_width,borderWidth:5,borderColor:"black",justifyContent:'center'}}>
            <Animated.View style={{height:45,width:animated_width,backgroundColor:'blue'}}></Animated.View>
            </View>
            <Animated.Text>Loading...</Animated.Text>
            <Animated.View style={{position:"absolute",right:20,bottom:20,width:50,height:50,borderRadius:25,opacity:fade,justifyContent:"center", alignItems:"center", backgroundColor:"green",}}>
      <MaterialCommunityIcons name="plus" color="white" size={22} onPress={()=>{navigate()}} />
      </Animated.View>
        </View>
    );
}

export default ProgressBar;