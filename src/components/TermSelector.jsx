import { useState } from 'react';


const Chooser = ({ selectedTerm, setSelectedTerm, choices }) => {

  const nextChoice = () => {
    const currentIndex = choices.indexOf(selectedTerm);
    const nextIndex = (currentIndex + 1) % choices.length;
    setSelectedTerm(choices[nextIndex]);
  }

  return (
    <button onClick={nextChoice}>{selectedTerm}</button>
  );
};

export default Chooser;
