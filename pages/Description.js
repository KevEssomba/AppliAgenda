import React from "react";
import { View, Text, Button, StyleSheet, SafeAreaView, Pressable, Linking } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Je dois ranger toute les icones dans 

// Components
import { HStack, VStack } from "../components/styled";

const Description = ({navigation, route}) => {
    const { titre, desc, date, tel, site }  = route.params;

    return (
      
            <View style={{ backgroundColor: 'white', flex : 1}}>

                    <View style={styles.image}>
                            <Text style ={{ color : 'red'}}></Text>
                    </View>

                     <View style={[styles.locationSection, {borderBottomColor :'#E4DCCF', borderBottomWidth : 1, paddingBottom : 7}]}>
                        <VStack>
                            <HStack>
                                <MaterialIcons name="location-pin" size={24} color="red"  style = {{marginTop : 12, marginLeft : 10,}} />
                                <Text style ={[styles.text, { marginTop : 12, }]}> 9  Rue Élisée Reclus, Limoges</Text>
                            </HStack>
                            <Text style = {styles.simpleText}> {date} </Text>
                        </VStack>
                    </View>
                    

                    <View style={styles.descSection}>
                        <Text style= {{ textAlign : 'center' }}>{desc}</Text>
                    </View>


                 
                    <View style={styles.linkSections} >
                        <Pressable onPress={()=>{Linking.openURL(`tel:${tel}`)}}>
                            <HStack style = {{justifyContent : 'space-between'}}>
                                <Text style ={styles.text}>{tel}</Text>
                                
                                    <Foundation name="telephone" size={24} color="red"  />
                                    
                            </HStack>
                        </Pressable>
                     </View>
                    
                    
           
                     <View style={styles.linkSections} >
                            <Pressable onPress={() => {Linking.openURL(site)}}>
                                <HStack style = {{justifyContent : 'space-between'}}>
                                <Text style ={styles.text}>{ site }</Text>
                                <MaterialCommunityIcons name="web-check" size={24} color='red' />
                                </HStack>
                            </Pressable>
                           
                        
                     </View>
                 
                    

            </View>
 
    );
}

const styles = StyleSheet.create({
    image : {
       height: '25%',
       borderBottomColor : 'silver',
       backgroundColor : 'black',
       borderWidth : 1
    },

    simpleText : {
        marginLeft : 40,
        color : 'black',
        fontSize : 11,
    },

    descSection : {
        height : '50%', 
        justifyContent : 'center',
        padding : 15,
        borderBottomColor :'#E4DCCF', 
        borderBottomWidth : 1, 
        paddingBottom : 7
        
    },

    linkSections : {
        margin : 5,
        padding : 15,
        borderBottomColor :'#E4DCCF', 
        borderBottomWidth : 1, 
        
    },

    text : {
        color : 'black', 
        fontSize : 14, 
        fontWeight : 'bold',
    }

   
});

export default Description;
