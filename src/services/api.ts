import axios from 'axios';

export async function getWeather(lat: number, lng: number) {
  const data = await axios.get('http://localhost:4000/', {
    params: {
      lat: lat,
      lng: lng
    }
  });

  return data.data;
}
