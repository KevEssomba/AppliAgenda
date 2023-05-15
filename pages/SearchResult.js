import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

// Data
import { useEvents } from "../hooks";

// Components
import { HStack } from "../components/styled";
import { SearchResultView } from "../components/views";
import { useRoute } from "@react-navigation/native";
{/** Page d'affichage de résultat*/}
const SearchResult = ({navigation, route}) => {
    let data;

    const { 
        data: events, 
        error: eventError, 
        isSuccess: eventsLoaded, 
        isLoading: eventsAreLoading 
    } = useEvents();

    {/** On effectue le tri en  fonction du lieu et de la catégorie*/}
    if (events) {
        if (!route.params?.categorie && !route.params?.lieu) {
            data = events;
        } else {
            data = events.filter(event => event.lieu === route.params.lieu);
            data = events.filter(event => event.categorie === route.params.categorie);
        }
    }
    {/** On retourne le résultat de la recherche*/} 
    return (
        <View style={{ flex : 1, backgroundColor : 'white'}}>
            <HStack style={styles.SearchTitleSection}>
                <Text style={styles.result}>Résultats</Text>
                <FontAwesome name="search" size={30} color="red"  style={{margin : 3,marginRight: 30, marginBottom: 17}} />
            </HStack>

            <View style = {styles.searchListHolder}>
                {
                    eventsLoaded && <FlatList 
                        vertical
                        data={data}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => (
                            <Pressable onPress={() => navigation.navigate('Description', item)}>
                                <SearchResultView 
                                    title={item.titre}
                                    date={item.date}
                                    desc={item.desc}
                                />
                            </Pressable>
                        )}
                    />
                }
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
        height : '75%',
        marginTop : 5,
 
    },

    result : {
      fontSize : 30,
      fontWeight : 'bold',
      margin : 10, 
      color: 'red',
    }
});
