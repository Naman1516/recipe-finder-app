import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ id, thumbnail, name, category, area, drinkAlternative }) => {
    return (
        <div className='mt-8 flex flex-col items-center justify-center rounded border border-solid border-primary p-8 m-8'>
            <img src={thumbnail} alt={name} className='rounded-full w-52' />
            <Link to={"/category/" + category + "/" + id} className="text-4xl font-semibold pt-2 text-center hover:text-primary cursor-pointer">Have you tried '{name}' ?</Link>
            <p className='pt-2 text-center'>Category: {category} | Area: {area} {drinkAlternative ? <>Drink Alternative: {drinkAlternative}</> : null}</p>
        </div>
    );
}

export default MealCard;