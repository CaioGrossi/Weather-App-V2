import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 46rem;
  justify-content: space-between;
  height: 100%;
  padding: 4.2rem 4.6rem;
  background-color: #1e213a;

  @media (max-width: 900px) {
    width: 100%;
    height: 81rem;
    padding: 1.8rem 1.2rem 10rem;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  > button {
    padding: 1rem 1.8rem;
    background-color: #6e707a;
    border: 0;
    color: #e7e7eb;
    cursor: pointer;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 4.8rem;
    color: #e7e7eb;
  }

  > h2 {
    font-size: 3.6rem;
    color: #a09fb1;
    margin-top: 8.7rem;
  }

  > img {
    width: 23rem;
    height: 23.4rem;
    margin-bottom: 8.7rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1.8rem;
  color: #88869d;

  span {
    margin-left: 1rem;
  }

  > div {
    display: flex;
    margin-top: 3.2rem;
  }
`;

type SearchBoxProps = {
  isOpen: boolean;
};

export const SearchBox = styled.div<SearchBoxProps>`
  ${({ isOpen }) => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 50;
    opacity: ${isOpen ? 1 : 0};
    background-color: white;
    pointer-events: ${isOpen ? 'all' : 'none'};
    padding: 2rem 4.6rem;
    background-color: #1e213a;

    > svg {
      color: white;
      cursor: pointer;
      margin-left: 100%;
    }
  `}
`;

export const SearchBar = styled.div`
  margin-top: 2rem;
  background-color: #1e213a;
  display: flex;
  justify-content: space-between;
`;

export const SearchInput = styled.div`
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  width: 25rem;

  > input {
    border: none;
    background-color: #1e213a;
    color: white;
    margin-left: 1rem;
    width: 100%;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export const SearchButton = styled.button`
  background-color: #3c47e9;
  color: white;
  border: 0;
  padding: 0 1.6rem;
  border-radius: 0.8rem;
  cursor: pointer;
`;

export const PlacesList = styled.ul`
  background-color: white;
  margin-top: 1rem;
  border-radius: 1rem;
`;

export const PlaceItem = styled.li`
  background-color: white;
  color: #1e213a;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
  }
`;
