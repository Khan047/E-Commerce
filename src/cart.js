import React from 'react';
import './App.css';
import Card from './cardUI';
import Post from './data/products.json'

function Cart(props) {
  // const {cart} = this.props;
  const temp = Post - props.cart;
  console.log("wanted",temp)
//   if(props.cart="undefined"||props.cart==[]){
//     return(<p>cart is empty</p>)
//   }
//  else
  return (
    <div className="App">
     {console.log("hi",temp)
     
     }
      {
      // if(props.cart=='undefined'){
      //   return 
      // }
    
      props.cart.map((postdetail,index)=>{
                return <p >
                  

                    <div className="container-fluid d-flex justify-content-center" style={{ paddingTop: "100px" }}>
                        <div className="row">
                         {props.cart[postdetail]}
                         {props.cart[index]}
                       Item Name:  {Post[postdetail].name}     PRICE:{Post[postdetail].price}  
                         <br></br>
                         {console.log(Post[index].id)}
                         {console.log(Post[postdetail].id)}
                        {/* <Card imgsrc={Post[index].url} title={Post[index].name}/> */}
                        </div>
                    </div>
                
                
                </p>
            })}
            AEFjadkasjdas;kd
    </div>
  );
}

export default Cart;