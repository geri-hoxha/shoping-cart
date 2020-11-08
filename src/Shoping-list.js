import React from 'react';

const shop=(props)=>{
    return(
        <div className='container shop' >
            <div className='left-container'>
                 <p>{props.name}</p>
                 <p>Price: ${props.price}</p>
                 <button onClick={props.remove}>Remove</button>
            </div>
            <div className='right-container'>
                <span onClick={props.add}>+</span>
                 <p>{props.stock}</p>
                 <span onClick={props.subtract}>-</span>
            </div>
        </div>
    )
}

export default shop;