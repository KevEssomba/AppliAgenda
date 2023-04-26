import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { VStack } from '../components/styled';
import { windowWidth } from '../utils/constants';
// Components
import CategoryList from '../components/CategoryList';

const Home = ({navigation, route}) => {
  return (
    <>
      <View style={styles.container} >

        <VStack style={styles.headersection}>
          
          <Text>Agenda Dynamique</Text>
          <Pressable onPress={()=>{navigation.navigate('Connexion')}} >
            <Text style={styles.connexionText}>A</Text>
          </Pressable>
          
        </VStack>

        <View>
          <Text style={styles.bodyText}>Autour de vous</Text>
        </View>

        
        <View style = {styles.locationBox}>
          <Text style={{ fontWeight : 'bold', fontSize :18, marginLeft : 5}}> Nouvelle-Acquittaine </Text>
          <Text style={{ fontSize :14, marginLeft : 9}}>Limoges</Text>
        </View>

        
        <Text style={styles.bodyText}>Categorie 1</Text>

        <View>
          <CategoryList navigation={navigation} />
        </View>

     
      </View>

      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },

  headersection: {
    marginTop : 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,

  },
  
  bodyText: {
    marginTop: 15,
    marginBottom: 10,
    fontWeight : 'bold',
    fontSize : 20,
    marginLeft : 10,

  },
  locationBox : {
    margin: 7,
    width : '100%',
    borderStyle : 'solid', 
    borderColor : '#E4DCCF',
    borderWidth : 1,
    margin : 5,
    borderRadius : 5,
    padding : 8,
    width: windowWidth - 10,
   
  },

  connexionText : {
    
    justifyContent : 'center',
    textAlign : 'center',
    padding : 15,
    borderRadius : 15,
    backgroundColor : 'red',
    color: 'white',
    fontWeight : 'bold',
  }

});

export default Home;
