import { useEffect, useState } from 'react';
import { API_URI } from '../utilities/constants';

const useRandomMeal = () => {
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        getMeal();
    }, []);

    const getMeal = async () => {
        try {
            const data = await fetch(API_URI + "/search.php?s=Arrabiata");
            const json = await data.json();
            console.log(json?.meals[0]);
            setMeal(json?.meals[0]);
        } catch (e) {
            console.error(e);
        }
    };

    return meal;
}

export default useRandomMeal;