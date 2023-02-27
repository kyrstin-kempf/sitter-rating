import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import starRating from '../assets/Five_Stars.png'
// import { Rating } from 'react-simple-star-rating'

function NewRating({ addSitter }) {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [email, setEmail] = useState("");
    const [experience, setExperience] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    const [errors, setErrors] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const navigate = useNavigate();

    // const handleRating = (rate: number) => {
    //     setRating(rate)
    // }

    // const onPointerEnter = () => console.log('Enter')
    // const onPointerLeave = () => console.log('Leave')
    // const onPointerMove = (value: 1, index: 0) => console.log(value, index)


    // function handleSubmit(e) {
    //     e.preventDefault();
    //     setIsLoading(true);
    //     fetch("/sitters", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //         first_name: firstName,
    //         last_name: lastName,
    //         email,
    //         years_of_experience: experience,
    //         hourly_rate: hourlyRate,
    //         }),
    //     })
    //         .then((r) => {
    //         setIsLoading(false);
    //         if (r.ok) {
    //             navigate('/');
    //         } else {
    //             r.json().then((err) => setErrors(err.errors)); 
    //         } 
    //     });
    // }

    // create_table "ratings", force: :cascade do |t|
    // t.float "rating"
    // t.integer "sitter_id"
    // t.integer "user_id"
    // t.datetime "created_at", precision: 6, null: false
    // t.datetime "updated_at", precision: 6, null: false
    // t.text "review"

    return (
        <form className='new-rating-form' >
            <h1>Add New Rating</h1>
            <label htmlFor="rating">Rating</label>
            {/* <Rating
                onClick={handleRating} initialValue={rating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                
            /> */}
            <input
            type="float"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            />
            <label htmlFor="review">Review</label>
            <input
            type="text"
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
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
            <button type="submit">
                submit
                {/* {isLoading ? 'Loading...' : 'Submit'} */}
            </button>
            <span>
                    <img className='rating-stars' src={starRating} alt='average rating'/> | <p># ratings</p>
                    </span>
            <div>
                {errors?.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </div>
        </form>
    );

}

export default NewRating;