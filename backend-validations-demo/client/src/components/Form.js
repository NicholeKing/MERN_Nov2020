import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <label>Name:</label>
                <input name="name" onChange={props.onChangeHandler} type="text" value={props.form.name}></input>
                {
                    props.error.name ?
                        <span className="alert alert-danger">{props.error.name.message}</span>
                    : ""
                }
                <br />

                <label>Type:</label>
                <input name="type" onChange={props.onChangeHandler} type="text" value={props.form.type}></input><br />

                <label>Color:</label>
                <input name="color" onChange={props.onChangeHandler} type="text" value={props.form.color}></input><br />

                <label>Count:</label>
                <input name="count" onChange={props.onChangeHandler} type="text" value={props.form.count}></input>
                {
                    props.error.count ?
                        <span className="alert alert-danger">{props.error.count.message}</span>
                    : ""
                }
                <br />

                <input type="submit" value="add plant yo!"></input>
            </form>
        </div>
    )
}

export default Form;