import React from "react";
import { TextInput,TouchableOpacity, StyleSheet, Text, View ,Image,ImageBackground, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { HStack } from "../components/styled";


const Connexion = ({navigation, route}) =>{

    return (

        <View style={{ flex : 1, alignItems: 'center', backgroundColor: 'white', justifyContent : 'center'}}>
       
          <Feather name="user" size={100} color="red" />

          <View style={styles.hview}>
                        
                            <TextInput style={styles.textimput} placeholder="e-mail" underlineColorAndroid={'transparent'} inputMode="email" />
                </View>
                <View style={styles.hview}> 
                        
                        <TextInput style={styles.textimput} placeholder="mot de passe" underlineColorAndroid={'transparent'} />
         </View>

                <Text style ={styles.header}>Connectez-Vous !</Text>


                <Pressable>
                     <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Home')}}>
                            <Text style ={styles.login}>Login</Text> 
                    </TouchableOpacity> 
                </Pressable>


            <HStack style={{ marginTop : 20}}>
                <Text> Pas de compte ?</Text>
                <Pressable onPress={()=>{navigation.navigate('Compte')}}>
                    <View>
                        <Text style={{textDecorationLine: 'underline', color : 'red', marginLeft : 5}} >Créez votre compte !</Text>
                    </View>
                </Pressable>
                
            </HStack>
            
            
         
        
           
        </View>
    )
}


const styles = StyleSheet.create({
    Connection: {
   
       alignSelf:'center',
          width:'100%',
          alignItems: 'center',
          justifyContent:'center',
    },
    header:{
       
      alignItems:'center',
      color:'black' ,
      padding:12,
      
    },
    textimput:{
        alignSelf:'center',
        justifyContent:'space-around',
        alignItems:'center',
        margin:10,
        padding :10,
        borderWidth:1,
        borderRadius:22,
        borderColor:"red",
        backgroundColor:"white",
        width : 300,
    },
   
    button:{
     
      alignItems:'center',
      padding:10,
      marginTop:5,
      backgroundColor:'black',
      borderWidth:1,
      borderRadius:22,

    },
    login:{
      color:'white',
      fontWeight:'bold',
      paddingHorizontal : 125,
    },

    formHolder : {
        backgroundColor : 'red',
        paddingVertical: 80,
        paddingHorizontal : 70
    }
    
     
  });
  
export default Connexion;