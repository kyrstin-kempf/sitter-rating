import React, { useState } from "react";
import { useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import NewRating from "../components/NewRating";
import editIcon from '../assets/edit_icon.png'
import oneStar from '../assets/One_Star.png'
import twoStars from '../assets/Two_Stars.png'
import threeStars from '../assets/Three_Stars.png'
import fourStars from '../assets/Four_Stars.png'
import fiveStars from '../assets/Five_Stars.png'

function OneSitter({ sitters, user, addSitterRating }) {
    const { id } = useParams();
    const [isShown, setIsShown] = useState(false);
    
    const sitter = sitters.find(s => JSON.stringify(s.id) === id)

    const handleClick = () => {
        setIsShown(!isShown)
    };

    return (
        <div>
        <div className='one-sitter-box'>
            {sitters.length > 0 ? (
                <div>
                    <h2>{sitter.first_name} {sitter.last_name}</h2>
                    <p>Experience: {sitter.years_of_experience} years</p>
                    <p>Hourly rate: ${sitter.hourly_rate}</p>
                        {(
                            sitter.ratings.map((r) => (
                                <div key={r.id} className="review-container">
                                    {(() => {
                                        switch (r.rating) {
                                            case 5:
                                                return <img className='rating-stars-ind' src={fiveStars} alt='five stars'/>
                                            case 4:
                                                return <img className='rating-stars-ind' src={fourStars} alt='four stars'/>
                                            case 3:
                                                return <img className='rating-stars-ind' src={threeStars} alt='three stars'/>
                                            case 2:
                                                return <img className='rating-stars-ind' src={twoStars} alt='two stars'/>
                                            default:
                                                return <img className='rating-stars-ind' src={oneStar} alt='one star'/>
                                        }
                                    }) ()}
                                    <p>{r.review}</p>
                                    {user.id === r.user_id ? (
                                        <Link to={`/sitters/${sitter.id}/ratings/${r.id}/edit`}>
                                        <span className="edit-container">
                                        <img className='edit-icon' src={editIcon} alt='edit rating'/>
                                        </span>
                                        </Link>
                                    ) : (
                                        <span></span>
                                    )}
                                </div>
                            ))
                        )}
                </div>
            ) : (
                <div>
                    <h2>no ratings found</h2>
                </div>
            )}
        </div>
            <button onClick={handleClick}>+ Add Rating</button>
            { isShown && (
                <NewRating addSitterRating={addSitterRating} id={id} setIsShown={setIsShown} />
            )}
        </div>
    )
}

export default OneSitter;