import DayWeatherBox from '../../components/DayWeatherBox';
import Sidebar from '../../components/Sidebar';
import DetailBox from '../../components/DetailBox';

import { DayWeatherBoxProps } from '../../components/DayWeatherBox';

import { getWeather } from '../../services/api';

import weatherFormat from '../../utils/weatherFormat';

import * as S from './styles';
import { useState, useEffect } from 'react';

export type LocationWeather = {
  location: string;
  airPressure: number;
  humidity: number;
  visibility: number;
  weather: string;
  wind: number;
  temp: number;
  wind_direction: number;
  widn_direction_compass: string;
  weather_days: DayWeatherBoxProps[];
};

const Home = () => {
  const [weatherData, setWeatherData] = useState<LocationWeather>();

  useEffect(() => {
    async function getInitialData() {
      const data = await getWeather(37.777119, -122.41964);
      const cleanedData: LocationWeather = weatherFormat(data);
      setWeatherData(cleanedData);
    }

    getInitialData();
  }, []);

  async function handleSearchPlace(lat: number, lng: number) {
    const data = await getWeather(lat, lng);
    const cleanedData: LocationWeather = weatherFormat(data);
    setWeatherData(cleanedData);
  }

  return weatherData ? (
    <S.Wrapper>
      <Sidebar
        day="Today - Fri, 5 Jun"
        location={weatherData?.location}
        weather={weatherData?.weather}
        temperature={weatherData?.temp}
        handleSearchLocation={handleSearchPlace}
      />

      <S.Content>
        <S.WeatherDays>
          {weatherData.weather_days.map((weather) => (
            <DayWeatherBox
              key={weather.day + weather.minTemperature}
              day={weather.day}
              dayWeather={weather.dayWeather}
              maxTemperature={weather.maxTemperature}
              minTemperature={weather.minTemperature}
            />
          ))}
        </S.WeatherDays>

        <h1>Today`s Highlights</h1>

        <S.DayHighlight>
          <DetailBox
            size="large"
            title="Wind status"
            unity="mph"
            direction={weatherData?.wind_direction}
            measure={weatherData.wind}
            wind_compass={weatherData.widn_direction_compass}
            type="wind"
          />

          <DetailBox
            size="large"
            title="Humidity"
            unity="%"
            measure={weatherData.humidity}
            type="humidity"
          />

          <DetailBox
            size="small"
            title="Visibility"
            unity="miles"
            measure={weatherData.visibility}
          />

          <DetailBox
            size="small"
            title="Air pressure"
            unity="mb"
            measure={weatherData.airPressure}
          />
        </S.DayHighlight>
      </S.Content>
    </S.Wrapper>
  ) : (
    <p>Loading</p>
  );
};

export default Home;
