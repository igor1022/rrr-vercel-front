import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { login, isAuth, logout } from './auth.js';

export default class EssayForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Admin'
    };

    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* handleChange(event) {
     this.setState({value: event.target.value});
   }*/

  async handleSubmit(event) {
    //alert('Форма была отправлена: ' + this.state.value);
    const { handlerLogin } = this.props;
    event.preventDefault();

    const result = await handlerLogin(event.target.user.value, event.target.password.value);
    console.log('login result: ', result);
    if (result) {
      this.props.setLoading(result);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Заполните форму Admin:
        </label>
        <br />
        <br />
        <label>Login</label>
        <br />
        <input name="user" />
        <br />
        <label>Password</label>
        <br />
        <input name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}