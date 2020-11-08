import React from 'react';

const navbar=(props)=>{
    return (
        <div className="navbar">
            <div className="container">
            <h1>Carts</h1>
        <div className="num-cart"><span>{props.num}</span></div>
        </div>
        </div>
    )
}

export default navbar;