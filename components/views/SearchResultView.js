import react from "react";
import { HStack, VStack } from "../styled";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


const SearchResultView = ({title, date,desc}) =>{

    return (

        <>
        
            <View style = {styles.searchItemContainer} >
                <VStack>
                    <HStack style ={styles.titleDateContainer}>
                        <HStack>

                             <MaterialIcons name="event" size={24} color="red" />
                             <Text style={styles.titleText} > {title} </Text>
                        </HStack>

                         <Text style={styles.dateText} > {date} </Text>
                    </HStack>
                    
                <Text style={styles.descText} > {desc.slice(0,35)}... </Text>
                </VStack>
               
            </View>
    
        
        </>

    );

}

export default SearchResultView;

const styles = StyleSheet.create({

    searchItemContainer : {
        backgroundColor : 'white',
        padding : 10,
        margin : 5,
        borderColor : 'silver',
        burderradius : 16,
        borderBottomColor : '#E4DCCF',
        borderTopColor : '#E4DCCF',
        width : '100%'
    },

    titleDateContainer : {
        justifyContent : 'space-between',
       
        
    },

    titleText : {
        fontWeight:'bold',
        
    },

    dateText : {
        fontWeight:'bold',
        color : 'red'
    },

    descText: {

    }
    
})