import React, { Component } from 'react';
import './App.css';
import Category from './Category';
import Wish from './wishlist';
import Cart from './cart';
import Login from './login';
import Nav from './nav';
import Home from './home';
import PostList from './postlist';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

class App extends Component {
constructor(props){

super(props)
  this.state = {
    value: "",
    isLoggedin: false,
    cart:[]
 
  };
 this.handleItem=(id) =>{
   console.log("****")
   console.log("the id here is ",id)
   console.log("prev state",this.state.cart)

    this.setState({
      
     cart:[...this.state.cart,id]
    // cart : {id}
   });



  //  this.setState(prevState => ({
  //   cart :this.state.cart.splice(0, 1),
  //   cart: [...prevState.cart, {id}]
    
  // }));


   console.log("new state",this.state.cart)

 }
   
 this.handleChange = e => {
    this.setState({
      value: e.target.value
    });
    console.log("loggedin", this.state.isLoggedin);
  };
  this.handleLogin = () => {
    const { value } = this.state;
    if (value !== "") {
      this.setState({
        isLoggedin: true
      });
    }
    console.log("Value", this.state.value);
    console.log("loggedin", this.state.isLoggedin);
  };
}

  render(){
    
  return (
    
    <Router>
      <div className="App">
      <Route
            path="/"
            render={props => {
              return (
                <Nav
                  {...props}
                  value={this.state.value}
                  isLoggedin={this.state.isLoggedin}
                />
              );
            }}
          />
      <Switch>
      
      <Route path="/cart" render={ props=> {
        return (
          <Cart {...props} cart={this.state.cart}/>
        )
      }


      } />
      <Route path="/categories" 
      
      render = {
        props=> {
          return < Category handleItem={this.handleItem}  />
        }

      }
      
      
      />
      <Route path="/Login" 
          render={props => {
            return (
              <Login
                {...props}
                handleChange={this.handleChange}
                value={this.state.value}
                handleLogin={this.handleLogin}
                isLoggedin={this.state.isLoggedin}
              />
            );
          }}
      />
      <Route path="/wishlist" component={Wish} />
      </Switch>
      </div>
      
    </Router>
  );
}
}

export default App;
