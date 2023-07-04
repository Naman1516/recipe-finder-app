import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ id, thumbnail, name, category, area, drinkAlternative, isRandom }) => {
    return (
        <div className='mt-8 flex flex-col items-center justify-center rounded border border-solid border-primary p-8 m-8'>
            <img src={thumbnail} alt={name} className='rounded-full w-52' height="208px" width="208px" />
            <Link to={"/category/" + category + "/" + id} className="text-4xl font-semibold pt-2 text-center hover:text-primary cursor-pointer">
                {isRandom ? (`Have you tried '${name}' ?`) : name}
            </Link>
            <p className='pt-2 text-center'>Category: {category} | Area: {area} {drinkAlternative ? <>Drink Alternative: {drinkAlternative}</> : null}</p>
        </div >
    );
}

export default MealCard;