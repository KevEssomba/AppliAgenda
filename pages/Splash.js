import React from "react";
import Lottie from 'lottie-react-native';
import { Text } from "react-native";

 {/** Page de chargement*/}

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