import React from 'react';

const imgStyle = {
    width: '150px'
}

const cardStyle = {
    display: 'inline-block',
    width: '300px',
    padding: '10px'
}

const Card = (props) => {
    const toggleOwn = () => {
        props.ownThis(props.index)
    }
    return(
        <div style={cardStyle}>
            <img style={imgStyle} src={props.myCard.Img} alt="Pokemon Card" />
            <hr/>
            <h5>{props.myCard.Name}</h5>
            <h6>{props.myCard.Holo ? <em style={{ color: 'rebeccapurple' }}>Holographic</em> : <em>Standard</em>}</h6>
            <small>Collected </small>
            <input type="checkbox" checked={props.myCard.Own} onChange={toggleOwn}/>
            <hr/>
        </div>
    );
}

export default Card;