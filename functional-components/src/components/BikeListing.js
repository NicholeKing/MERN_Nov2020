import React, { useState } from 'react';

const BikeListing = (props) => {
    const [purchases, setPurchases] = useState(0);
    const {make,name,model,style} = props;

    const potatoFun = () => {
        // if(purchases < 10)
        //     setPurchases(purchases + 1);
        purchases = purchases + 1;
    }

    return(
        <div className="card container col-4 mt-1">
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h5 className="card-title">Make: {make}</h5>
                <h5 className="card-title">Model: {model}</h5>
                <h5 className="card-title">Style: {style}</h5>

                <h6 className="card-title">Sold: {purchases}</h6>

                <button className="btn btn-success" onClick={potatoFun}>Buy Me!!!!</button>
            </div>
        </div>
    )
}

export default BikeListing;