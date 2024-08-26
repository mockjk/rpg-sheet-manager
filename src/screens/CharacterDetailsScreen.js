import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { CharacterContext } from "../context/CharacterContext";
import { width } from "../Dimensions/measures";

export default function EditCharacterScreen({ route, navigation }) {
  const { characterId } = route.params;
  const { characters, updateCharacter } = useContext(CharacterContext);

  const character = characters.find(c => c.id === characterId);
  const [name, setName] = useState(character?.name || '');
  const [strength, setStrength] = useState(character?.strength.toString() || '');
  const [agility, setAgility] = useState(character?.agility.toString() || '');
  const [intelligence, setIntelligence] = useState(character?.intelligence.toString() || '');
  const [willing, setWilling] = useState(character?.willing.toString() || '');

  const handleSave = () => {
    const updatedCharacter = {
      ...character,
      name: name,
      strength: parseInt(strength) || 0,
      agility: parseInt(agility) || 0,
      intelligence: parseInt(intelligence) || 0,
      willing: parseInt(willing) || 0,
    };
    updateCharacter(updatedCharacter);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.characterName}>Edit Character</Text>
      
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      
      <Text style={styles.label}>Strength</Text>
      <TextInput
        style={styles.input}
        value={strength}
        keyboardType="numeric"
        onChangeText={setStrength}
      />
      
      <Text style={styles.label}>Agility</Text>
      <TextInput
        style={styles.input}
        value={agility}
        keyboardType="numeric"
        onChangeText={setAgility}
      />
      
      <Text style={styles.label}>Intelligence</Text>
      <TextInput
        style={styles.input}
        value={intelligence}
        keyboardType="numeric"
        onChangeText={setIntelligence}
      />
      
      <Text style={styles.label}>Willing</Text>
      <TextInput
        style={styles.input}
        value={willing}
        keyboardType="numeric"
        onChangeText={setWilling}
      />
      
      <View style={{gap: 15}}>
        <Button
          title="Edit Spells"
          onPress={() => navigation.navigate('EditSpells', { characterId })}
        />

        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  characterName: {
    fontSize: 24,
    marginRight: -width*0.05,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: -width*.05,
    textAlign: 'center',
  },
  characterId: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
    marginLeft: -width*.05,
    textAlign: 'center',
  },
  label: {
    alignSelf: "center",
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
