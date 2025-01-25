import React from 'react'
import { useState } from 'react';

const UserProfileCard = ({name, age, avatar, title, location, skills, hobbies, isOnline, theme, toggleStatus}) => {
    const cardClass = theme === "dark" ? "card-dark" : "card-light";
    

  return (
    <div className={`user-profile-card ${cardClass}`}>
      <img src={avatar} alt={`${name}'s avatar`} />
      <h2>{name} ({age})</h2>
      <h3>{title}</h3>
      <p>Location: {location.city}, {location.country}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
      <p>Skills</p>
      <ul>
        {
          skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))
        }
      </ul>
      <p>Hobbies</p>
      <ul>
        {
          hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>  
          ))
        }
      </ul>
      <button onClick={toggleStatus}>Toggle Status</button>
      </div>
  )
}

export default UserProfileCard