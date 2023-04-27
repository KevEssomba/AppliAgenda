import axios from 'axios';
import { useQuery } from 'react-query';

const getCityAndRegion = async (latitude, longitude) => {
  const apiKey = 'YOUR_API_KEY';
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  try {
    const response = await axios.get(url,{ withCredentials: true });
    const addressComponents = response.data.results[0].address_components;
    const city = addressComponents.find(component => component.types.includes('locality')).long_name;
    const region = addressComponents.find(component => component.types.includes('administrative_area_level_1')).long_name;
    
    console.log(city, region);
    return  position = {
       city : city, 
       region : region 
      };
  } catch (error) {
    
  }

 
}

export default function useLocation() {
    return useQuery('position', getCityAndRegion);
}


