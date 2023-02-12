import React, { useEffect, useState } from "react";

function SitterList() {
    const [sitters, setSitters] = useState([]);

    useEffect(() => {
        fetch('/sitters')
        .then((r) => r.json())
        .then(setSitters);
    }, []);

    return(
        <div>
            <h1>Sitter list</h1>
        </div>
    );
}

export default SitterList;