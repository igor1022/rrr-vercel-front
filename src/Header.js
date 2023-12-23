import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/Header.css';
import { isAuth as realyIsAuth, login, logout } from './auth';

function Header(props) {
  let set_logout = {props}.props.setLoading;
  let setIsAuth = {props}.props.setIsAuth;
  const handler = async() => {
    const result1 = logout();
    set_logout(result1.data);
    setIsAuth(result1.data);
  }
    return (
        <div className="Header">
          <h1>SFPOPOS</h1>
                <div className="Header-Subtitle">San Franciscos Privately Owned Public Spaces</div>
                <div className='Log'>
                    <button type="button" onClick={handler}>
                      Logout
                    </button>
                </div>    
        </div>
      )
}

export default Header