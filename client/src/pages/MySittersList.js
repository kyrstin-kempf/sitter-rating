// import { Link } from 'react-router-dom';

function MySittersList() {

    return (
        <div className="all-sitters-container">
            <h1>My Sitters</h1>
            {/* {sitters.length > 0 ? (
                sitters.map((sitter) => (
                    <div key={sitter.id} className="sitter-box">
                        <h2>{sitter.first_name} {sitter.last_name}</h2>
                        <p>Experience: {sitter.years_of_experience} years</p>
                        <p>Hourly rate: ${sitter.hourly_rate}</p>
                        <Link to={`/sitters/${sitter.id}`}>
                        <p>See all reviews ›</p>
                        </Link>
                        <Link to={`/ratings/new`}>
                        <p className='add-rating'>+ Add Rating</p>
                        </Link>
                    </div>
                ))
            ) : (
                <div>
                    <h2>no sitters found</h2>
                </div>
            )} */}
        </div>
    );
}

export default MySittersList;