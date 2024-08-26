import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";
import { CharacterContext } from "../context/CharacterContext";

export default function EditSpellsScreen({ route, navigation }) {
  const { characterId } = route.params;
  const { characters, updateCharacter } = useContext(CharacterContext);

  const character = characters.find((c) => c.id === characterId);
  const [spells, setSpells] = useState(character?.spells || []);

  const handleAddSpell = () => {
    const newSpell = {
      id: Math.random().toString(),
      name: "",
      difficulty: "",
      mana: "",
      description: "",
    };
    setSpells([...spells, newSpell]);
  };

  const handleSave = () => {
    const updatedCharacter = {
      ...character,
      spells: spells,
    };
    updateCharacter(updatedCharacter);
    navigation.goBack();
  };

  const handleChangeSpell = (index, field, value) => {
    const newSpells = [...spells];
    newSpells[index][field] = value;
    setSpells(newSpells);
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.characterName}>{character.name}</Text>

      {spells.map((spell, index) => (
        <View key={spell.id} style={styles.spellContainer}>
          <Text style={styles.label}>Spell Name</Text>
          <TextInput
            style={styles.input}
            value={spell.name}
            onChangeText={(text) => handleChangeSpell(index, "name", text)}
          />

          <Text style={styles.label}>Difficulty</Text>
          <TextInput
            style={styles.input}
            value={spell.difficulty}
            keyboardType="numeric"
            onChangeText={(text) =>
              handleChangeSpell(index, "difficulty", text)
            }
          />

          <Text style={styles.label}>Mana</Text>
          <TextInput
            style={styles.input}
            value={spell.mana}
            keyboardType="numeric"
            onChangeText={(text) => handleChangeSpell(index, "mana", text)}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={spell.description}
            onChangeText={(text) =>
              handleChangeSpell(index, "description", text)
            }
          />
        </View>
      ))}

      <Button title="Add Spell" onPress={handleAddSpell} />
      
      <Button title="Save" onPress={handleSave} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  characterName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  spellContainer: {
    marginBottom: 16,
    padding: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
