import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from "@reach/router";

const Update = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        color: "",
        count: ""
    })
    const[error, setError] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants/${props._id}`)
            .then(res => {
                console.log(res.data);
                setForm(res.data.plant);
            })
    }, [])

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
        axios.put(`http://localhost:8000/api/plants/update/${props._id}`, form)
            .then(res => {
                console.log(res);
                if(res.data.error){
                    console.log(res.data.error)
                    setError(res.data.error);
                }
                else{
                    navigate("/")
                }
            })
    }
    return(
        <div>
            <h1>Update your plant</h1>
            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} form={form} error={error} />
        </div>
    )
}

export default Update;