import React, { useState } from 'react';

const Form = (props) => {
    const [form, setForm] = useState({
        title: "",
        genre: "",
        description: "",
        cost: 0
    });

    const onChangePotato = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const titleValid = (titleInput) => {
        if(titleInput.length >= 5)
            return true;
        return false;
    }

    const genreValid = (genreInput) => {
        if(genreInput.length >= 3)
            return true;
        return false;
    }

    const costValid = (costInput) => {
        if(costInput == "")
            return false;
        return !isNaN(costInput);
    }

    const allValid = (formInput) => {
        return titleValid(formInput.title)
            && titleValid(formInput.description)
            && genreValid(formInput.genre)
            && costValid(formInput.cost);
    }

    return(
        <div>
            <h1>What's your video game idea???</h1>

            <form className="col-5 justify-content-center">
                <div className="form-group">
                    <label>Title:</label>
                    <input className="form-control" name="title" onChange={onChangePotato}></input>
                    {!titleValid(form.title) && <p className="alert alert-danger">must be 5 characters!!!!</p>}
                </div>
                <div className="form-group">
                    <label>Genre:</label>
                    <input className="form-control" name="genre" onChange={onChangePotato}></input>
                    {genreValid(form.genre) ? "" : <p className="alert alert-danger">must be 3 characters!!!!</p>}
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input className="form-control" name="description" onChange={onChangePotato}></input>
                    {!titleValid(form.description) && <p className="alert alert-danger">must be 5 characters!!!!</p>}
                </div>
                <div className="form-group">
                    <label>Cost:</label>
                    <input className="form-control" name="cost" onChange={onChangePotato}></input>
                    {!costValid(form.cost) && <p className="alert alert-danger">must be a number</p>}
                </div>

                {allValid(form) ? <input type="submit" className="btn btn-primary"/> : <input type="submit" className="btn btn-danger" disabled/>}
            </form>

            <div>
                <h2>Form State</h2>
                <p>Title: {form.title}</p>
                <p>Genre: {form.genre}</p>
                <p>Description: {form.description}</p>
                <p>Cost: {form.cost}</p>
            </div>
        </div>
    )
}

export default Form;