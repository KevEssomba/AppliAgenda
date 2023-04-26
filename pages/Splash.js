import React from "react";
import Lottie from 'lottie-react-native';
import { Text } from "react-native";



const Splash= ()=>{

return (
    <>
        <Text>Agenda</Text>
        <Lottie
            source={require('../assets/Loading-2.json')}
            autoPlay
            loop
        />
        
    
    </>
    
)

}






export default Splash; 