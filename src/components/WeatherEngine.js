import React, {useState, useEffect} from 'react';

import WeatherCard from './WeatherCard/component';

const WeatherEngine = ({location}) => {
  //Variable for current query
  const[query, setQuery] = useState('');
  //Variable containing the weather data
  const[weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null
  });
  
  //Get data from API based on query and set the weather
  const getWeather = async(q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=1775d51d3e8458b665930f2e4acd22d3`
      );
    const restJSON = await apiRes.json();
    setWeather({
      temp: restJSON.main.temp,
      city: restJSON.name,
      condition: restJSON.weather[0].main,
      country: restJSON.sys.country
    });
  };

  //Function when city is searched for
  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  //Get the default cities data on page load
  useEffect( () => {
    getWeather(location);
  }, [location])

  return (
    <div className="App">
      <WeatherCard 
        temp={weather.temp} 
        condition={weather.condition} 
        city={weather.city} 
        country={weather.country}
      />
      <form>
        <input value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button onClick={e=>handleSearch(e)}>Search</button>
      </form>
    </div>
  );
};

export default WeatherEngine;

