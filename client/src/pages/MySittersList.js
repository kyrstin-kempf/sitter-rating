import { Link } from 'react-router-dom';

function MySittersList({ user, sitters }) {

    return (
        <div>
            <h1 className='page-title'>My Sitters</h1>
        <div className="all-sitters-container">
            {sitters.length > 0 ? (
                // <OneSitter />
                user.sitters.map((s) => (
                    <div key={s.id} className="sitter-box">
                        <h2>{s.first_name} {s.last_name}</h2>
                        <p>Experience: {s.years_of_experience} years</p>
                        <p>Hourly rate: ${s.hourly_rate}</p>
                        <Link to={`/sitters/${s.id}`} className='review-link'>
                            <p>See all reviews ›</p>
                        </Link>
                    </div>
                ))
            ) : (
                <div>
                    <h2>no sitters found</h2>
                </div>
            )}
        </div>
        </div>
    );
}

export default MySittersList;