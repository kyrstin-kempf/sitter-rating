import React, { useState } from "react";
import { useParams} from "react-router-dom";
// import { Link } from 'react-router-dom';
import NewRating from "./NewRating";

function OneSitter({ sitters, user, addSitterRating }) {
    const { id } = useParams();
    const [isShown, setIsShown] = useState(false);
    
    const sitter = sitters.find(s => JSON.stringify(s.id) === id)
    // console.log(sitter)

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
                                    <p>{r.rating}</p>
                                    <p>{r.review}</p>
                                    <p>{r.user_id}</p>
                                </div>
                            ))
                        )}
                    {/* <Link to={`/ratings/new`}>
                        <p className='add-rating'>+ Add Rating</p>
                    </Link> */}
                </div>
            ) : (
                <div>
                    <h2>no ratings found</h2>
                </div>
            )}
        </div>
            <button onClick={handleClick}>+ Add Rating</button>
            { isShown && (
                <NewRating addSitterRating={addSitterRating} id={id} user={user} />
            )}
        </div>
    )
}

export default OneSitter;