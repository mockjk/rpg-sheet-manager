import React, { createContext, useState } from 'react';


export const CharacterContext = createContext();


export const CharacterProvider = ({ children }) => {

  const [characters, setCharacters] = useState([]);


  const addCharacter = (newCharacter) => {
    setCharacters([...characters, newCharacter]);
  };


  const removeCharacter = (id) => {
    setCharacters(characters.filter(character => character.id !== id));
  };


  const updateCharacter = (updatedCharacter) => {
    setCharacters(characters.map(character => 
      character.id === updatedCharacter.id ? updatedCharacter : character
    ));
  };

  return (
    <CharacterContext.Provider value={{ characters, addCharacter, removeCharacter, updateCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};