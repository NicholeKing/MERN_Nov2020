import React, { useEffect } from 'react';

const ManyPuppies = (props) => {
    var arr = [];
    for(let i = 0; i < props.number; i++){
        arr.push("https://d17fnq9dkz9hgj.cloudfront.net/uploads/2020/04/shelter-dog-cropped-1.jpg")
    }
    return(
        <div>
            {
                isNaN(props.number) ? <p>This page says: {props.number}</p> : <p>This page should have {props.number} puppies</p>
            }
            
            {
                arr.map((item) => {
                    return <img style={{width: '400px'}} src={item} alt="A puppy"/>
                })
            }
        </div>
    )
}

export default ManyPuppies;