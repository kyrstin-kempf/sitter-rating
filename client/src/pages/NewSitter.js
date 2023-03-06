import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function NewSitter({ addSitter }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
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
            .then((r) => {
                setIsLoading(false);
                if (r.ok) {
                    r.json()
                    .then((data) => {
                        addSitter(data)
                    }) 
                    navigate('/sitters')
                } 
                else {
                    r.json().then((err) => setErrors(err.errors)); 
                }
            })
    }

    return (
        <div>
            <h1 className="page-title">New Sitter</h1>
        <form className='new-sitter-form' onSubmit={handleSubmit}>
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
            <button type="submit" className="submit-button">
                {isLoading ? 'Loading...' : 'Submit'}
            </button>
            <div className='login-error'>
                {errors?.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </div>
        </form>
        </div>
    );

}

export default NewSitter;