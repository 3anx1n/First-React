import { useState } from 'react';


const Chooser = ({ selectedTerm, setSelectedTerm, choices }) => {
  return (
    <div>
      {choices.map((choice, index) => (
        <button
          key={index}
          data-cy={choice}
          className="btn btn-outline-dark"
          onClick={() => setSelectedTerm(choice)}
        >
          {choice}
        </button>
      ))}
    </div>
  );
};

export default Chooser;

