
{/* Page de confirmation de création de compte */}

{/* Les imports */}
import React from "react";
import { Button, View,Text,StyleSheet, TouchableOpacity, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { VStack } from "../components/styled";


{/* On récupère les composite de navigation fourni par le système de navigation défini */}
const AccountValidation = ({navigation, route}) =>{

    return (
         <View style={{flex : 1, alignItems : 'center', justifyContent : 'center', backgroundColor : 'white'}}>
            {/* Alignement verticale de tous les éléments à l'intérieur de cette balise */}
            <VStack>
                <View style={{backgroundColor : 'red', padding : 15, borderRadius: 16, alignItems : 'center'}}>

                     {/* Balise de logo check Circle */}
                        <AntDesign name="checkcircle" size={60} color="white" />


                        <Text style ={{ fontWeight : 'bold', color :'white'}}>Compte créé avec succcès</Text>
                        
                        <Pressable  onPress={()=>{navigation.navigate('Home')}}>
                            <Text style={styles.login}>Retour vers l'acceuil</Text>
                        </Pressable>
                    </View> 
                </VStack>
         </View>
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


export default AccountValidation ;