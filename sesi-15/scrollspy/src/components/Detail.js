import React from 'react'
import {
    useParams
} from "react-router-dom";

function Pagelist() {
    let { detail } = useParams();
    const split = detail.split("-");
    return (
        <div className="p-4 mb-3 bg-light rounded-3 border mt-3">
            <h3 className="fw-bold text-capitalize">{`${split[0]} ${split[1]}`}</h3>
            <p className="col-md-12 fs-5 text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut magnam tempore blanditiis vitae dolor dolorum quisquam placeat? Cumque iusto consequatur voluptatibus delectus eius nostrum. Et natus voluptatem alias ratione.</p>
        </div>
    )
}

export default Pagelist