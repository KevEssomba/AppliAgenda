import axios from 'axios';
import { useQuery } from 'react-query';

// Constants
import { API_EVENT } from '../utils/constants';

const getCategories = async () => {
    const { data } = await axios.get(API_EVENT, { withCredentials: true });

    const categories = Object.entries(data.liste_evenement).map(value => {
        return value[1].categorie.groupe_nom;
    });

    return categories;
}

export default function useCategories() {
    return useQuery('categories', getCategories);
}