import React, { useState, useContext } from 'react';
import { ScrollView, View } from 'react-native';
import { Input, Button, Text, Card } from 'react-native-elements';
import { CharacterContext } from '../context/CharacterContext';

export default function EditSpellsScreen({ route, navigation }) {
  const { characterId } = route.params;
  const { characters, updateCharacter } = useContext(CharacterContext);

  const character = characters.find(c => c.id === characterId);
  const [spells, setSpells] = useState(character?.spells || []);

  const handleAddSpell = () => {
    const newSpell = {
      id: Math.random().toString(),
      name: '',
      difficulty: '',
      mana: '',
      description: '',
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

  const handleDeleteSpell = (index) => {
    const newSpells = spells.filter((_, i) => i !== index);
    setSpells(newSpells);
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#222831' }}>
      <ScrollView>
        <Text h4 style={{ color: '#EEEEEE', textAlign: 'center', marginBottom: 16 }}>
          {character.name}
        </Text>

        {spells.map((spell, index) => (
          <Card key={spell.id} containerStyle={{ backgroundColor: '#31363F', borderColor: '#76ABAE' }}>
            <Input
              label="Spell Name"
              value={spell.name}
              onChangeText={text => handleChangeSpell(index, 'name', text)}
              inputStyle={{ color: '#EEEEEE' }}
              labelStyle={{ color: '#76ABAE' }}
            />

            <Input
              label="Difficulty"
              value={spell.difficulty}
              keyboardType="numeric"
              onChangeText={text => handleChangeSpell(index, 'difficulty', text)}
              inputStyle={{ color: '#EEEEEE' }}
              labelStyle={{ color: '#76ABAE' }}
            />

            <Input
              label="Mana"
              value={spell.mana}
              keyboardType="numeric"
              onChangeText={text => handleChangeSpell(index, 'mana', text)}
              inputStyle={{ color: '#EEEEEE' }}
              labelStyle={{ color: '#76ABAE' }}
            />

            <Input
              label="Description"
              value={spell.description}
              onChangeText={text => handleChangeSpell(index, 'description', text)}
              inputStyle={{ color: '#EEEEEE' }}
              labelStyle={{ color: '#76ABAE' }}
            />

            <Button
              title="Delete Spell"
              onPress={() => handleDeleteSpell(index)}
              buttonStyle={{ backgroundColor: '#d8445d', marginTop: 10, alignSelf: 'center', width: 150 }}
            />
          </Card>
        ))}

        <Button title="Add Spell" onPress={handleAddSpell} buttonStyle={{ backgroundColor: '#76ABAE', marginVertical: 10 }} />
        <Button title="Save" onPress={handleSave} buttonStyle={{ backgroundColor: '#76ABAE' }} />
      </ScrollView>
    </View>
  );
};