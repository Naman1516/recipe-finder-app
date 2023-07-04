import React from 'react';
import useAllCategories from '../customHooks/useAllCategories';
import { Link } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const categories = useAllCategories();

    if (categories === null) return;

    return (
        <div className='flex flex-wrap justify-evenly items-center'>
            {
                categories.map((category) => {
                    const { idCategory: id, strCategory: name, strCategoryThumb: thumbnail, strCategoryDescription: description } = category;

                    return <CategoryCard id={id} name={name} thumbnail={thumbnail} description={description} />
                })
            }
        </div>
    );
}

export default Categories;