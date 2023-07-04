import React, { useState, useEffect } from 'react';
import useRandomMeal from '../customHooks/useRandomMeal';
import MealCard from './MealCard';
import { API_URI } from '../utilities/constants';
import SearchByApi from './SearchByApi';

const Main = () => {
    const [searchText, setSearchText] = useState("");
    const [meal, setMeal] = useState(null);
    const randomMeal = useRandomMeal();

    const searchMeal = async () => {
        try {
            const data = await fetch(API_URI + "/search.php?s=" + searchText);
            const json = await data.json() || [];

            setMeal(json?.meals);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        if (randomMeal) {
            setMeal([randomMeal]);
        }
    }, [randomMeal]);

    return (
        <div className='flex flex-col items-center mt-6'>
            <SearchByApi
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={randomMeal?.strMeal}
                searchMeal={searchMeal}
            />
            <div className='flex flex-wrap justify-evenly'>
                {meal != null ?
                    meal.map((result) =>
                        <MealCard
                            key={result?.idMeal}
                            id={result?.idMeal}
                            thumbnail={result?.strMealThumb}
                            name={result?.strMeal}
                            category={result?.strCategory}
                            area={result?.strArea}
                            drinkAlternative={result?.strDrinkAlternative}
                            isRandom={!meal}
                        />
                    ) : <p className='text-2xl font-semibold m-8'>Recipie not found...</p>
                }
            </div>
        </div>
    );
};

export default Main;
