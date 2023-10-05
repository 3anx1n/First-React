import { useState } from 'react';


const Chooser = ({ selectedTerm, setSelectedTerm, choices }) => {



  return (
    <div>
    <button className="btn btn-outline-dark" onClick={() => setSelectedTerm(choices[0])}>{choices[0]}</button>
    <button className="btn btn-outline-dark" onClick={() => setSelectedTerm(choices[1])}>{choices[1]}</button>
    <button className="btn btn-outline-dark" onClick={() => setSelectedTerm(choices[2])}>{choices[2]}</button>
    </div>
  );
};

export default Chooser;
