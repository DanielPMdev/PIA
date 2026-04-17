import React, { useState, useEffect, useRef } from 'react';

const GEOCODING_URL = 'https://geocoding-api.open-meteo.com/v1/search';

export default function CitySearch({ onCitySelect }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef(null);
  const debounceRef = useRef(null);

  // Debounced search
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${GEOCODING_URL}?name=${encodeURIComponent(query)}&count=5&language=es&format=json`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setResults(data.results);
          setIsOpen(true);
        } else {
          setResults([]);
          setIsOpen(true);
        }
      } catch {
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 350);

    return () => clearTimeout(debounceRef.current);
  }, [query]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (city) => {
    const cityName = `${city.name}${city.admin1 ? ', ' + city.admin1 : ''}, ${city.country}`;
    onCitySelect({
      name: cityName,
      lat: city.latitude,
      lon: city.longitude,
      country: city.country,
      countryCode: city.country_code,
    });
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  const getCountryFlag = (countryCode) => {
    if (!countryCode) return '🌍';
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return (
    <div className="city-search" ref={dropdownRef}>
      <div className="city-search-input-wrapper">
        <span className="city-search-icon">🔍</span>
        <input
          id="city-search-input"
          className="city-search-input"
          type="text"
          placeholder="Buscar ciudad..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setIsOpen(true)}
          autoComplete="off"
        />
        {query && (
          <button
            className="city-search-clear"
            onClick={handleClear}
            aria-label="Limpiar búsqueda"
          >
            ✕
          </button>
        )}
      </div>

      {isOpen && (
        <div className="city-search-dropdown">
          {isLoading ? (
            <div className="city-search-loading">
              <div className="loading-spinner" style={{ width: 20, height: 20, borderWidth: 2 }} />
              <span>Buscando...</span>
            </div>
          ) : results.length > 0 ? (
            results.map((city) => (
              <div
                key={`${city.id}`}
                className="city-search-item"
                onClick={() => handleSelect(city)}
              >
                <span className="city-search-item-icon">
                  {getCountryFlag(city.country_code)}
                </span>
                <div className="city-search-item-info">
                  <div className="city-search-item-name">
                    {city.name}{city.admin1 ? `, ${city.admin1}` : ''}
                  </div>
                  <div className="city-search-item-country">
                    {city.country} · {city.latitude.toFixed(2)}°, {city.longitude.toFixed(2)}°
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="city-search-no-results">
              No se encontraron resultados para "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
