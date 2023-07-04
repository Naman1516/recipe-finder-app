import React from 'react';
import { Link } from 'react-router-dom';

const AllMealsCard = ({ id, thumbnail, name, category }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-4" key={id}>
            <figure>
                <img src={thumbnail} alt={name} height="240px" width="352px" className='rounded m-4 h-60 w-full' />
            </figure>
            <div className="card-body">
                <h2 className="card-title mt-1">{name}</h2>
                <div className="card-actions justify-end mt-1">
                    <Link to={`/category/${category}/${id}`} className="btn btn-primary">Explore</Link>
                </div>
            </div>
        </div>
    );
}

export default AllMealsCard;