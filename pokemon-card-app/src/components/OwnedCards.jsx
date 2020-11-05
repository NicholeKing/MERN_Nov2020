import React from 'react';
const imgStyle = {
    width: '150px'
}

const cardStyle = {
    display: 'inline-block',
    width: '300px',
    padding: '10px'
}

const OwnedCards = props => {
    return(
        <>
            <hr/>
            <h1>Owned cards</h1>
            <hr/>
            {
                props.allTheCards.map((item) => {
                    return item.Own ? 
                    <div style={cardStyle}>
                        <img style={imgStyle} src={item.Img} alt="Pokemon Card" />
                        <hr/>
                        <h5>{item.Name}</h5>
                        <h6>{item.Holo ? <em style={{ color: 'rebeccapurple' }}>Holographic</em> : <em>Standard</em>}</h6>
                        <hr/>
                    </div> : ""
                })
            }
        </>
    )
}

export default OwnedCards;