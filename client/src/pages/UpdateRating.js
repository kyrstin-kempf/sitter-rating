import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import oneStar from '../assets/One_Star.png'
import twoStars from '../assets/Two_Stars.png'
import threeStars from '../assets/Three_Stars.png'
import fourStars from '../assets/Four_Stars.png'
import fiveStars from '../assets/Five_Stars.png'
    
function UpdateRating({ sitters, updateSitterRating, deleteSitterRating }) {
    const { sitter_id, id } = useParams();
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    
    const currentSitter = sitters.find(s => JSON.stringify(s.id) === sitter_id)
    const currentRating = currentSitter?.ratings.find(r => JSON.stringify(r.id) === id)
    const oldRating = currentRating?.rating ?? 0 
    const oldReview = currentRating?.review ?? ''
    const [rating, setRating] = useState(oldRating);
    const [review, setReview] = useState(oldReview);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(`/ratings/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating,
                review,
            }),
        })
            .then((r) => {
                setIsLoading(false);
                if (r.ok) {
                    r.json()
                    .then((data) => {
                        // console.log(data)
                        updateSitterRating(data)
                    }) 
                    navigate(-1)
                } 
                else {
                    r.json().then((err) => setErrors(err.errors)); 
                }
            });
    }

    function handleDelete() {
        fetch(`/ratings/${id}`, {
            method: "DELETE",
        })
        .then(deleteSitterRating(id, sitter_id))
        navigate(-1)
    }

return (
    <form className='new-rating-form' onSubmit={handleSubmit}>
        <h1 id="update">Update Rating</h1>
        <p className="rating-labels">Rating</p>
        <div className="rating-radio-box">
            <div className="rating-box">
            <input 
            type="radio" 
            id="1" 
            name="rating_num"
            checked={rating === 1} 
            value="1"
            onChange={() => setRating(1)}
            />
            <label htmlFor="1"><img className='rating-stars' src={oneStar} alt='one star'/></label>
            </div>
            <div className="rating-box">
            <input 
            type="radio" 
            id="2" 
            name="rating_num" 
            checked={rating === 2} 
            value="2"
            onChange={() => setRating(2)}
            />
            <label htmlFor="2"><img className='rating-stars' src={twoStars} alt='two stars'/></label>
            </div>
            <div className="rating-box">
            <input 
            type="radio" 
            id="3" 
            name="rating_num" 
            checked={rating === 3} 
            value="3"
            onChange={() => setRating(3)}
            />
            <label htmlFor="3"><img className='rating-stars' src={threeStars} alt='three stars'/></label>
            </div>
            <div className="rating-box">
            <input 
            type="radio" 
            id="4" 
            name="rating_num" 
            checked={rating === 4} 
            value="4"
            onChange={() => setRating(4)}
            />
            <label htmlFor="4"><img className='rating-stars' src={fourStars} alt='four stars'/></label>
            </div>
            <div className="rating-box">
            <input 
            type="radio" 
            id="5" 
            name="rating_num" 
            checked={rating === 5} 
            value="5"
            onChange={() => setRating(5)}
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
        <span id='delete-rating' onClick={() => handleDelete()}>X Delete</span>
        <button type="submit" className="submit-button">
            {isLoading ? 'Loading...' : 'Save'}
        </button>
        <div className='login-error'>
            {errors?.map((err) => (
                <p key={err}>{err}</p>
            ))}
        </div>
    </form>
);

}

export default UpdateRating;