import React, { useEffect } from 'react';

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
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=60&offset=60")
    //     .then(response => {
    //         return response.json();
    //     }).then(response => {
    //         console.log(response);
    //     }).catch(err=>{
    //         console.log(err);
    //     })

    //Version #2 (intro useEffect)
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(response => console.log(response.results))
    }, [])
    return(
        <>
            <h1>Hello from the Api Component</h1>
        </>
    )
}

export default ApiFetch;