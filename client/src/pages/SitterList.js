import { Link } from 'react-router-dom';

function SitterList({ sitters }) {

    return (
        <div className='page-container'>
            <h1 className='page-title'>All Sitters</h1>
        <div className="all-sitters-container">
            {sitters.length > 0 ? (
                sitters.map((sitter) => (
                    <div key={sitter.id} className="sitter-box">
                        <h2>{sitter.first_name} {sitter.last_name}</h2>
                        <p>Experience: {sitter.years_of_experience} years</p>
                        <p>Hourly rate: ${sitter.hourly_rate}</p>
                        <Link to={`/sitters/${sitter.id}`}>
                        <p className='review-link'>See all reviews ›</p>
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

export default SitterList;