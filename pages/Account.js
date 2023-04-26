import React from "react";
import { TextInput,TouchableOpacity, StyleSheet, Text, View, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { HStack, VStack } from "../components/styled";


const Account = ({navigation, route}) => {

    return(
        <>
        <View style={{ flex: 1 , backgroundColor : 'white'}}>
        

              <VStack>
              <AntDesign name="adduser" size={24} color="black" />
              <TextInput style={styles.textinput} placeholder="nom" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="Prenom" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="email" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="Date de naissance jj/mm/aa" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="mot de passe" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="confirmer mot de passe" underlineColorAndroid={'transparent'} inputMode="email" />

              <HStack>
                <Text>J'accepte les condition générale d'utilisation</Text>
              </HStack>

              <Pressable>
                     <TouchableOpacity style={styles.button}>
                            <Text style ={styles.login}>J'envoie</Text> 
                    </TouchableOpacity> 
                </Pressable>



              </VStack>

               
                
       </View>
                        

        </>
    )

}


const styles = StyleSheet.create({

  textinput:{
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
   
});  


export default  Account ;