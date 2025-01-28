import React, { useEffect, useState } from 'react';
import WorldWeather from './components/WorldWeather';

const App = () => {
    const [Weather, setWeather] = useState(null)

  return (
    <div>
     <WorldWeather />
    </div>
  )
}

export default App