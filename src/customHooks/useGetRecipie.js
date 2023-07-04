import { useEffect, useState } from 'react';
import { API_URI } from '../utilities/constants';

const useGetRecipie = (recipieId) => {
    const [recipieDetails, setRecipieDetails] = useState(null);

    useEffect(() => {
        getRecipieDetails();
    }, []);

    const getRecipieDetails = async () => {
        try {
            const data = await fetch(API_URI + "/lookup.php?i=" + recipieId);
            const json = await data.json();

            setRecipieDetails(json?.meals[0]);
        } catch (e) {
            console.error(e);
        }
    };

    return recipieDetails;
}

export default useGetRecipie;