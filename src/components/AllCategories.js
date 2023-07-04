import React, { useState } from 'react';
import useAllCategories from '../customHooks/useAllCategories';
import CategoryCard from './CategoryCard';
import SearchInput from './SearchInput';

const Categories = () => {
    const categories = useAllCategories();
    const [filterValue, setFilterValue] = useState('');

    if (categories === null) return null;

    const filteredCategories = categories.filter(category =>
        category.strCategory.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <div className='flex flex-col mt-6'>
            <SearchInput
                value={filterValue}
                onChange={(event) => setFilterValue(event.target.value)}
                placeholder="Search by Category..."
            />

            <div className='flex flex-wrap justify-evenly items-center'>
                {filteredCategories.length ? filteredCategories.map(category => (
                    <CategoryCard
                        key={category.idCategory}
                        id={category.idCategory}
                        name={category.strCategory}
                        thumbnail={category.strCategoryThumb}
                        description={category.strCategoryDescription}
                    />
                )) : <p className='text-2xl font-semibold m-8'>Category not found...</p>}
            </div>
        </div>
    );
}

export default Categories;
