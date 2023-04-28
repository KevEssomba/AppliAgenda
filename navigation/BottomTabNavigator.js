import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 

import { Home, Connexion, Description, SearchResult, Account, Search } from '../pages';



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
        
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel : false,
            tabBarActiveTintColor : 'red',
          }}
          >

          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              headerShown: false,
              tabBarIcon : ({color}) =>(
                <FontAwesome name="home" size={30} color={color}/>
              )
          }}/>
        
        <Tab.Screen 
            name="Search" 
            component={Search} 
            options={{
              headerShown: false,
              tabBarIcon: ({color}) => (
                <Ionicons name="search" size={30} color={color} />
              )
          }}/>

        <Tab.Screen 
          name="Resultat" 
          component={SearchResult} 
          options={{
            headerShown: false,
            tabBarIcon : ({color}) =>(
              <EvilIcons name="calendar" size={40} color={color} />
            ),
            defaultOptions: {
              lieu: null,
              categorie: null 
            }
        }}/>
        </Tab.Navigator>
    )

}

export default BottomTabNavigator ;