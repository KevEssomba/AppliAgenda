import React from "react";
import { Pressable, Text } from "react-native";
import { VStack } from "../components/styled";


const Contact= ({navigation, route}) => {
    return (
        <>


         <VStack style={{flex : 1, alignItems : 'center', justifyContent : 'center', backgroundColor : 'white'}}>
            <Pressable onPress={()=>{Linking.openURL('https://www.asso.info-limousin.com/')}}>
                        <Text>A propos de nous</Text>
                </Pressable>

                <Pressable onPress={()=>{Linking.openURL('https://www.asso.info-limousin.com/reseau-de-diffusion/le-reseau')}}>
                        <Text>Gestion des diffusion</Text>
                </Pressable>
                        
                <Pressable onPress={()=>{Linking.openURL('')}}>
                        <Text></Text>
                </Pressable>
            </VStack>
           
        </>
    )

}


styles = StyleSheet.create({
  
    login:{
        alignSelf : 'center',
        textAlign : 'center',
        backgroundColor : 'black',
        borderRadius : 22,
        color:'white',
        fontWeight:'bold',
        width : 150,
        marginTop : 10,
        paddingVertical : 15
      },

})


export default Contact;