import React, { useState } from 'react';

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
  
    return (
      <form className='login-form' onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /> */}
        <button type="submit">Login</button>
      </form>
    );
  }

export default Login;