import React from "react";

import {
  SafeAreaView,
  StyleSheet,
  Text,

  
}from 'react-native';
//import BasicComponents from "./src/components/BasicComponents";
//import TextInANest from "./src/components/TextComponents";
//import TextInputExample from "./src/components/TextInputComponents";
//import DisplayAnImage from "./src/components/ImageComponents";
//import FlatListExample from "./src/components/FlatListComponents";
//import Prensable from "./src/components/PressableComponents";
//import UseStateComponents from "./src/components/UseState";
//import ListmateriaComponents from "./src/components/Calificaciones";
//import ListalumnosComponents from "./src/components/ListaAlumnos";
import Home from "./android/app/src/react-native-elements/Home";
import { NavigationContainer, NavigationContainerProps } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator ();


const App = () => {

  return(
    //<SafeAreaView style={styles.safeArea}>
      
       {/*<BasicComponents></BasicComponents>
     <TextInANest></TextInANest>
     <TextInputExample></TextInputExample>
     <DisplayAnImage></DisplayAnImage>
     <FlatListExample></FlatListExample>
     <Prensable></Prensable>
     <UseStateComponents></UseStateComponents>
     <ListmateriaComponents></ListmateriaComponents>
      <ListalumnosComponents></ListalumnosComponents>
     */}
    //</SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white', // Asegúrate de que el fondo sea visible
  },
});


export default App;