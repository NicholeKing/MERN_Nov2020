import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Random = props => {
    const [oneCreature, setOneCreature] = useState();
    useEffect(() => {
        axios.get("http://localhost:8000/api/creatures")
            .then(res => {
                let rand = Math.floor(Math.random()*res.data.creatures.length);
                setOneCreature(res.data.creatures[rand])
            })
    }, [])
    return(
        <div>
            {
                oneCreature ?
                <>
                <h1>Meet {oneCreature.name}</h1>
                <h3>Species: {oneCreature.species}</h3>
                <h3>Role: {oneCreature.role}</h3>
                <h3>Special Ability: {oneCreature.specialAbility}</h3>
                <h3>Age: {oneCreature.age}</h3>
                <h3>Catch Phrase: {oneCreature.catchPhrase}</h3>
                </> : ""
            }
        </div>
    )
}

export default Random;