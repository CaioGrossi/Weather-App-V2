import styled, { css } from 'styled-components';

type WrapperProps = {
  size: 'large' | 'small';
};

const wrapperModifiers = {
  small: () => css`
    height: 15.9rem;
  `,
  large: () => css`
    height: 20.4rem;
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ size }) => css`
    width: 32.8rem;
    background-color: #1e213a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.2rem 5rem 3.8rem;
    align-items: center;
    color: #e7e7eb;
    border-radius: 1rem;

    ${wrapperModifiers[size]}

    > h3 {
      font-size: 1.9rem;
    }
  `}
`;

export const Measure = styled.span`
  font-size: 3.6rem;
`;

export const PercentageBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.2rem;

  > header {
    display: flex;
    justify-content: space-between;
  }

  > progress {
    width: 100%;
  }
`;

type WindDetailProps = {
  degrees: number;
};

export const WindDetail = styled.div<WindDetailProps>`
  ${({ degrees }) => css`
    display: flex;
    align-items: center;
    font-size: 1.4rem;

    > svg {
      margin-right: 1.4rem;
      transform: rotate(${degrees}deg);
    }
  `}
`;
