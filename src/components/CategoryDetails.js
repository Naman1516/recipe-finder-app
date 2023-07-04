import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useCategoryDetails from '../customHooks/useCategoryDetails';
import AllMealsCard from './AllMealsCard';
import SearchInput from './SearchInput';

const CategoryDetails = () => {
    const { categoryName } = useParams();
    const data = useCategoryDetails(categoryName);
    const [filterValue, setFilterValue] = useState('');

    if (data === null) return null;

    const filteredData = data.filter(detail =>
        detail.strMeal.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className='flex flex-col mt-6'>
            <SearchInput
                value={filterValue}
                onChange={(event) => setFilterValue(event.target.value)}
                placeholder="Search by Meal..."
            />
            <div className='flex justify-evenly items-center flex-wrap'>
                {filteredData.length ? (
                    filteredData.map((detail) => (
                        <AllMealsCard
                            key={detail?.idMeal}
                            id={detail?.idMeal}
                            thumbnail={detail?.strMealThumb}
                            name={detail?.strMeal}
                            category={categoryName}
                        />
                    ))
                ) : (
                    <p className='text-2xl font-semibold m-8'>Meal not found...</p>
                )}
            </div>
        </div>
    );
}

export default CategoryDetails;
