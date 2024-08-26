import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { CharacterContext } from "../context/CharacterContext";

export default function HomeScreen({ navigation }) {
  const { characters, addCharacter } = useContext(CharacterContext);

  const handleAddCharacter = () => {
    const newCharacter = {
      id: Math.random().toString(),
      name: `Character ${characters.length + 1}`,
      strength: 10,
      agility: 10,
      intelligence: 10,
      willing: 10,
    };
    addCharacter(newCharacter);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Character" onPress={handleAddCharacter} />
      <FlatList
        data={characters}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.characterItem}>
            <Text style={styles.characterName}>{item.name}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('CharacterDetails', { characterId: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  characterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    marginBottom: 8,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  characterName: {
    fontSize: 18,
  },
});