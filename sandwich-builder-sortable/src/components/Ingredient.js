import React from 'react';

const Ingredient = (props) => {
    const style={
        maxWidth: "100%"
    }
    return(
        <div>
            <img style={style} src={props.source} onContextMenu={(e) => props.onClickDelete(e,props.index)}/>
        </div>
    )
}

export default Ingredient;