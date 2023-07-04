import React from 'react';

const SearchInput = ({ value, onChange, placeholder }) => {
    return (
        <div className='flex justify-center items-center'>
            <input
                type="text"
                name="taskInput"
                className="input input-bordered input-primary w-full max-w-xs"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default SearchInput;
