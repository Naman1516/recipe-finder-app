import React from 'react';
import useGetRecipie from '../customHooks/useGetRecipie';
import RecipieTabs from '../components/RecipieTabs';
import { useParams } from 'react-router-dom';

const RecipieDetails = () => {
    const { dishId } = useParams()
    const recipieDetails = useGetRecipie(dishId);

    if (recipieDetails === null) return;

    const formatedIngredients = Object.entries(recipieDetails)
        .filter(([key]) => key.startsWith('strIngredient') && recipieDetails[key])
        .reduce((ingredients, [key, value]) => {
            const index = parseInt(key.slice(13), 10);
            const measureKey = `strMeasure${index}`;
            const measure = recipieDetails[measureKey];

            return {
                ...ingredients,
                [value]: measure,
            };
        }, {});

    console.log({ formatedIngredients })

    return (
        <div>
            <div className='mt-8 flex flex-col items-center justify-center p-8 m-8'>
                <img src={recipieDetails?.strMealThumb} alt={recipieDetails?.strMeal} className='rounded-full w-52' />
                <h2 className="text-4xl font-semibold pt-2 text-center">{recipieDetails?.strMeal}</h2>
                <p className='pt-2 text-center'>Category: {recipieDetails?.strCategory} | Area: {recipieDetails?.strArea} {recipieDetails?.strDrinkAlternative ? <>Drink Alternative: {recipieDetails?.strDrinkAlternative}</> : null}</p>
            </div>
            <RecipieTabs ingredients={formatedIngredients} instructions={recipieDetails?.strInstructions} videoUrl={recipieDetails?.strYoutube} />
        </div>
    )
}

export default RecipieDetails;