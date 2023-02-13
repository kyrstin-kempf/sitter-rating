import React, { useEffect, useState } from "react";

function SitterList() {
    const [sitters, setSitters] = useState([]);

    useEffect(() => {
        fetch('/sitters')
        .then((r) => r.json())
        .then(setSitters);
        // .then((s) => console.log(s));
    }, []);

    return(
        <div className="all-sitters-container">
            {sitters.length > 0 ? (
                sitters.map((sitter) => (
                    <div key={sitter.id} className="sitter-box">
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