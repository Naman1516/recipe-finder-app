import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ id, thumbnail, name, category, area, drinkAlternative, isRandom }) => {
    return (
        <div className="card bg-base-100 shadow-xl m-8 h-96 w-96">
            <figure>
                <img src={thumbnail} alt={name} height="208px" width="208px" className='rounded w-full' />
            </figure>
            <div className="card-body">
                <Link to={"/category/" + category + "/" + id} className="text-4xl font-semibold pt-2 text-center hover:text-primary cursor-pointer">
                    {isRandom ? (`Have you tried '${name}' ?`) : name}
                </Link>
                <p className='pt-2 text-center'>Category: {category} | Area: {area} {drinkAlternative ? <>Drink Alternative: {drinkAlternative}</> : null}</p>

            </div>
        </div>
    );
}

export default MealCard;