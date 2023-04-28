import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


const EventView = ({ titre, dateDebut, dateFin, image }) => {
  
 return (
        <View style={styles.category}>
            <View style={styles.titleBox}>
            <Text style={styles.titleText}>"{titre}"</Text>
            </View>
            <View style={styles.dateBox}>
                <Text style={styles.dateText}> {dateDebut }</Text>
            </View>
        </View>
 )
 };

export default EventView;

const styles = StyleSheet.create({
    category : {
        margin: 20,
        backgroundColor : 'red',
        borderRadius : 15,
        width : 215,
        height: 150,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 15,

        elevation: 11,
      

    },

   titleText: {
        color : 'white',
        fontWeight : 'bold',
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 14
    },

    dateText : {
        paddingTop: 5,
        color : 'white',
        fontWeight : 'bold',
        textAlign : 'center',
        fontSize : 14
        
    },

    titleBox : {
        height : 75,
        justifyContent : 'center',
        backgroundColor : 'black',
        width : 215,
        height: 75,
        borderTopEndRadius : 15,
        borderTopStartRadius : 15,
        

    },

    dateBox : {
        width : 215,
        height: 75,
        borderBottomRadius : 15,
        borderBottomStartRadius : 15,
        height : 75,
        width : 'auto',
        justifyContent : 'center',

    }

    


});
