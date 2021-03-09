import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 14rem;
  height: 17.7rem;
  padding: 1.8rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #e7e7eb;
  background-color: #1e213a;
  font-size: 1.6rem;
  border-radius: 1rem;

  > img {
    width: 6rem;
    height: 6.2rem;
  }
`;

export const Temperatures = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
