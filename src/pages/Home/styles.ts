import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 46rem 1fr;
  grid-template-rows: 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 81rem 1fr;
  }
`;

export const Content = styled.div`
  padding: 12rem 15rem;
  display: flex;
  flex-direction: column;

  > h1 {
    color: #e7e7eb;
    font-size: 2.4rem;
    margin-top: 7.2rem;
    margin-bottom: 3.2rem;
  }
`;

export const WeatherDays = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DayHighlight = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20.4rem 15.9rem;
  justify-items: center;
  grid-row-gap: 4rem;
`;
