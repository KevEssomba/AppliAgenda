import React from "react";
import { Image, StyleSheet, View } from "react-native";

const LogoView = () => {

    return (
        <View style={{maxHeight :100, maxWidth:100}}>
             <Image style={styles.logo}
                resizeMode ='contain' 
                source={require('../views/logo_info_limousin_titre_agenda_2020.png')} />
        </View>
       

    )
  
}

style = StyleSheet.create({
    logo:{

        width:100,
        height:100,
      },   
})

export default LogoView;