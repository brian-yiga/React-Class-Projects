import React, { useEffect, useState } from 'react';
import WorldWeather from './components/WorldWeather';

const App = () => {
    const [Weather, setWeather] = useState(null)

    useEffect (() => {
        setTimeout(()=>{
            const sampleWeatherData = {
                city: "Uganda",
                temperature: "25°C",
                conditions: "Cloudy"
            }
            setWeather(sampleWeatherData)
        }, 2000)
    }, [])


  return (
    <div>
        {Weather ? 
        (<WorldWeather 
        city={Weather.city}
        temperature={Weather.temperature}
        conditions={Weather.conditions}/>)
        : 
        (
            <p>Loading weather data...</p>   
        )
    }
    </div>
  )
}

export default App