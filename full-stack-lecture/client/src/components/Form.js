import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <label>Name:</label>
                <input name="name" onChange={props.onChangeHandler} type="text" value={props.form.name}></input><br />

                <label>Type:</label>
                <input name="type" onChange={props.onChangeHandler} type="text" value={props.form.type}></input><br />

                <label>Color:</label>
                <input name="color" onChange={props.onChangeHandler} type="text" value={props.form.color}></input><br />

                <input type="submit" value="add plant yo!"></input>
            </form>
        </div>
    )
}

export default Form;