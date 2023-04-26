import React, { useState } from 'react';
import { StyleSheet, Text, View,Image ,TouchableOpacity, Modal,setShowModal} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const Search = () => {
  const [lieu, setLieu] = useState(null);
  const [isLieuFocus, setIsLieuFocus] = useState(false);

  const [theme, setTheme] = useState(null);
  const [isThemeFocus, setIsThemeFocus] = useState(false);

  return (
    <View style={styles.container}>
      <View>
          <Text>Logo Agenda Dynamique</Text>
      </View>  

      <View>
        <Text style={styles.textes}>RECHERCHE</Text>
      </View>

      <Dropdown
          style={[styles.dropdown, isLieuFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}

          data={data}
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
        
      />
      <Dropdown
          style={[styles.dropdown, isThemeFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}

          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"

          placeholder={!isThemeFocus ? 'Thème' : '...'}
          searchPlaceholder="Search..."
          value={theme}

          onFocus={() => setIsThemeFocus(true)}
          onBlur={() => setIsThemeFocus(false)}
          onChange={item => {
            setTheme(item.value);
            setIsThemeFocus(false);
          }}
        
      />

      <View style={styles.container}>   
        <TouchableOpacity style={styles.button}>
        <Text style ={styles.btmtext}>Finish</Text> 
        </TouchableOpacity> 
      </View>
    </View>
  );
};

export default  Search;

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
      fontSize:50,
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