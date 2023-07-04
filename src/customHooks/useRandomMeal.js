import { useEffect, useState } from 'react';
import { API_URI } from '../utilities/constants';

const useRandomMeal = () => {
    const [randomMeal, setRandomMeal] = useState(null);

    useEffect(() => {
        getRandomMeal();
    }, []);

    const getRandomMeal = async () => {
        try {
            const data = await fetch(API_URI + "/random.php");
            const json = await data.json();
            console.log(json?.meals[0]);
            setRandomMeal(json?.meals[0]);
        } catch (e) {
            console.error(e);
        }
    };

    return randomMeal;
}

export default useRandomMeal;