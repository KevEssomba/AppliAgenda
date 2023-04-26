import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
// Components
import { HStack, VStack } from "../components/styled";
import SearchResultList from "../components/SeachResultList";

const SearchResult = ({navigation, route}) => {

    return (
        <View style={{ flex : 1, backgroundColor : 'black'}}>

                <HStack style={styles.SearchTitleSection}>
                    <Text style={styles.result}>Résultats</Text>
                    <FontAwesome name="search" size={30} color="red"  style={{margin : 3,}} />
                </HStack>

                <View style = {styles.searchListHolder}>
                    <SearchResultList navigation={navigation}/>
                </View>

        </View>
    );
}

export default SearchResult;

const styles = StyleSheet.create({

    SearchTitleSection :{
      height : '25%',
      width : '100%',
      borderBottomEndRadius : 32,
      borderBottomStartRadius : 32,
      justifyContent : 'space-between',
      alignItems : 'flex-end',
      margin : 5,

    },

    searchListHolder : {
        backgroundColor : '#F6F5F5',
        height : '75%'
 
    },

    result : {
      fontSize : 30,
      fontWeight : 'bold',
      margin : 10, 
      color: 'red',
    }
});