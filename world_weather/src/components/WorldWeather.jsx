import React from 'react'

const WorldWeather = ({city, temperature, conditions}) => {
  return (
    <div>
    <h1>Your World Weather</h1>
    <h2>Check The Weather For Any City Here</h2>
    <h4>City: {city}</h4>
    <h4>Temperature is: {temperature}</h4>
    <h4>Right now the conditions are: {conditions}</h4>
    </div>
  )
}

export default WorldWeather