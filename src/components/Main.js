import React, { useEffect, useState } from 'react';
import useRandomMeal from '../customHooks/useRandomMeal';
import MealCard from './MealCard';
import { API_URI } from '../utilities/constants';

const Main = () => {
    const [searchText, setSearchText] = useState("");
    const randomMeal = useRandomMeal();

    const handleSearchInput = (e) => {
    };

    const searchMeal = async () => {
    };

    useEffect(() => {
        // Perform any side effects or initializations here
    }, []);

    if (randomMeal === null) return;


    const { idMeal: id, strMealThumb: thumbnail, strMeal: name, strCategory: category, strArea: area, strDrinkAlternative: drinkAlternative } = randomMeal;

    return (
        <div className='flex flex-col items-center mt-6'>
            {/* <div className='flex justify-center items-center'>
                <input type="text" placeholder={name} name="taskInput" value={searchText} onChange={handleSearchInput} className="input input-bordered input-primary w-full max-w-xs" />
                <button onClick={searchMeal} className='btn btn-primary ml-5'>Search</button>
            </div> */}
            <MealCard id={id} thumbnail={thumbnail} name={name} category={category} area={area} drinkAlternative={drinkAlternative} />
        </div>
    );
};

export default Main;
