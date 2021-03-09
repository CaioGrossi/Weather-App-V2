import { LocationWeather } from '../pages/Home';
import formatDate from './formatDate';

function weatherMapper(weatherObject: any): LocationWeather {
  const daysWeather = weatherObject.consolidated_weather.slice(1);

  return {
    location: weatherObject.title,
    airPressure: weatherObject.consolidated_weather[0].air_pressure,
    humidity: weatherObject.consolidated_weather[0].humidity,
    visibility: weatherObject.consolidated_weather[0].visibility,
    temp: weatherObject.consolidated_weather[0].the_temp,
    weather: weatherObject.consolidated_weather[0].weather_state_name.replace(
      ' ',
      ''
    ),
    wind: weatherObject.consolidated_weather[0].wind_speed,
    wind_direction: weatherObject.consolidated_weather[0].wind_direction,
    widn_direction_compass:
      weatherObject.consolidated_weather[0].wind_direction_compass,
    weather_days: daysWeather.map((dayWeather: any) => ({
      day: formatDate(dayWeather.applicable_date),
      dayWeather: dayWeather.weather_state_name.replace(' ', ''),
      maxTemperature: dayWeather.max_temp,
      minTemperature: dayWeather.min_temp
    }))
  };
}

export default weatherMapper;
