import { useEffect, useState } from 'react';
import { API_URI } from '../utilities/constants';

const useAllCategories = () => {
    const [allCategories, setAllCategories] = useState(null);

    useEffect(() => {
        getAllCategories();
    }, []);

    const getAllCategories = async () => {
        try {
            const data = await fetch(API_URI + "/categories.php");
            const json = await data.json();

            setAllCategories(json?.categories);
        } catch (e) {
            console.error(e);
        }
    };

    return allCategories;
}

export default useAllCategories;