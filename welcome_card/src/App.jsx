import React, { useState } from 'react'
import UserProfileCard from './components/UserProfileCard';
import avatar from "/src/assets/profile icon.png"


const App = () => {
  const [theme, setTheme] = useState("light")
  const [isOnline, SetIsOnline] = useState(true)
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleOnlineStatus = () => {
    SetIsOnline((prevStatus) => !prevStatus);
  };

  return (
    <div>
      <button onClick={toggleTheme}>Switch to {theme === "light" ? "dark" : "light" } theme</button>
      <UserProfileCard
      name="Brian Yiga"
      avatar={avatar}
      age={33}
      title="A Passionate Developer"
      location={{city: "Kampala", country: "Uganda"}}
      isOnline={isOnline}
      toggleStatus={toggleOnlineStatus}
      skills={["Javascript", "HTML", "CSS"]}
      hobbies={["Football", "Scrabble", "Video games"]}
      theme={theme}
      />
     
   </div>

  )
}

export default App;