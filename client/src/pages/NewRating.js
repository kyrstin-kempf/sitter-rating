import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import oneStar from '../assets/One_Star.png'
import twoStars from '../assets/Two_Stars.png'
import threeStars from '../assets/Three_Stars.png'
import fourStars from '../assets/Four_Stars.png'
import fiveStars from '../assets/Five_Stars.png'

function NewRating({ addSitter }) {
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const navigate = useNavigate();


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
            <p className="rating-labels">Rating</p>
            <div className="rating-radio-box">
                <div className="rating-box">
                <input 
                type="radio" 
                id="1" 
                name="rating_num"
                checked={rating === '1'} 
                value="1"
                onClick={() => setGender('1')}
                />
                <label htmlFor="1"><img className='rating-stars' src={oneStar} alt='one star'/></label>
                </div>
                <div className="rating-box">
                <input 
                type="radio" 
                id="2" 
                name="rating_num" 
                value="2"
                />
                <label htmlFor="2"><img className='rating-stars' src={twoStars} alt='two stars'/></label>
                </div>
                <div className="rating-box">
                <input 
                type="radio" 
                id="3" 
                name="rating_num" 
                value="3"
                />
                <label htmlFor="3"><img className='rating-stars' src={threeStars} alt='three stars'/></label>
                </div>
                <div className="rating-box">
                <input 
                type="radio" 
                id="4" 
                name="rating_num" 
                value="4"
                />
                <label htmlFor="4"><img className='rating-stars' src={fourStars} alt='four stars'/></label>
                </div>
                <div className="rating-box">
                <input 
                type="radio" 
                id="5" 
                name="rating_num" 
                value="5"
                />
                <label htmlFor="5"><img className='rating-stars' src={fiveStars} alt='five stars'/></label>
                </div>
            </div>
            
            {/* <input
            type="float"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            /> */}
            <label htmlFor="review" className="rating-labels">Review</label>
            <textarea
            type="text"
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            />
            <button type="submit">
                submit
                {/* {isLoading ? 'Loading...' : 'Submit'} */}
            </button>
            {/* <span>
                    <img className='rating-stars' src={starRating} alt='average rating'/> | <p># ratings</p>
                    </span> */}
            <div>
                {errors?.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </div>
        </form>
    );

}

export default NewRating;