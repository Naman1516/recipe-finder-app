import React from 'react';
import { useParams } from 'react-router-dom';
import useCategoryDetails from '../customHooks/useCategoryDetails';
import { Link } from 'react-router-dom';

const CateogoryDetails = () => {
    const { categoryName } = useParams();
    const details = useCategoryDetails(categoryName);

    if (details === null) return;

    return (
        <div className='flex flex-wrap justify-evenly items-center'>
            {
                details.map((detail) => (
                    <div className="card w-96 bg-base-100 shadow-xl m-4" key={detail?.idMeal}>
                        <figure>
                            <img src={detail?.strMealThumb} alt={detail?.strMeal} className='rounded m-4 h-60 w-full' />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title mt-1">{detail?.strMeal}</h2>
                            <div className="card-actions justify-end mt-1">
                                <Link to={`/category/${categoryName}/${detail?.idMeal}`} className="btn btn-primary">Explore</Link>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default CateogoryDetails;