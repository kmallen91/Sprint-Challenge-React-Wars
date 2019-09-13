import React, { useState, useEffect } from "react"
import axios from "axios"
import CharacterCard from "./CharacterCard"




export default function Character() {

    const [person, setCharacter] = useState([])

   useEffect (()=> {
    axios
    .get("https://swapi.co/api/people/")
    .then (response =>{
        const people = response.data.results
        console.log("people", people)
        setCharacter(people)
    })
    .catch(error =>{
        console.log("error", error);
        return "ERROR";
        
    })
}, []);

    return (
        <div className="card-container">
                {person.map((item, index) => {
                    return <CharacterCard key={index} name={item.name} birth_year={item.birth_year} hair_color={item.hair_color} />;
                })}
            </div>
    )
}
