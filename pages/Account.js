import React from "react";
import { TextInput,TouchableOpacity, StyleSheet, Text, View, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { HStack, VStack } from "../components/styled";


const Account = ({navigation, route}) => {

    return(
        <>
        <View style={{ flex: 1 , backgroundColor : 'white', paddingTop : 30}}>
        

              <VStack>
              <AntDesign name="adduser" size={100} color="red"  style={{alignSelf : 'center'}}/>
              <TextInput style={styles.textinput} placeholder="nom" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="Prenom" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="email" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="Date de naissance jj/mm/aa" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="mot de passe" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="confirmer mot de passe" underlineColorAndroid={'transparent'} inputMode="email" />

              <HStack>
                <Text style={{alignSelf : 'center'}}>J'accepte les condition générale d'utilisation</Text>
              </HStack>

             
                     <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
                            <Text style ={styles.login}>J'envoie</Text> 
                    </TouchableOpacity> 
              



              </VStack>

               
                
       </View>
                        

        </>
    )

}


const styles = StyleSheet.create({

  textinput:{
    alignSelf:'center',
    margin:10,
    padding :5,
    borderWidth:1,
    borderRadius:22,
    borderColor:"red",
    backgroundColor:"white",
    width : 300,
},
  login:{
    alignSelf : 'center',
    textAlign : 'center',
    backgroundColor : 'black',
    borderRadius : 22,
    color:'white',
    fontWeight:'bold',
    width : 300,
    marginTop : 10,
    paddingVertical : 15
    

  },
   
});  


export default  Account ;