import React from 'react';

const SearchInput = ({ value, onChange, placeholder, searchMeal }) => {
    return (
        <div className='flex justify-center items-center'>
            <input
                type="text"
                placeholder={placeholder}
                name="taskInput"
                value={value}
                onChange={onChange}
                className="input input-bordered input-primary w-full max-w-xs truncate ..."
            />
            <button onClick={searchMeal} className='btn btn-primary ml-5'>Search</button>
        </div>
    );
}

export default SearchInput;
