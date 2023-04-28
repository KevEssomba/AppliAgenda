import axios from 'axios';
import { useQuery } from 'react-query';

// Constants
import { API_EVENT } from '../utils/constants';

const getLocation = async () => {
    const { data } = await axios.get(API_EVENT, { withCredentials: true });

    const lieux = Object.entries(data.liste_evenement).map(value => {
        return value[1].lieu[0].dep;
    });

    return lieux;
}

export default function useLocation() {
    return useQuery('lieux', getLocation);
}