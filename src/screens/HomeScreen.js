import React, { useContext } from 'react';
import { View } from 'react-native';
import { ListItem, Button, Text } from 'react-native-elements';
import { CharacterContext } from '../context/CharacterContext';

export default function CharacterListScreen({ navigation }){
  const { characters, addCharacter } = useContext(CharacterContext);

  const handleAddCharacter = () => {
    const newCharacter = {
      id: Math.random().toString(),
      name: `Character ${characters.length + 1}`,
      strength: 10,
      agility: 10,
      intelligence: 10,
      willing: 10,
      health: 10,
      mana: 10,
      spells: [],
    };
    addCharacter(newCharacter);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#222831', padding: 16 }}>
      <Text h4 style={{ color: '#EEEEEE', marginBottom: 16, textAlign: 'center' }}>
        Character List
      </Text>
      
      {characters.map((character) => (
        <ListItem
          key={character.id}
          containerStyle={{ backgroundColor: '#31363F', borderColor: '#76ABAE', borderWidth: 1, marginVertical: 10 }}
          bottomDivider
          onPress={() => navigation.navigate('EditCharacter', { characterId: character.id })}
        >
          <ListItem.Content>
            <ListItem.Title style={{ color: '#EEEEEE' }}>{character.name}</ListItem.Title>
            <ListItem.Subtitle style={{ color: '#76ABAE' }}>{character.id}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
      
      <Button
        title="Add Character"
        onPress={handleAddCharacter}
        buttonStyle={{ backgroundColor: '#76ABAE', marginTop: 16 }}
      />
    </View>
  );
};