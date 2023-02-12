import React, { useState } from 'react';

function SignUp({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
  
    return (
      <form className='login-form' onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="first name">First Name:</label>
        <input
          type="text"
          id="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last name">Last Name:</label>
        <input
          type="text"
          id="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="signup email">Email:</label>
        <input
          type="text"
          id="signup email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="signup password">Password:</label>
        <input
          type="password"
          id="signup password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }

export default SignUp;