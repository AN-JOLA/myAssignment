import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack"
import { Button, StyleSheet, Text, View } from 'react-native';
import Todos from "../screens/Home";

const Stack = createStackNavigator()
 
const AppStack: FC = () => {
    return (

        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'purple',
                         height : 90,},
          headerTitleAlign: 'center',
        }}
        >
                <Stack.Screen name="To-Do Manager" component={Todos} />       
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });


export default AppStack