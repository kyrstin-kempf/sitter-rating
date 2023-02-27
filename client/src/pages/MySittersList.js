import { Link } from 'react-router-dom';

function MySittersList({ user, sitters }) {
    
    // const sitter_name = user.ratings.map((r) => (
    //     <div key={r.id}>
    //         <p>{r.sitter_id}</p>
    //     </div>
    // ))
    // console.log(user.sitters)
    // const sitter = sitters.find(s => JSON.stringify(s.id) === id)

    return (
        <div className="all-sitters-container">
            <h1>My Sitters</h1>
            {sitters.length > 0 ? (
                user.sitters.map((s) => (
                    <div key={s.id} className="sitter-box">
                        <h2>{s.first_name} {s.last_name}</h2>
                        <p>Experience: {s.years_of_experience} years</p>
                        <p>Hourly rate: ${s.hourly_rate}</p>
                        {(
                            s.ratings.map((r) => (
                                <div key={r.id} className="review-container">
                                    <p>{r.rating}</p>
                                    <p>{r.review}</p>
                                    <p>{r.user_id}</p>
                                </div>
                            ))
                        )}
                    </div>
                ))
            ) : (
                <div>
                    <h2>no sitters found</h2>
                </div>
            )}
        </div>
    );
}

export default MySittersList;