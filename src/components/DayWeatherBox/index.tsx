import { useEffect, useState } from 'react';

import formatNumber from '../../utils/formatNumber';
import * as S from './styles';

export type DayWeatherBoxProps = {
  day: string;
  dayWeather: string;
  maxTemperature: number;
  minTemperature: number;
};

const DayWeatherBox = ({
  day,
  dayWeather,
  maxTemperature,
  minTemperature
}: DayWeatherBoxProps) => {
  const [image, setImage] = useState();

  useEffect(() => {
    import(`../../assets/images/${dayWeather}.png`).then((response) => {
      setImage(response.default);
    });
  }, [image, dayWeather]);

  return (
    <S.Wrapper>
      <h3>{day}</h3>
      <img src={image} alt={dayWeather} />
      <S.Temperatures>
        <span>{formatNumber(minTemperature, 0)}°C</span>
        <span>{formatNumber(maxTemperature, 0)}°C</span>
      </S.Temperatures>
    </S.Wrapper>
  );
};

export default DayWeatherBox;
