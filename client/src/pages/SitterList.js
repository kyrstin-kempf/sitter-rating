import { Link } from 'react-router-dom';
import starRating from '../assets/Five_Stars.png'
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();

function SitterList({ sitters }) {

    function handleAddRating() {
        navigate('/');
    }

    return (
        <div className="all-sitters-container">
            {sitters.length > 0 ? (
                sitters.map((sitter) => (
                    <div key={sitter.id} className="sitter-box">
                        <h2>{sitter.first_name} {sitter.last_name}</h2>
                        <p>Experience: {sitter.years_of_experience} years</p>
                        <p>Hourly rate: ${sitter.hourly_rate}</p>
                        <span>
                        <img className='rating-stars' src={starRating} alt='average rating'/> | <p># ratings</p>
                        </span>
                        <Link to={`/sitters/${sitter.id}`}>
                        <p>See all reviews ›</p>
                        </Link>
                        <button className='add-rating' onClick={handleAddRating}>+ Add Rating</button>
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

export default SitterList;