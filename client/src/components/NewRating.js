import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import oneStar from '../assets/One_Star.png'
import twoStars from '../assets/Two_Stars.png'
import threeStars from '../assets/Three_Stars.png'
import fourStars from '../assets/Four_Stars.png'
import fiveStars from '../assets/Five_Stars.png'
    
function NewRating({ addSitterRating, id, setIsShown }) {
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // const navigate = useNavigate();

    // console.log(user)

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/ratings", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            rating,
            review,
            sitter_id: id,
            }),
        })
            .then((r) => {
                setIsLoading(false);
                if (r.ok) {
                    r.json()
                    .then((data) => {
                        addSitterRating(data)
                        setRating("")
                        setReview("")
                        setIsShown(false)
                    }) 
                    // navigate('/sitters')
                } 
                else {
                    r.json().then((err) => setErrors(err.errors)); 
                }
            });
    }

return (
    <form className='new-rating-form' onSubmit={handleSubmit}>
        <p className="rating-labels">Rating</p>
        <div className="rating-radio-box">
            <div className="rating-box">
            <input 
            type="radio" 
            id="1" 
            name="rating_num"
            checked={rating === '1'} 
            value="1"
            onChange={() => setRating('1')}
            />
            <label htmlFor="1"><img className='rating-stars' src={oneStar} alt='one star'/></label>
            </div>
            <div className="rating-box">
            <input 
            type="radio" 
            id="2" 
            name="rating_num" 
            checked={rating === '2'} 
            value="2"
            onChange={() => setRating('2')}
            />
            <label htmlFor="2"><img className='rating-stars' src={twoStars} alt='two stars'/></label>
            </div>
            <div className="rating-box">
            <input 
            type="radio" 
            id="3" 
            name="rating_num" 
            checked={rating === '3'} 
            value="3"
            onChange={() => setRating('3')}
            />
            <label htmlFor="3"><img className='rating-stars' src={threeStars} alt='three stars'/></label>
            </div>
            <div className="rating-box">
            <input 
            type="radio" 
            id="4" 
            name="rating_num" 
            checked={rating === '4'} 
            value="4"
            onChange={() => setRating('4')}
            />
            <label htmlFor="4"><img className='rating-stars' src={fourStars} alt='four stars'/></label>
            </div>
            <div className="rating-box">
            <input 
            type="radio" 
            id="5" 
            name="rating_num" 
            checked={rating === '5'} 
            value="5"
            onChange={() => setRating('5')}
            />
            <label htmlFor="5"><img className='rating-stars' src={fiveStars} alt='five stars'/></label>
            </div>
        </div>
        <label htmlFor="review" className="rating-labels">Review</label>
        <textarea
        type="text"
        id="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
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
);

}

export default NewRating;