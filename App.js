import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CharacterProvider } from './src/context/CharacterContext';
import HomeScreen from './src/screens/HomeScreen';
import CharacterDetailsScreen from './src/screens/CharacterDetailsScreen';
import EditSpellsScreen from './src/screens/EditSpellsScreen';

const Stack = createStackNavigator();

export default function App(){
  return (
    <CharacterProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: "#222831",
          },
          headerTintColor: "#EEEEEE",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="EditCharacter" component={CharacterDetailsScreen} options={{headerTitle: "Edit Character"}} />
          <Stack.Screen name="EditSpells" component={EditSpellsScreen} options={{headerTitle: "Edit Spells"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </CharacterProvider>
  );
};
