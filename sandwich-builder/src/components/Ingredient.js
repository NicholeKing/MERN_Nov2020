import React from 'react';

const Ingredient = (props) => {
    const style={
        maxWidth: "200px"
    }
    return(
        <div>
            <img style={style} src={props.source} onClick={() => props.onClickDelete(props.index)}/>
        </div>
    )
}

export default Ingredient;