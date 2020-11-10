import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from "@reach/router";

const Update = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        color: ""
    })

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
            .then(res => console.log(res))
            .then(res => navigate("/"))
    }
    return(
        <div>
            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} form={form} />
        </div>
    )
}

export default Update;