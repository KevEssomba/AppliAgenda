import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Components
import LogoView from '../components/views/LogoView';

// Data
import { useCategories, useLocation } from '../hooks';

{/** Page de recherches, cette page permet d'éffectuer une recherche en fonction du lieu et de la catégorie*/}
const Search = ({ navigation }) => {
  const [lieu, setLieu] = useState(null);
  const [isLieuFocus, setIsLieuFocus] = useState(false);

  const [categorie, setCategorie] = useState(null);
  const [isCategorieFocus, setCategorieFocus] = useState(false);
  
  const [event, setEvent] = useState(null);

  {/** On récupère les localisations grace au gestionnaire d'état des lieux*/}
  const {
    data: locations,
    error: locationsError,
    isSuccess: locationsLoaded,
    isLoading: locationsAreLoading
  } = useLocation();

  
  {/** On récupère les catégories grace au gestionnaire d'état des catégories*/}
  const { 
    data: categories,
    error: categoriesError,
    isSuccess: categoriesLoaded,
    isLoading: categoriesAreLoading
  } = useCategories();

  let dataCategorySet, dataLocationSet;

{/** Si la récupération a été éffective, on crée un Set de données (un set permet de stocker des valeurs sans index et de manière unique)*/}
  if (categories) {
      dataCategorySet = [...new Set([...categories])]; // remove duplicates
      dataCategorySet = dataCategorySet.map(categorie => ({ label: categorie, value: categorie }));
  }

  if (locations) {
    dataLocationSet = [...new Set([...locations])];
    dataLocationSet = dataLocationSet.map(location => ({ label: `${location}e Département`, value: location }));
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <View>
          <LogoView />
      </View>  

      <View>
        <Text style={styles.textes}>RECHERCHE</Text>
      </View>

{/** On crée une liste déroulante si les données de localisations ont été chargées*/}
      {locationsLoaded && <Dropdown
          style={[styles.dropdown, isLieuFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}

          data={dataLocationSet}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"

          placeholder={!isLieuFocus ? 'Lieu' : '...'}
          searchPlaceholder="Search..."
          value={lieu}

          onFocus={() => setIsLieuFocus(true)}
          onBlur={() => setIsLieuFocus(false)}
          onChange={item => {
            setLieu(item.value);
            setIsLieuFocus(false);
          }}
        
      />}
    {/** On crée une liste déroulante si les données de catégories ont été chargées*/}
      {categoriesLoaded && <Dropdown
          style={[styles.dropdown, isCategorieFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}

          data={dataCategorySet}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"

          placeholder={!isCategorieFocus ? 'Categorie' : '...'}
          searchPlaceholder="Search..."
          value={categorie}

          onFocus={() => setCategorieFocus(true)}
          onBlur={() => setCategorieFocus(false)}
          onChange={item => {
            setCategorie(item.value);
            setCategorieFocus(false);
          }}
        
      />}

      <View style={styles.container}>   
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Resultat', {lieu, categorie})}>
          <Text style ={styles.btmtext}>Finish</Text> 
        </TouchableOpacity> 
      </View>
    </SafeAreaView>
  );
};

export default  Search;

{/**Page de style */}

const styles = StyleSheet.create({
  container: {
    alignSelf:'stretch',
    width:'100%',  
    flex:1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent:'center',
    alignContent:'center',
  },
  dropdown: {
    margin: 10,  
    height: 50,
    borderColor: 'red',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  logo:{

      width:300,
      height:300,
    },
  textes:{
      fontSize:40,
      margin:20,
      padding:3,
      alignContent:'center',
  },
  button:{
 
      alignItems:'center',
      padding:10,
      marginTop:5,
      backgroundColor:'red',
      borderWidth:1,
      borderRadius:8,
    },
    btmtext:{
      color:'white',
      fontWeight:'bold',
  
    },
});