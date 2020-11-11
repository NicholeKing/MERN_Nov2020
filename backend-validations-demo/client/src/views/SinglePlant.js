import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SinglePlant = (props) => {
    const [plant, setPlant] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants/${props._id}`)
            .then(res => {
                console.log(res.data);
                setPlant(res.data.plant);
        })
    }, [])

    return(
        <div>
            <h1>Here is {plant.name}</h1>
            <p>Type: {plant.type}</p>
            <p>Color: {plant.color}</p>
            <p>Count: {plant.count ? plant.count : "not listed"}</p>
            <a href={`http://localhost:3000/update/${props._id}`}>Update</a>
        </div>
    )
}

export default SinglePlant;