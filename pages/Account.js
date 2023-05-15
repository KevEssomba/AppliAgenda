
{/* Page de création de compte, cette page est incomplète et nécésiste une intéraction avec une base de données afin de créer un compte */}

{/* Les imports */}
import React from "react";
import { TextInput,TouchableOpacity, StyleSheet, Text, View, Pressable} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { HStack, VStack } from "../components/styled";



const Account = ({navigation, route}) => {

    return(
        <>
        <View style={{ flex: 1 , backgroundColor : 'white', paddingTop : 30}}>
        

              <VStack>
                {/* Balise de Icone ajoute d'utilisateur */}
              <AntDesign name="adduser" size={100} color="red"  style={{alignSelf : 'center'}}/>

               {/* Balise de création de zone de champs, nom, préonm, émail, date de naissance, mots de passe, confirmation de création de compte */}

              <TextInput style={styles.textinput} placeholder="nom" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="Prenom" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="email" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="Date de naissance jj/mm/aa" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="mot de passe" underlineColorAndroid={'transparent'} inputMode="email" />

              <TextInput style={styles.textinput} placeholder="confirmer mot de passe" underlineColorAndroid={'transparent'} inputMode="email" />

              <HStack>
                <Text style={{textAlign : 'center', marginLeft : 55, margin : 15}}>J'accepte les condition générale d'utilisation</Text>
              </HStack>

               {/* La balise touchable opacity qui met en surbrillance quand elle est appuyée*/}
             
                     <TouchableOpacity onPress={()=>{navigation.navigate('Retour vers Acceuil')}}>
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