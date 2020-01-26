import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Drop from './dropdown'
function Nav(props) {
    const tstyle= {
        color:"white",
        textDecoration:"none",
        justifyContent:"center"
        
    };
    return (
        <nav>
            {/* {console.log(this.state.isLoggedin)} */}

            <h1>LOGO GOES HERE</h1>
            <ul className="nav-links">
                <Link to="/categories" style={tstyle}><li><Drop/></li></Link>
                <Link to="/cart" style={tstyle}><li>Cart</li></Link>
                <Link to="/wishlist" style={tstyle}><li>Wishlist</li></Link>
                <Link to="/Login" style={tstyle}><li>  {!props.isLoggedin ? <button>Signin</button> : <button>Signout</button>}</li></Link>
            </ul>

        </nav>
    );
}

export default Nav;