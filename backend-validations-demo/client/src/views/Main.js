import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = (props) => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/plants")
            .then(res => setPlants(res.data.plants))
    }, [])

    return(
        <div>
            <h1>Here's all my lovely plants</h1>
            <ul>
                {
                    plants.map(function(plant, i){
                        return <li key={i}><a href={`http://localhost:3000/plants/${plant._id}`}>{plant.name}</a></li>
                    })
                }
            </ul>

            <a href="http://localhost:3000/new" className="btn btn-primary">Add new plant</a>
        </div>
    )
}

export default Main;