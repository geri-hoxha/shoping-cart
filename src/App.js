import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Shop from './Shoping-list';


class App extends Component{
  state={
    list:[
      {
        name:'Samsung Galaxy S8',
        price: 400,
        stock: 1
      },
      {
        name:'Google Pixel',
        price: 800,
        stock: 1
      },   {
        name:'Xiaomi Redmi Note 2',
        price: 400,
        stock: 1
      },
      {
        name:'Samsung Galaxy S7',
        price: 300,
        stock:  1
      }
    ],
    total:0,
    empty:false
  }

  componentDidMount() {
    this.total();
  }

  remove=(i)=>{
    const lista = [...this.state.list];
    lista[i].stock=0;
    lista.splice(i,1);
  
    this.setState({list: lista})
    this.total()
  }


  add=(i)=>{
    const lista = [...this.state.list];
    lista[i].stock+=1;
    this.setState({list: lista })
    this.total();
  }
  subtract=(i)=>{
    const lista = [...this.state.list];
    lista[i].stock-=1;
  
    if(lista[i].stock<1){
      lista.splice(i,1);
    
    }
    this.setState({list: lista })
    this.total();
  }
  total=()=>{
    let totali=0;
    this.state.list.map((e)=>{
      totali +=e.price * e.stock;
    })
    this.setState({total:totali})
  }
  clear=()=>{

      this.setState({list: []});
      this.setState({empty: true})
      this.setState({total: 0})

  }
  render(){
    let total=0;
    this.state.list.map((e)=>{
      total +=e.stock;
      return total;
    })


  return (
    <div className="App">
     
      <Navbar num={total} />
      <h1 className="h1-hp">Your bag</h1>
      {this.state.list.map((e,i)=>(
         <Shop
         name={e.name} 
         price={e.price} 
         stock={e.stock}  
         key={i}
         remove={() => this.remove(i)}
         add={()=> this.add(i)}
         subtract={()=>this.subtract(i)}  />
      ))} 
     <hr/>
     
       {!this.state.empty?
       <div>
      <div className="total-num">Total: {this.state.total}</div>
     <div className="clear-btn" onClick={this.clear} >Clear</div>
     </div>
     : <p className="empty-text">is currently empty</p>}
    </div>
  );
  }
}

export default App;
