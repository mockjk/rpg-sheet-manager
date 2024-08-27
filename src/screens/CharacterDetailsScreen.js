import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { CharacterContext } from "../context/CharacterContext";
import { Slider } from "react-native-elements";

export default function EditCharacterScreen({ route, navigation }) {
  const { characterId } = route.params;
  const { characters, updateCharacter, deleteCharacter } =
    useContext(CharacterContext);

  const character = characters.find((c) => c.id === characterId);
  const [name, setName] = useState(character?.name || "");
  const [strength, setStrength] = useState(
    character?.strength.toString() || ""
  );
  const [agility, setAgility] = useState(character?.agility.toString() || "");
  const [intelligence, setIntelligence] = useState(
    character?.intelligence.toString() || ""
  );
  const [willing, setWilling] = useState(character?.willing.toString() || "");
  const [health, setHealth] = useState(character?.health || 100); // Default health value
  const [mana, setMana] = useState(character?.mana || 100); // Default mana value

  const handleSave = () => {
    const updatedCharacter = {
      ...character,
      name: name,
      strength: parseInt(strength) || 0,
      agility: parseInt(agility) || 0,
      intelligence: parseInt(intelligence) || 0,
      willing: parseInt(willing) || 0,
      health: health,
      mana: mana,
    };
    updateCharacter(updatedCharacter);
    navigation.goBack();
  };

  const handleDelete = () => {
    deleteCharacter(characterId);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#222831" }}>
      <Input
        label="Name"
        value={name}
        onChangeText={setName}
        inputStyle={{ color: "#EEEEEE" }}
        labelStyle={{ color: "#76ABAE" }}
      />
      <Input
        label="Strength"
        value={strength}
        keyboardType="numeric"
        onChangeText={setStrength}
        inputStyle={{ color: "#EEEEEE" }}
        labelStyle={{ color: "#76ABAE" }}
      />
      <Input
        label="Agility"
        value={agility}
        keyboardType="numeric"
        onChangeText={setAgility}
        inputStyle={{ color: "#EEEEEE" }}
        labelStyle={{ color: "#76ABAE" }}
      />
      <Input
        label="Intelligence"
        value={intelligence}
        keyboardType="numeric"
        onChangeText={setIntelligence}
        inputStyle={{ color: "#EEEEEE" }}
        labelStyle={{ color: "#76ABAE" }}
      />
      <Input
        label="Willing"
        value={willing}
        keyboardType="numeric"
        onChangeText={setWilling}
        inputStyle={{ color: "#EEEEEE" }}
        labelStyle={{ color: "#76ABAE" }}
      />

      {/* Health Bar */}
      <Text style={{ color: "#76ABAE", marginBottom: 10 }}>Health</Text>
      <Slider
        value={health}
        onValueChange={(value) => setHealth(Math.round(value))}
        maximumValue={100}
        minimumValue={0}
        thumbTintColor="#d32f2f"
        minimumTrackTintColor="#d32f2f"
        maximumTrackTintColor="#EEEEEE"
      />
      <Text style={{ color: "#EEEEEE", marginBottom: 20 }}>
        Current Health: {health}
      </Text>

      <Slider
        value={mana}
        onValueChange={(value) => setMana(Math.round(value))}
        maximumValue={100}
        minimumValue={0}
        thumbTintColor="#304ffe"
        minimumTrackTintColor="#304ffe"
        maximumTrackTintColor="#EEEEEE"
      />
      <Text style={{ color: "#EEEEEE", marginBottom: 20 }}>
        Current Mana: {mana}
      </Text>

      <Button
        title="Edit Spells"
        onPress={() => navigation.navigate("EditSpells", { characterId })}
        buttonStyle={{ backgroundColor: "#76ABAE", marginBottom: 10 }}
      />
      <Button
        title="Delete Character"
        onPress={handleDelete}
        buttonStyle={{ backgroundColor: "#d8445d", marginBottom: 10 }}
      />
      <Button
        title="Save"
        onPress={handleSave}
        buttonStyle={{ backgroundColor: "#76ABAE" }}
      />
    </View>
  );
}
