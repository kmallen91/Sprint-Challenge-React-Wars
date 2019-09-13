import React from 'react';

const CharacterCard = (props) => {
  return (
    
      
        <div className="cards" key={props.index}>
          <h2 className="name">{props.name}</h2>
          <p className="birth">Born: {props.birth_year}</p>
          <p className="hair">Hair Color: {props.hair_color}</p>
        </div>
      
    
  );
};

export default CharacterCard