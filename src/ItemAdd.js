import React, { Component } from 'react';


class item extends Component{
    state={
        name:"",
        price:0,
        stock:1
    }

    addItem=(event)=>{
        this.setState({name:event.target.value})
    }
    addPrice=(event)=>{
        this.setState({price:event.target.value})
    }
    render(){

    
        return(
        <div className="container items">
            <h2>Add item:</h2>
            <input type="text" placeholder="Name of the item" onChange={(event)=>this.addItem(event)} />
            <input type="text" placeholder="Price of the item" onChange={(event)=>this.addPrice(event)}/>
            <button onClick={()=>this.props.adding(this.state)} className="add-btn">Add</button>
        </div>
    )
    }
}

export default item;
