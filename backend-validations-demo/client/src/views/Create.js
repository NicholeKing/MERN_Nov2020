import React, {useState} from 'react';
import axios from 'axios';
import Form from '../components/Form';
import { navigate } from "@reach/router";

const Create = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        color: "",
        count: ""
    })
    const[error, setError] = useState({});

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
        axios.post("http://localhost:8000/api/plants/new", form)
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
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Create a new plant!</h1>

            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} form={form} error={error} />
        </div>
    )
}

export default Create;