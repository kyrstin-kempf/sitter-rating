import React, { useState } from 'react';
import logo from '../assets/SitterRatingLogo.png';

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }
  
    return (
      <form className='login-form' onSubmit={handleSubmit}>
        <img className='logo' src={logo} alt='SitterRating Logo - a circle with SR'/>
        <h1>Log In</h1>
        <label htmlFor="login email">Email:</label>
        <input
          type="text"
          id="login email"
          name={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="login password">Password:</label>
        <input
          type="password"
          id="login password"
          name={password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
        <div id='login-error'>
          {errors?.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      </form>
    );
  }

export default Login;