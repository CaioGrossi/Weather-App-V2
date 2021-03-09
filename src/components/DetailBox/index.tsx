import { FaArrowAltCircleUp } from 'react-icons/fa';

import formatNumber from '../../utils/formatNumber';
import * as S from './styles';

export type LargeDetailBoxProps = {
  size: 'small' | 'large';
  type?: 'wind' | 'humidity';
  measure: number;
  unity: string;
  title: string;
  direction?: number;
  wind_compass?: string;
};

const LargeDetailBox = ({
  measure,
  title,
  unity,
  type,
  direction,
  size,
  wind_compass
}: LargeDetailBoxProps) => {
  measure = formatNumber(measure, 0);
  return (
    <S.Wrapper size={size}>
      <h3>{title}</h3>

      <S.Measure>
        {measure} {unity}
      </S.Measure>

      {(type == 'humidity' && (
        <S.PercentageBar>
          <header>
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </header>

          <progress value={measure} max="100" />
        </S.PercentageBar>
      )) ||
        (type == 'wind' && (
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          <S.WindDetail degrees={direction!}>
            <FaArrowAltCircleUp size={25} />
            <span>{wind_compass}</span>
          </S.WindDetail>
        ))}
    </S.Wrapper>
  );
};

export default LargeDetailBox;
