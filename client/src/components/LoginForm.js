import React, { useState } from 'react';
import logo from '../assets/SitterRatingLogo.png';

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
  
    return (
      <form className='login-form' onSubmit={handleSubmit}>
        <img className='logo' src={logo} alt='SitterRating Logo - a circle with SR'/>
        <h1>Log In</h1>
        <label htmlFor="login email">Email:</label>
        <input
          type="text"
          id="login email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="login password">Password:</label>
        <input
          type="password"
          id="login password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

export default Login;