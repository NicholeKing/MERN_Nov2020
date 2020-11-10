import React, { useEffect } from 'react';
import axios from 'axios';

const ApiFetch = () => {
    // const noMondays = new Promise((resolve, reject) => {
    //     if(new Date().getDay() === 1){
    //         resolve("Oh no, it's Monday");
    //     } else {
    //         reject("Good, it's not Monday");
    //     }
    // })
    // noMondays
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
    
    //Version #1 (basic fetch)
    fetch("https://pokeapi.co/api/v2/pokemon?limit=60&offset=60")
        .then(response => {
            return response.json();
        }).then(response => {
            console.log(response);
        }).catch(err=>{
            console.log(err);
        })

    //Version #2 (intro useEffect)
    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then(response => response.json())
    //         .then(response => console.log(response.results))
    // }, [])

    //Version #3 (Axios)
    // useEffect(() => {
    //     axios.get("https://geek-jokes.sameerkumar.website/api?format=json")
    //         .then(response=>console.log(response))
    // }, [])
    return(
        <>
            <h1>Hello from the Api Component</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png" alt=""/>
        </>
    )
}

export default ApiFetch;