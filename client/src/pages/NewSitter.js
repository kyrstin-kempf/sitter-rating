import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom'

function NewSitter({ addSitter }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    // const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/sitters", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email,
            years_of_experience: experience,
            hourly_rate: hourlyRate,
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                console.log(data)
            });
    }

    return (
        <form className='new-sitter-form' onSubmit={handleSubmit}>
            <h1>Add New Sitter</h1>
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
            <label htmlFor="email">Email:</label>
            <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="years_of_experience">Years of Experience</label>
            <input
            type="text"
            id="years_of_experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            />
            <label htmlFor="hourly_rate">Hourly Rate</label>
            <input
            type="hourly_rate"
            id="hourly_rate"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );

}

export default NewSitter;