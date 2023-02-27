import { useParams} from "react-router-dom";

function OneSitter({ sitters }) {
    const { id } = useParams();

    const sitter = sitters.find(s => JSON.stringify(s.id) === id)

    return (
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
    )
}

export default OneSitter;