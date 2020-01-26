
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: "",
  //     password: ""
  //   };
  // }

  // validateForm() {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // }

  // handleSubmit = event => {
  //   event.preventDefault();
  // }

  render() {
    const { value, handleChange, handleLogin, isLoggedin } = this.props;
    if (isLoggedin) {
      
      return <Redirect to="/categories" />;
    }
    return (
      <div>
        <input value={value} type="text" id="input" onChange={handleChange} />
        <button onClick={handleLogin}>login</button>
      </div>
    );
  }
}