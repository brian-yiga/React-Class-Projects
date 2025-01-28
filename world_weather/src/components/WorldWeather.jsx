import React, { useState } from 'react';

const WorldWeather = () => {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [conditions, setConditions] = useState('');

  const weatherApi = {
    key: 'f340581a0ed986857075b5f66bba2837',
    base: 'https://api.openweathermap.org/data/2.5/weather'
  }

  const searchInput = async () => {
    try {
    const response = await fetch(`${weatherApi.base}?q=${search}&units=metric&APPID=${weatherApi.key}`);
    const result = await response.json();

    console.log(result);
    setCity(result.name);
    setTemperature(result.main.temp);
    setConditions(result.weather[0].description);
  } catch (error){
    console.log('Error fetching the data', error);
  }
  };

  const handleKeyDown = (e) => {
    if ((e).key === 'Enter') {
      searchInput()
    }
  };



  // const searchInput = () => {
  //   fetch(`${weatherApi.base}?q=${search}&units=metric&APPID=${weatherApi.key}`)
  //     .then(res => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       setCity(result.name);
  //       setTemperature(result.main.temp); 
  //       setConditions(result.weather[0].description);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching weather data:', error);
  //     });
  // };

  return (
    <div>
      <h1 className='title'>Your World Weather</h1>
      <h2 className='tagline'>Check The Weather For Any City Here</h2>
      <div className="inputContainer">
      <input
        type="text"
        placeholder='Enter Your City...'
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={searchInput}>Search</button>
      </div>
      {city && <h4>City: {city}</h4>}
      {temperature && <h4>Temperature: {temperature}°C</h4>}
      {conditions && <h4>Conditions: {conditions}</h4>}
    </div>
  );
};

export default WorldWeather;
