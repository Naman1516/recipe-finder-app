import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({id, thumbnail, name, description}) => {
    console.log({id, thumbnail, name, description})
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-4" key={id}>
            <figure>
                <img src={thumbnail} alt={name} className='rounded m-4' />
            </figure>
            <div className="card-body">
                <h2 className="card-title mt-1">{name}</h2>
                <p className='truncate ... mt-1'>{description}</p>
                <div className="card-actions justify-end mt-1">
                    <Link to={`/category/${name}`} className="btn btn-primary">Explore</Link>
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;