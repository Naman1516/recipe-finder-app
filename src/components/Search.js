import React, { useState } from 'react';

const SearchBar = () => {
    const [showSearch, setShowSearch] = useState(false);

    const handleClick = () => {
        setShowSearch(true);
    };

    const handleBlur = () => {
        setShowSearch(false);
    };

    return (
        <div className='hidden lg:block'>
            {!showSearch ? (
                <button onClick={handleClick} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            ) : (
                <input
                    type="text"
                    onBlur={handleBlur}
                    placeholder="Search..."
                    className="border border-gray-300 rounded px-4 py-2"
                />
            )}
        </div>
    );
};

export default SearchBar;
