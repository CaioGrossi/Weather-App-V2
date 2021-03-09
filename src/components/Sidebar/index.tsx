import { ChangeEvent, useEffect, useState } from 'react';

import { GoLocation } from 'react-icons/go';
import { MdMyLocation } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaWindowClose } from 'react-icons/fa';

import formatNumber from '../../utils/formatNumber';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete';

import * as S from './styles';

type SidebarProps = {
  location: string;
  temperature: number;
  weather: string;
  day: string;
  handleSearchLocation: (lat: number, lng: number) => void;
};

const Sidebar = ({
  location,
  temperature,
  weather,
  day,
  handleSearchLocation
}: SidebarProps) => {
  const [image, setImage] = useState();
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const {
    ready,
    value,
    suggestions: { status, data },
    clearSuggestions,
    setValue
  } = usePlacesAutocomplete();

  useEffect(() => {
    import(`../../assets/images/${weather}.png`).then((response) => {
      setImage(response.default);
    });
  }, [image, weather]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleSelect = async (val: string) => {
    setValue(val, false);
    clearSuggestions();

    const geoCodeParameter = {
      address: val
    };

    const geoCode = await getGeocode(geoCodeParameter);
    const latLang = await getLatLng(geoCode[0]);

    const { lat, lng } = latLang;

    setLat(lat);
    setLng(lng);
  };

  const handleSearchButton = () => {
    handleSearchLocation(lat, lng);
    setValue('');

    setSearchIsOpen(false);
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <S.PlaceItem
          key={place_id}
          onClick={() => handleSelect(suggestion.description)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </S.PlaceItem>
      );
    });

  return (
    <S.Wrapper>
      <S.Header>
        <button type="button" onClick={() => setSearchIsOpen(true)}>
          Search for places
        </button>
        <MdMyLocation size={40} color="#6e707a" />
      </S.Header>
      <S.Content>
        <img src={image} alt={weather} />
        <h1>{formatNumber(temperature, 2)}°C</h1>
        <h2>{weather}</h2>
      </S.Content>
      <S.Footer>
        <p>{day}</p>
        <div>
          <GoLocation size={20} />
          <span>{location}</span>
        </div>
      </S.Footer>

      <S.SearchBox isOpen={searchIsOpen}>
        <FaWindowClose
          size={25}
          color="#ffffff"
          onClick={() => setSearchIsOpen(false)}
        />
        <S.SearchBar>
          <S.SearchInput>
            <AiOutlineSearch size={20} color="white" />
            <input
              type="text"
              placeholder="search location"
              value={value}
              onChange={handleInput}
              disabled={!ready}
            />
          </S.SearchInput>

          <S.SearchButton onClick={() => handleSearchButton()}>
            Search
          </S.SearchButton>
        </S.SearchBar>
        {status === 'OK' && <S.PlacesList>{renderSuggestions()}</S.PlacesList>}
      </S.SearchBox>
    </S.Wrapper>
  );
};

export default Sidebar;
