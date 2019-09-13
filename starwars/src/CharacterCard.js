import React from 'react';
import styled from "styled-components"

const cardStyle = styled.div `
  width:25vw;
  border:black 1px solid;
  color:white;
  text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  margin: 5vh;

`;

const CharacterCard = (props) => {
  return (

    
      
        <cardStyle className="cards" key={props.index}>
          <h2 className="name">{props.name}</h2>
          <p className="birth">Born: {props.birth_year}</p>
          <p className="hair">Hair Color: {props.hair_color}</p>
        </cardStyle>
      
    
  );
};

export default CharacterCard