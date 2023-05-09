import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import WeatherCard from './Components/WeatherCard';

// console.log(process.env.REACT_APP_API_KEY);

// console.log(apiKey);

function App() {
  // const apiKey = process.env.REACT_APP_API_KEY;

  const [data, setData] = useState({});
  const [location, setLocation] = useState('Dubai');
  const [coun, setCoun] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setLocation(e.target.value);
  };
  console.log(location);

  // useEffect(() => {
  //   axios.get(url).then((res) => {
  //     setData(res.data);

  //     console.log(res.data);

  //   })

  // }, [location])

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=00b1c13427b0fcc7d3fef6fa630fd6c3`
      );
      setData(res.data);

      console.log(res.data);
    })();

    (async () => {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?query=${location}&client_id=NDtHbGrynjfkc9e2wiwz0mSFo79XwoZknHXDDXwRb5A`
      );
      console.log(res.data.results[0]);
      setCoun(res.data.results[0].urls.small);
    })();
  }, [location]);

  return (
    <>
      <div className="App">
        <h1>Weather App🌤⛈⛅☁</h1>
        <input
          id="search"
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={location}
        />

        {/* <WeatherCard details={data}/> */}

        {location === '' ? (
          'Please enter a name of city'
        ) : (
          <WeatherCard details={data} loc={coun} />
        )}
      </div>
    </>
  );
}

export default App;
