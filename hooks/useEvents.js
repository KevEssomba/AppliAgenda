import axios from 'axios';
import { useQuery } from 'react-query';

// Constants
import { API_EVENT } from '../utils/constants';
 {/** On récupère les informations sur les évènements à partir de l'api*/}
const getEvents = async () => {
    const { data } = await axios.get(API_EVENT, { withCredentials: true });

    const events = Object.entries(data.liste_evenement).map(value => {
        return {
            titre: value[1].titre,
            desc: value[1].desc,
            date: value[1].date_format_fr,
            site: value[1].contact.site,
            tel: value[1].contact.tel,
            categorie: value[1].categorie.groupe_nom,
            lieu: value[1].lieu[0].dep
        };
    });

    return events;
}

export default function useEvents() {
    return useQuery('events', getEvents);
}