import React, { useState } from 'react';
import useRandomMeal from '../customHooks/useRandomMeal';
import MealCard from './MealCard';
import { API_URI } from '../utilities/constants';

const Main = () => {
    const [searchText, setSearchText] = useState("");
    const [meal, setMeal] = useState(null);
    const randomMeal = useRandomMeal();

    const searchMeal = async () => {
        try {
            const data = await fetch(API_URI + "/search.php?s=" + searchText);
            const json = await data.json();

            setMeal(json?.meals[0]);
        } catch (e) {
            console.error(e);
        }
    };

    if (randomMeal === null) return;

    const isRandom = !meal;
    const { idMeal: id, strMealThumb: thumbnail, strMeal: name, strCategory: category, strArea: area, strDrinkAlternative: drinkAlternative } = meal || randomMeal;

    return (
        <div className='flex flex-col items-center mt-6'>
            <div className='flex justify-center items-center'>
                <input type="text" placeholder={name} name="taskInput" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="input input-bordered input-primary w-full max-w-xs" />
                <button onClick={searchMeal} className='btn btn-primary ml-5'>Search</button>
            </div>
            <MealCard id={id} thumbnail={thumbnail} name={name} category={category} area={area} drinkAlternative={drinkAlternative} isRandom={isRandom} />
        </div>
    );
};

export default Main;
